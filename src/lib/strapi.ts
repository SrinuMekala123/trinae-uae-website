// src/lib/strapi.ts
const STRAPI_URL = "http://183.82.117.36:2338";

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

// ✅ NEW: Validate image URL
export function isValidImageUrl(url: string): boolean {
  if (!url || url.trim() === "") return false;

  // Reject blob URLs (temporary browser URLs)
  if (url.startsWith("blob:")) return false;

  // Reject data URLs (too large for blog images)
  if (url.startsWith("data:")) return false;

  // Must start with http/https or be a relative path
  if (!url.startsWith("http") && !url.startsWith("/")) return false;

  return true;
}

export function getStrapiMedia(url: string | null): string {
  if (!url) return "";

  // ✅ Validate URL first
  if (!isValidImageUrl(url)) return "";

  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// ✅ NEW: Extract image URL with better validation
function extractImageUrl(item: any): string {
  let imageUrl = "";

  // Try different Strapi response formats
  if (item.coverImage?.url) {
    imageUrl = item.coverImage.url;
  } else if (item.coverImage?.data?.url) {
    imageUrl = item.coverImage.data.url;
  } else if (item.coverImage?.data?.attributes?.url) {
    imageUrl = item.coverImage.data.attributes.url;
  } else if (item.coverImage?.formats?.large?.url) {
    imageUrl = item.coverImage.formats.large.url;
  } else if (item.coverImage?.formats?.medium?.url) {
    imageUrl = item.coverImage.formats.medium.url;
  }

  // ✅ Validate and return
  return getStrapiMedia(imageUrl);
}

export async function fetchBlogPosts(
  locale: string = "en",
  searchTerm: string = "",
): Promise<BlogPost[]> {
  const params = new URLSearchParams({
    "populate[coverImage]": "true", // ✅ Explicitly populate coverImage
    locale: locale,
    "pagination[pageSize]": "100",
    "pagination[page]": "1",
    "sort[0]": "publishedAt:desc",
  });

  if (searchTerm) {
    params.append("filters[$or][0][title][$containsi]", searchTerm);
    params.append("filters[$or][1][excerpt][$containsi]", searchTerm);
  }

  const url = `${STRAPI_URL}/api/blog-posts?${params.toString()}`;
  console.log("🔗 Fetching blog posts:", url);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
    const json = await res.json();

    console.log(`📦 Fetched ${json.data?.length || 0} posts for locale: ${locale}`);

    return json.data.map((item: any) => {
      const imageUrl = extractImageUrl(item);

      console.log(`📝 Post: ${item.title}, Image: ${imageUrl || "No image"}`);

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        category: item.category || "Uncategorized",
        readTime: item.readTime || "5 min read",
        date: item.publishedAt
          ? new Date(item.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          : "",
        image: imageUrl, // ✅ Will be empty string if invalid
      };
    });
  } catch (error) {
    console.error("❌ Failed to fetch blog posts:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(
  slug: string,
  locale: string = "en",
): Promise<BlogPostWithContent | null> {
  const params = new URLSearchParams({
    "populate[coverImage]": "true", // ✅ Explicitly populate
    locale: locale,
    "filters[slug][$eq]": slug,
  });

  const url = `${STRAPI_URL}/api/blog-posts?${params.toString()}`;
  console.log("🔗 API URL:", url);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
    const json = await res.json();

    console.log("📦 Raw API response:", json);

    if (!json.data || json.data.length === 0) {
      console.warn("⚠️ No post found for slug:", slug);
      return null;
    }

    const item = json.data[0];
    const imageUrl = extractImageUrl(item);

    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      category: item.category || "Uncategorized",
      readTime: item.readTime || "5 min read",
      date: item.publishedAt
        ? new Date(item.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
        : "",
      image: imageUrl,
      content: item.content || "", // ✅ Return as string
    };
  } catch (error) {
    console.error("❌ Failed to fetch blog post:", error);
    return null;
  }
}