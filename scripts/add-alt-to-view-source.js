import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STRAPI_URL = "http://183.82.117.36:2338";

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
    return;
  }

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

addAltToViewSource().catch(console.error);
