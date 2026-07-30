// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { ArrowRight } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // Import local images from src/assets folder
// import elvImage from "@/assets/6.png";
// import icccImage from "@/assets/5.png";
// import homeAutoImage from "@/assets/7.png";
// import aiAnalyticsImage from "@/assets/aismart-analytics.jpeg";
// import surveillanceImage from "@/assets/surveillance-systems.jpeg";

// const ServicesPage = () => {
//   const { t } = useLang();

//   // ✅ REORDERED: Surveillance Systems, ICCC, Home Automation, ELV Systems, AI Smart Analytics
//   const services = [
//     // 1. Surveillance Systems
//     {
//       title: t("servicesPage.surveillance.title"),
//       subtitle: t("servicesPage.surveillance.desc"),
//       image: surveillanceImage,
//       items: [
//         t("servicesPage.surveillance.items.1"),
//         t("servicesPage.surveillance.items.2"),
//         t("servicesPage.surveillance.items.3"),
//         t("servicesPage.surveillance.items.4"),
//         t("servicesPage.surveillance.items.5"),
//         t("servicesPage.surveillance.items.6"),
//       ],
//       link: "/surveillance-systems",
//     },
//     // 2. ICCC
//     {
//       title: t("servicesPage.iccc.title"),
//       subtitle: t("servicesPage.iccc.desc"),
//       image: icccImage,
//       items: [
//         t("servicesPage.iccc.items.1"),
//         t("servicesPage.iccc.items.2"),
//         t("servicesPage.iccc.items.3"),
//         t("servicesPage.iccc.items.4"),
//         t("servicesPage.iccc.items.5"),
//       ],
//       link: "/iccc",
//     },
//     // 3. Home Automation
//     {
//       title: t("servicesPage.home.title"),
//       subtitle: t("servicesPage.home.desc"),
//       image: homeAutoImage,
//       items: [
//         t("servicesPage.home.items.1"),
//         t("servicesPage.home.items.2"),
//         t("servicesPage.home.items.3"),
//         t("servicesPage.home.items.4"),
//         t("servicesPage.home.items.5"),
//         t("servicesPage.home.items.6"),
//         t("servicesPage.home.items.7"),
//         t("servicesPage.home.items.8"),
//       ],
//       link: "/home-automation",
//     },
//     // 4. ELV Systems
//     {
//       title: t("servicesPage.elv.title"),
//       subtitle: t("servicesPage.elv.desc"),
//       image: elvImage,
//       items: [
//         t("servicesPage.elv.items.1"),
//         t("servicesPage.elv.items.2"),
//         t("servicesPage.elv.items.3"),
//         t("servicesPage.elv.items.4"),
//       ],
//       link: "/elv-solutions",
//     },
//     // 5. AI Smart Analytics
//     {
//       title: t("servicesPage.analytics.title"),
//       subtitle: t("servicesPage.analytics.desc"),
//       image: aiAnalyticsImage,
//       items: [
//         t("servicesPage.analytics.items.1"),
//         t("servicesPage.analytics.items.2"),
//         t("servicesPage.analytics.items.3"),
//         t("servicesPage.analytics.items.4"),
//         t("servicesPage.analytics.items.5"),
//         t("servicesPage.analytics.items.6"),
//       ],
//       link: "/ai-analytics",
//     },
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-4"
//           >
//             {t("servicesPage.title")}
//           </motion.h1>
//         </div>
//       </section>

//       <section className="py-10">
//         <div className="container mx-auto px-4 space-y-20">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               // ✅ Alternating layout: odd items reverse image/content position
//               className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
//             >
//               {/* Image */}
//               <div className="relative group">
//                 <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
//                 <div className="relative rounded-3xl overflow-hidden">
//                   <img
//                     src={s.image}
//                     alt={s.title}
//                     className="w-full rounded-3xl aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
//                     {s.title}
//                   </h2>
//                   <p className="text-muted-foreground text-lg leading-relaxed mb-6">
//                     {s.subtitle}
//                   </p>
//                 </div>

//                 <ul className="space-y-3">
//                   {s.items.map((item, j) => (
//                     <li
//                       key={j}
//                       className="flex items-start gap-3 text-base text-muted-foreground"
//                     >
//                       <span className="text-primary mt-1.5 text-lg">•</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Explore Solutions Button */}
//                 <motion.button
//                   onClick={() => (window.location.href = s.link)}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
//                 >
//                   {t("services.exploreSolutions")}
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import local images from src/assets folder
import elvImage from "@/assets/6.png";
import icccImage from "@/assets/5.png";
import homeAutoImage from "@/assets/7.png";
import aiAnalyticsImage from "@/assets/aismart-analytics.jpeg";
import surveillanceImage from "@/assets/surveillance-systems.jpeg";
// ✅ Added: Software Development service image
// import softwareImage from "@/assets/software_service.jpeg";
import softwareImage from "@/assets/software.jpeg";

const ServicesPage = () => {
  const { t, lang } = useLang();

  // ✅ REORDERED: Surveillance Systems, Software Development, ICCC, Home Automation, ELV Systems, AI Smart Analytics
  const services = [
    // 1. Surveillance Systems
    {
      title: t("servicesPage.surveillance.title"),
      subtitle: t("servicesPage.surveillance.desc"),
      image: surveillanceImage,
      items: [
        t("servicesPage.surveillance.items.1"),
        t("servicesPage.surveillance.items.2"),
        t("servicesPage.surveillance.items.3"),
        t("servicesPage.surveillance.items.4"),
        t("servicesPage.surveillance.items.5"),
        t("servicesPage.surveillance.items.6"),
      ],
      link: "/surveillance-systems",
    },
    // ✅ 2. Software Development (New Service)
    {
      title: t("servicesPage.software.title"),
      subtitle: t("servicesPage.software.desc"),
      image: softwareImage, // ✅ Using your software_service.jpeg image
      items: [
        t("servicesPage.software.items.1"),
        t("servicesPage.software.items.2"),
        t("servicesPage.software.items.3"),
        t("servicesPage.software.items.4"),
        t("servicesPage.software.items.5"),
      ],
      link: "/software-development",
    },
    // 3. ICCC
    {
      title: t("servicesPage.iccc.title"),
      subtitle: t("servicesPage.iccc.desc"),
      image: icccImage,
      items: [
        t("servicesPage.iccc.items.1"),
        t("servicesPage.iccc.items.2"),
        t("servicesPage.iccc.items.3"),
        t("servicesPage.iccc.items.4"),
        t("servicesPage.iccc.items.5"),
      ],
      link: "/iccc",
    },
    // 4. Home Automation
    {
      title: t("servicesPage.home.title"),
      subtitle: t("servicesPage.home.desc"),
      image: homeAutoImage,
      items: [
        t("servicesPage.home.items.1"),
        t("servicesPage.home.items.2"),
        t("servicesPage.home.items.3"),
        t("servicesPage.home.items.4"),
        t("servicesPage.home.items.5"),
        t("servicesPage.home.items.6"),
        t("servicesPage.home.items.7"),
        t("servicesPage.home.items.8"),
      ],
      link: "/home-automation",
    },
    // 5. ELV Systems
    {
      title: t("servicesPage.elv.title"),
      subtitle: t("servicesPage.elv.desc"),
      image: elvImage,
      items: [
        t("servicesPage.elv.items.1"),
        t("servicesPage.elv.items.2"),
        t("servicesPage.elv.items.3"),
        t("servicesPage.elv.items.4"),
      ],
      link: "/elv-solutions",
    },
    // 6. AI Smart Analytics
    {
      title: t("servicesPage.analytics.title"),
      subtitle: t("servicesPage.analytics.desc"),
      image: aiAnalyticsImage,
      items: [
        t("servicesPage.analytics.items.1"),
        t("servicesPage.analytics.items.2"),
        t("servicesPage.analytics.items.3"),
        t("servicesPage.analytics.items.4"),
        t("servicesPage.analytics.items.5"),
        t("servicesPage.analytics.items.6"),
      ],
      link: "/ai-analytics",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative py-28 md:py-36 bg-[#090E1A] overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
        
        {/* Soft Glowing Atmosphere */}
        <div className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {lang === "ar" ? (
                <>
                  خدماتنا{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                    الذكية
                  </span>
                </>
              ) : (
                <>
                  Our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                    Intelligent
                  </span>{" "}
                  Services
                </>
              )}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              {t("servicesPage.subtitle")}
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan mx-auto rounded-full mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 relative bg-background/50 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        {/* Ambient Blur Blobs */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[75%] left-[8%] w-[380px] h-[380px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl space-y-16 relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-6 sm:p-8 lg:p-12 rounded-[2rem] bg-white border border-slate-100/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-primary/20 group relative overflow-hidden`}
            >
              {/* Decorative Number Badge */}
              <div className="text-6xl sm:text-7xl font-black text-slate-100 font-sans absolute top-6 right-8 rtl:right-auto rtl:left-8 select-none group-hover:text-primary/10 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Image Container */}
              <div className={`relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm shrink-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className={`flex flex-col space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {s.subtitle}
                  </p>
                </div>

                <ul className="space-y-3.5 my-2">
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3.5 text-sm sm:text-base text-muted-foreground"
                    >
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5 text-primary/80" size={18} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <motion.button
                    onClick={() => (window.location.href = s.link)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {t("services.exploreSolutions")}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
