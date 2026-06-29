// // src/pages/BlogPostPage.tsx
// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { Calendar, Clock, ArrowLeft, Tag, Loader2 } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchBlogPostBySlug, type BlogPostWithContent } from "@/lib/strapi";

// const BlogPostPage = () => {
//   const { lang } = useLang();
//   const navigate = useNavigate();
//   const { slug } = useParams();

//   const [post, setPost] = useState<BlogPostWithContent | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!slug) {
//       navigate("/blog");
//       return;
//     }

//     let mounted = true;

//     const loadPost = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchBlogPostBySlug(slug, lang);

//         if (!mounted) return;

//         if (data) {
//           console.log("✅ Post loaded:", data.title);
//           console.log("📄 Content length:", data.content?.length);
//           setPost(data);
//         } else {
//           navigate("/blog");
//         }
//       } catch (err) {
//         console.error("Error loading post:", err);
//         navigate("/blog");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     loadPost();
//     return () => {
//       mounted = false;
//     };
//   }, [slug, lang, navigate]);

//   if (loading) {
//     return (
//       <div
//         className="min-h-screen bg-background"
//         dir={lang === "ar" ? "rtl" : "ltr"}
//       >
//         <Navbar />
//         <div className="flex items-center justify-center min-h-[60vh]">
//           <div className="text-center">
//             <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
//             <p className="text-muted-foreground">
//               {lang === "ar" ? "جاري تحميل المقال..." : "Loading article..."}
//             </p>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (!post) {
//     return null;
//   }

//   return (
//     <div
//       className="min-h-screen bg-background"
//       dir={lang === "ar" ? "rtl" : "ltr"}
//     >
//       <Navbar />

//       {/* Back Button */}
//       <div className="pt-24 pb-8 bg-background">
//         <div className="container mx-auto px-4">
//           <button
//             onClick={() => navigate("/blog")}
//             className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//           >
//             <ArrowLeft
//               size={18}
//               className={lang === "ar" ? "rotate-180" : ""}
//             />
//             {lang === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
//           </button>
//         </div>
//       </div>

//       {/* Article Header */}
//       <section className="pb-12 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
//               {post.category}
//             </span>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
//               {post.title}
//             </h1>

//             <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-gray-200">
//               <div className="flex items-center gap-2">
//                 <Calendar size={16} />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock size={16} />
//                 <span>{post.readTime}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Tag size={16} />
//                 <span>{post.category}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Image */}
//       <section className="pb-12 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           {post.image ? (
//             <motion.img
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               src={post.image}
//               alt={post.title}
//               className="w-full h-auto object-cover rounded-2xl shadow-xl"
//               loading="lazy"
//             />
//           ) : (
//             <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
//               <Tag size={48} className="text-gray-400" />
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ✅ Article Content - Simplified & Bulletproof */}
//       <article className="pb-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className={`text-foreground ${lang === "ar" ? "text-right" : "text-left"}`}
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </div>
//       </article>

//       <Footer />
//     </div>
//   );
// };

// export default BlogPostPage;

// src/pages/BlogPostPage.tsx
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Calendar, Clock, ArrowLeft, Tag, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogPostBySlug, type BlogPostWithContent } from "@/lib/strapi";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet

const BlogPostPage = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { slug } = useParams();

  const [post, setPost] = useState<BlogPostWithContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      navigate("/blog");
      return;
    }

    let mounted = true;

    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPostBySlug(slug, lang);

        if (!mounted) return;

        if (data) {
          console.log("✅ Post loaded:", data.title);
          console.log("📄 Content length:", data.content?.length);
          setPost(data);
        } else {
          navigate("/blog");
        }
      } catch (err) {
        console.error("Error loading post:", err);
        navigate("/blog");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPost();
    return () => {
      mounted = false;
    };
  }, [slug, lang, navigate]);

  if (loading) {
    return (
      <div
        className="min-h-screen bg-background"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Helmet>
          <title>{lang === "ar" ? "جاري التحميل..." : "Loading..."}</title>
        </Helmet>
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              {lang === "ar" ? "جاري تحميل المقال..." : "Loading article..."}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* ✅ Dynamic Meta Tags for SEO */}
      <Helmet>
        <title>{post.title} | TRINAI</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://trinai.ae/${post.slug}`} />
        {post.image && (
          <>
            <meta property="og:image" content={post.image} />
            <meta property="og:image:alt" content={post.title} />
          </>
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && <meta name="twitter:image" content={post.image} />}

        {/* Canonical URL */}
        <link rel="canonical" href={`https://trinai.ae/${post.slug}`} />
      </Helmet>

      <Navbar />

      {/* Back Button */}
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            {lang === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image with Alt Text */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {post.image ? (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={post.image}
              alt={post.title}  // ✅ Dynamic alt from title
              title={post.title}  // ✅ Tooltip on hover
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
              loading="lazy"
              onError={(e) => {
                console.warn(`⚠️ Failed to load image for: ${post.title}`);
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23e5e7eb' width='800' height='400'/%3E%3Ctext fill='%239ca3af' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='18'%3ENo Image Available%3C/text%3E%3C/svg%3E";
              }}
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <Tag size={48} className="text-gray-400" />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-foreground ${lang === "ar" ? "text-right" : "text-left"}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
