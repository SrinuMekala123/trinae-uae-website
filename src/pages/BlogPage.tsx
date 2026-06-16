// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { Calendar, ArrowRight, Search, Tag, Clock } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Import local blog image
// import blogImage from "@/blogimages/Blogimage.jpg";

// // Blog post data with bilingual support
// const blogPosts = [
//   {
//     id: 1,
//     title: {
//       en: "Why ELV Systems Are the Foundation of Smart Buildings in Dubai",
//       ar: "لماذا تُعد أنظمة الجهد المنخفض الأساس للمباني الذكية في دبي",
//     },
//     excerpt: {
//       en: "Discover how Extra Low Voltage systems power Dubai's smart buildings with intelligent automation, security, and energy efficiency.",
//       ar: "اكتشف كيف تُشغّل أنظمة الجهد المنخفض المباني الذكية في دبي من خلال الأتمتة الذكية، والأمان، وكفاءة الطاقة.",
//     },
//     image: blogImage,
//     category: {
//       en: "ELV Solutions",
//       ar: "حلول الجهد المنخفض",
//     },
//     date: "May 18, 2026",
//     readTime: {
//       en: "8 min read",
//       ar: "8 دقائق قراءة",
//     },
//     slug: "why-elv-systems-foundation-smart-buildings-dubai",
//   },
// ];

// const BlogPage = () => {
//   const { t, lang } = useLang();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPosts = blogPosts.filter(
//     (post) =>
//       post.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt[lang].toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   return (
//     <div
//       className="min-h-screen bg-background"
//       dir={lang === "ar" ? "rtl" : "ltr"}
//     >
//       <Navbar />

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
//           >
//             {lang === "ar" ? "المدونة" : "Blog & Insights"}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-muted-foreground max-w-2xl mx-auto"
//           >
//             {lang === "ar"
//               ? "اكتشف أحدث الرؤى حول المراقبة بالذكاء الاصطناعي، الأتمتة الذكية، وتقنيات الأمان"
//               : "Discover the latest insights on AI surveillance, smart automation, and security technology"}
//           </motion.p>
//         </div>
//       </section>

//       {/* Search */}
//       <section className="py-8 bg-background border-b border-gray-200/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-md mx-auto">
//             <div className="relative">
//               <Search
//                 className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
//                   lang === "ar" ? "right-3" : "left-3"
//                 }`}
//                 size={18}
//               />
//               <input
//                 type="text"
//                 placeholder={
//                   lang === "ar" ? "البحث في المدونة..." : "Search articles..."
//                 }
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className={`w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
//                   lang === "ar" ? "text-right pr-10 pl-4" : ""
//                 }`}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4">
//           {filteredPosts.length > 0 ? (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//               {filteredPosts.map((post, index) => (
//                 <motion.article
//                   key={post.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   // ✅ Navigate to root-level slug (no /blog/ prefix)
//                   onClick={() => navigate(`/${post.slug}`)}
//                   className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
//                 >
//                   {/* Image - Shows Complete Image */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={post.image}
//                       alt={post.title[lang]}
//                       className="w-full h-auto object-contain"
//                       loading="lazy"
//                     />
//                     <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
//                       {post.category[lang]}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col flex-1">
//                     <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         <span>{post.date}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock size={14} />
//                         <span>{post.readTime[lang]}</span>
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-bold font-heading text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
//                       {post.title[lang]}
//                     </h3>

//                     <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
//                       {post.excerpt[lang]}
//                     </p>

//                     <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
//                       {lang === "ar" ? "اقرأ المزيد" : "Read Article"}
//                       <ArrowRight
//                         size={16}
//                         className={lang === "ar" ? "rotate-180" : ""}
//                       />
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <Tag
//                 size={48}
//                 className="mx-auto text-muted-foreground/50 mb-4"
//               />
//               <h3 className="text-xl font-semibold text-foreground mb-2">
//                 {lang === "ar" ? "لا توجد مقالات" : "No articles found"}
//               </h3>
//               <p className="text-muted-foreground">
//                 {lang === "ar"
//                   ? "جرب تغيير معايير البحث"
//                   : "Try adjusting your search"}
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default BlogPage;

// src/pages/BlogPage.tsx
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Calendar, ArrowRight, Search, Tag, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBlogPosts, type BlogPost } from "@/lib/strapi";

const BlogPage = () => {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPosts(lang, searchTerm);
        if (mounted) setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPosts();
    return () => {
      mounted = false;
    };
  }, [lang, searchTerm]);

  const filteredPosts = searchTerm
    ? posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : posts;

  return (
    <div
      className="min-h-screen bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
          >
            {lang === "ar" ? "المدونة" : "Blog & Insights"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {lang === "ar"
              ? "اكتشف أحدث الرؤى حول المراقبة بالذكاء الاصطناعي، الأتمتة الذكية، وتقنيات الأمان"
              : "Discover the latest insights on AI surveillance, smart automation, and security technology"}
          </motion.p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-background border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                  lang === "ar" ? "right-3" : "left-3"
                }`}
                size={18}
              />
              <input
                type="text"
                placeholder={
                  lang === "ar" ? "البحث في المدونة..." : "Search articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
                  lang === "ar" ? "text-right pr-10 pl-4" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="mt-4 text-muted-foreground">
                {lang === "ar" ? "جاري التحميل..." : "Loading articles..."}
              </p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.documentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/${post.slug}`)}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image Section - Simple & Reliable */}
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%239ca3af' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
                          e.currentTarget.onerror = null;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <Tag size={40} className="text-gray-400" />
                      </div>
                    )}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm z-10">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      {lang === "ar" ? "اقرأ المزيد" : "Read Article"}
                      <ArrowRight
                        size={16}
                        className={lang === "ar" ? "rotate-180" : ""}
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Tag
                size={48}
                className="mx-auto text-muted-foreground/50 mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {lang === "ar" ? "لا توجد مقالات" : "No articles found"}
              </h3>
              <p className="text-muted-foreground">
                {lang === "ar"
                  ? "جرب تغيير معايير البحث"
                  : "Try adjusting your search"}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
