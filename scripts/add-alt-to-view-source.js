import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manually if it exists
let VITE_STRAPI_URL = "http://localhost:2338";
try {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/^VITE_STRAPI_URL=(.+)$/m);
    if (match && match[1]) {
      VITE_STRAPI_URL = match[1].trim();
    }
  }
} catch (e) {
  console.warn("⚠️ Could not read .env file for STRAPI_URL, using default:", e);
}

const STRAPI_URL = process.env.VITE_STRAPI_URL || VITE_STRAPI_URL;

/**
 * Fetch blog posts from Strapi. If the request fails (e.g., no network),
 * return an empty array so the rest of the script can still generate the
 * static index.html files that already exist.
 */
async function fetchBlogPosts() {
  // Helper to fetch a single page of posts
  const fetchPage = async (page) => {
    const url = `${STRAPI_URL}/api/blog-posts?populate=coverImage&pagination[pageSize]=100&pagination[page]=${page}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`⚠️ Strapi request failed (page ${page}) with status ${res.status}`);
      return [];
    }
    const json = await res.json();
    return json.data || [];
  };

  const allPosts = [];
  let page = 1;
  while (true) {
    const pagePosts = await fetchPage(page);
    if (pagePosts.length === 0) break;
    allPosts.push(...pagePosts);
    page += 1;
    // Safety limit to avoid infinite loops
    if (page > 1000) {
      console.warn('⚠️ Pagination exceeded 1000 pages, aborting.');
      break;
    }
  }
  return allPosts;
}

function getStrapiMedia(url) {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

async function addAltToViewSource() {
  const posts = await fetchBlogPosts();

  const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error("❌ dist/index.html not found. Please run 'npm run build' first.");
    return;
  }
  const baseHTML = fs.readFileSync(indexPath, 'utf8');

  // ------------------------------------------------------------------
  // Clean any old redirect folders that may contain meta‑refresh redirects
  // ------------------------------------------------------------------
  const distDir = path.join(__dirname, '..', 'dist');
  fs.readdirSync(distDir, { withFileTypes: true }).forEach(entry => {
    if (entry.isDirectory()) {
      const idxPath = path.join(distDir, entry.name, 'index.html');
      if (fs.existsSync(idxPath)) {
        const content = fs.readFileSync(idxPath, 'utf8');
        if (content.includes('http-equiv="refresh"')) {
          // Delete the folder; it will be regenerated with proper SEO page
          fs.rmSync(path.join(distDir, entry.name), { recursive: true, force: true });
        }
      }
    }
  });

  // If there are no posts (e.g., fetch failed), just create a generic blog folder with a placeholder page.
  if (posts.length === 0) {
    const placeholderDir = path.join(__dirname, '..', 'dist', 'blog');
    if (!fs.existsSync(placeholderDir)) fs.mkdirSync(placeholderDir, { recursive: true });
    const placeholderHTML = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Blog</title></head><body><h1>Blog</h1><p>No posts available.</p></body></html>`;
    fs.writeFileSync(path.join(placeholderDir, 'index.html'), placeholderHTML);
    console.log('✅ Created placeholder blog index page (no posts fetched).');
  } else {
    posts.forEach(post => {
      let imageUrl = '';
      if (post.coverImage?.url) {
        imageUrl = getStrapiMedia(post.coverImage.url);
      } else if (post.coverImage?.data?.url) {
        imageUrl = getStrapiMedia(post.coverImage.data.url);
      }

      const hiddenImageTag = `
      <!-- Hidden image for SEO - shows blog title in View Source -->
      <div style="display:none;">
        <img src="${imageUrl}" alt="${post.title}" width="1200" height="630" />
      </div>`;

      const titleTag = `<title>${post.title}</title>`;
      const htmlWithTitle = baseHTML.replace(/<title>.*?<\/title>/i, titleTag);

      const metaTitleTag = `<meta name="title" content="${post.title}">`;
      const ogTitleTag = `<meta property="og:title" content="${post.title}">`;
      const modifiedHTML = htmlWithTitle.replace('</head>', `${metaTitleTag}\n${ogTitleTag}\n${hiddenImageTag}\n</head>`);

      // Output a single HTML file per post (e.g., slug.html)
      const outputPath = path.join(__dirname, '..', 'dist', `${post.slug}.html`);
      fs.writeFileSync(outputPath, modifiedHTML);
      console.log(`✅ Created: ${post.slug}.html with title and alt="${post.title}"`);

      // Also create a folder with index.html that contains the full SEO page (no redirect)
      const redirectDir = path.join(__dirname, '..', 'dist', post.slug);
      if (!fs.existsSync(redirectDir)) fs.mkdirSync(redirectDir, { recursive: true });
      // Write the same HTML we just wrote to the .html file into index.html inside the folder
      const folderIndexPath = path.join(redirectDir, 'index.html');
      fs.writeFileSync(folderIndexPath, modifiedHTML);
      console.log(`✅ Created folder /${post.slug}/index.html with full SEO page`);
    });
    console.log(`\n📦 Generated ${posts.length} blog post pages with dynamic alt in View Source`);
  }

  // ------------------------------------------------------------------
  // Generate static sub-directories with updated index.html for all regular pages
  // ------------------------------------------------------------------
  const staticPages = [
    {
      route: 'about',
      title: 'About Us | TRINAI',
      desc: "Learn more about TRINAI, a UAE-based technology leader in AI CCTV surveillance, ELV Solutions, and software systems."
    },
    {
      route: 'services',
      title: 'Our Services | TRINAI',
      desc: "Explore our intelligent solutions: surveillance, home automation, ICCC, ELV solutions, AI analytics, and software development."
    },
    {
      route: 'solutions',
      title: 'Our Solutions | TRINAI',
      desc: "Discover advanced, secure, and scalable solutions for commercial buildings, enterprise environments, and public safety."
    },
    {
      route: 'contact',
      title: 'Contact Us | TRINAI',
      desc: "Get in touch with TRINAI's experts for customized AI security and smart automation solutions in the UAE."
    },
    {
      route: 'blog',
      title: 'Blog | TRINAI',
      desc: "Read the latest insights and industry updates on security, artificial intelligence, automation, and tech trends."
    },
    {
      route: 'surveillance-systems',
      title: 'AI CCTV Surveillance Systems | TRINAI',
      desc: "Advanced AI CCTV surveillance systems for continuous monitoring and enterprise security in Dubai & UAE."
    },
    {
      route: 'software-development',
      title: 'Software Development Services | TRINAI',
      desc: "Tailored custom software development, mobile apps, HRMS, and enterprise ERP solutions in Dubai."
    },
    {
      route: 'software-development/hrms',
      title: 'Human Resource Management System (HRMS) | TRINAI',
      desc: "Centralized Human Resource Management System (HRMS) for automated attendance, leave, payroll, and compliance."
    },
    {
      route: 'software-development/erp',
      title: 'Enterprise Resource Planning (ERP) | TRINAI',
      desc: "Integrated ERP solutions to connect finance, inventory, sales, procurement, and operations into a single platform."
    },
    {
      route: 'software-development/custom-software',
      title: 'Custom Software Development | TRINAI',
      desc: "Tailored custom software engineering designed specifically for your corporate workflow, scaling, and automation."
    },
    {
      route: 'software-development/task-management',
      title: 'Enterprise Task & Project Management Platform (TMS) | TRINAI',
      desc: "TMS is a comprehensive enterprise task and project management platform that replaces disconnected tools with an integrated workspace."
    },
    {
      route: 'software-development/anpr-solutions',
      title: 'Automatic Number Plate Recognition (ANPR) | TRINAI',
      desc: "AI-powered technology that uses optical character recognition (OCR) and specialized cameras to read and convert vehicle license plates into digital data."
    },
    {
      route: 'iccc',
      title: 'Integrated Command & Control Center (ICCC) | TRINAI',
      desc: "Centralized Integrated Command & Control Center (ICCC) to unify monitoring, operations, and intelligence."
    },
    {
      route: 'home-automation',
      title: 'Home & Building Automation | TRINAI',
      desc: "Smart home automation solutions in UAE for lighting, climate, security, and absolute convenience."
    },
    {
      route: 'elv-solutions',
      title: 'ELV Solutions & Systems | TRINAI',
      desc: "End-to-end low voltage (ELV) systems, cabling, networking, and building security integration."
    },
    {
      route: 'ai-analytics',
      title: 'AI Smart Video Analytics | TRINAI',
      desc: "Transform surveillance data into real-time insights with face recognition, ANPR, crowd counting, and behavior analysis."
    }
  ];

  staticPages.forEach(p => {
    const pageDir = path.join(distDir, ...p.route.split('/'));
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const titleTag = `<title>${p.title}</title>`;
    let html = baseHTML.replace(/<title>.*?<\/title>/i, titleTag);

    // Replace or add meta description
    if (html.includes('name="description"')) {
      html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${p.desc}" />`);
    } else {
      html = html.replace('</head>', `<meta name="description" content="${p.desc}" />\n</head>`);
    }

    // Replace or add open graph property title and description
    if (html.includes('property="og:title"')) {
      html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${p.title}" />`);
    } else {
      html = html.replace('</head>', `<meta property="og:title" content="${p.title}" />\n</head>`);
    }

    if (html.includes('property="og:description"')) {
      html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${p.desc}" />`);
    } else {
      html = html.replace('</head>', `<meta property="og:description" content="${p.desc}" />\n</head>`);
    }

    // Replace twitter tags
    if (html.includes('name="twitter:title"')) {
      html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${p.title}" />`);
    }
    if (html.includes('name="twitter:description"')) {
      html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${p.desc}" />`);
    }

    // Write to folder/index.html
    fs.writeFileSync(path.join(pageDir, 'index.html'), html);
    console.log(`✅ Pre-rendered static page index for route /${p.route} with title and meta`);

    // Write to route.html (e.g. dist/about.html or dist/software-development/hrms.html)
    const htmlPath = path.join(distDir, `${p.route}.html`);
    const htmlDir = path.dirname(htmlPath);
    if (!fs.existsSync(htmlDir)) {
      fs.mkdirSync(htmlDir, { recursive: true });
    }
    fs.writeFileSync(htmlPath, html);
    console.log(`✅ Pre-rendered static page file for route /${p.route}.html`);
  });
}

addAltToViewSource().catch(console.error);
