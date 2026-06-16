// src/lib/strapi.ts
// const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
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

export function getStrapiMedia(url: string | null): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

export async function fetchBlogPosts(
  locale: string = "en",
  searchTerm: string = "",
): Promise<BlogPost[]> {
  const params = new URLSearchParams({
    populate: "*",
    locale: locale,
    "pagination[pageSize]": "100",
    sort: "publishedAt:desc",
  });

  if (searchTerm) {
    params.append("filters[$or][0][title][$containsi]", searchTerm);
    params.append("filters[$or][1][excerpt][$containsi]", searchTerm);
  }

  const url = `${STRAPI_URL}/api/blog-posts?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Strapi API error: ${res.status}`);
    const json = await res.json();

    return json.data.map((item: any) => {
      let imageUrl = "";
      if (item.coverImage?.url) {
        imageUrl = item.coverImage.url;
      } else if (item.coverImage?.data?.url) {
        imageUrl = item.coverImage.data.url;
      } else if (item.coverImage?.data?.attributes?.url) {
        imageUrl = item.coverImage.data.attributes.url;
      }

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        category: item.category,
        readTime: item.readTime,
        date: item.publishedAt
          ? new Date(item.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "",
        image: imageUrl ? getStrapiMedia(imageUrl) : "",
      };
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(
  slug: string,
  locale: string = "en",
): Promise<BlogPostWithContent | null> {
  const params = new URLSearchParams({
    populate: "*",
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
    console.log("📄 Raw content field:", item.content);

    // Extract image URL
    let imageUrl = "";
    if (item.coverImage?.url) {
      imageUrl = item.coverImage.url;
    } else if (item.coverImage?.data?.url) {
      imageUrl = item.coverImage.data.url;
    } else if (item.coverImage?.data?.attributes?.url) {
      imageUrl = item.coverImage.data.attributes.url;
    }

    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      category: item.category,
      readTime: item.readTime,
      date: item.publishedAt
        ? new Date(item.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "",
      image: imageUrl ? getStrapiMedia(imageUrl) : "",
      content: item.content || [], // ✅ Return the array, not string!
    };
  } catch (error) {
    console.error("❌ Failed to fetch blog post:", error);
    return null;
  }
}
