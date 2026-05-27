// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import {
//   Brain,
//   ScanLine,
//   Users,
//   ShieldAlert,
//   TrendingUp,
//   Bell,
// } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // Import images from assets
// import anprImage from "@/assets/ANPR.png";
// import faceRecImage from "@/assets/Face-Recognitation.png";
// import peopleCountImage from "@/assets/People-counting.png";
// import borderImage from "@/assets/boader-cross.png";
// import behaviorImage from "@/assets/Behaviour.png";
// import alertsImage from "@/assets/alets.png";

// const AiSmartAnalyticsPage = () => {
//   const { t } = useLang();

//   const features = [
//     {
//       title: t("aiAnalytics.features.1.title"),
//       desc: t("aiAnalytics.features.1.desc"),
//       icon: ScanLine,
//       image: anprImage,
//     },
//     {
//       title: t("aiAnalytics.features.2.title"),
//       desc: t("aiAnalytics.features.2.desc"),
//       icon: Users,
//       image: faceRecImage,
//     },
//     {
//       title: t("aiAnalytics.features.3.title"),
//       desc: t("aiAnalytics.features.3.desc"),
//       icon: Users,
//       image: peopleCountImage,
//     },
//     {
//       title: t("aiAnalytics.features.4.title"),
//       desc: t("aiAnalytics.features.4.desc"),
//       icon: ShieldAlert,
//       image: borderImage,
//     },
//     {
//       title: t("aiAnalytics.features.5.title"),
//       desc: t("aiAnalytics.features.5.desc"),
//       icon: TrendingUp,
//       image: behaviorImage,
//     },
//     {
//       title: t("aiAnalytics.features.6.title"),
//       desc: t("aiAnalytics.features.6.desc"),
//       icon: Bell,
//       image: alertsImage,
//     },
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />

//       {/* Hero with Video Background */}
//       <section className="py-32 relative overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 w-full h-full">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <source
//               src="https://ik.imagekit.io/gjpszmq3v/home%20page%20video/ai%20analytics.mp4?updatedAt=1775805370357"
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//           {/* Dark Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/50 to-[hsl(210,60%,22%)]/60" />
//         </div>

//         {/* Hero Content */}
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
//           >
//             {t("aiAnalyticsPage.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
//           >
//             {t("aiAnalyticsPage.subtitle")}
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-base text-white/60 max-w-3xl mx-auto"
//           >
//             {t("aiAnalyticsPage.desc")}
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Description - Reduced bottom padding */}
//       <section className="py-12 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-4">
//               <Brain size={20} className="text-blue-500" />
//               <span className="text-sm font-semibold text-blue-600">
//                 {t("aiAnalyticsPage.label")}
//               </span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
//               {t("aiAnalyticsPage.mainTitle")}
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               {t("aiAnalyticsPage.mainDesc")}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Grid - Reduced top padding */}
//       <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-8"
//           >
//             {t("aiAnalyticsPage.features.title")}
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 // ✅ UPDATED: Even larger card height for bigger images
//                 className="glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col min-h-[500px]"
//               >
//                 {/* Image - Significantly increased height for prominent display */}
//                 <div className="relative w-full h-64 md:h-72">
//                   <img
//                     src={f.image}
//                     alt={f.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
//                   />
//                 </div>

//                 {/* Content - Below image */}
//                 <div className="pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0">
//                   <h3 className="text-xl font-bold font-heading text-foreground mb-2">
//                     {f.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed break-words">
//                     {f.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
//           >
//             {t("cta.title1")}{" "}
//             <span className="text-cyan-400">{t("cta.title2")}</span>
//           </motion.h2>
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => (window.location.href = "/contact")}
//             className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
//           >
//             {t("cta.btn")}
//           </motion.button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AiSmartAnalyticsPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Brain,
  ScanLine,
  Users,
  ShieldAlert,
  TrendingUp,
  Bell,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images from assets
import anprImage from "@/assets/ANPR.png";
import faceRecImage from "@/assets/Face-Recognitation.png";
import peopleCountImage from "@/assets/People-counting.png";
import borderImage from "@/assets/boader-cross.png";
import behaviorImage from "@/assets/Behaviour.png";
import alertsImage from "@/assets/alets.png";

// ✅ Import local video from src/assets/
import aiAnalyticsVideo from "../assets/ai-analytics.webm";

const AiSmartAnalyticsPage = () => {
  const { t } = useLang();

  const features = [
    {
      title: t("aiAnalytics.features.1.title"),
      desc: t("aiAnalytics.features.1.desc"),
      icon: ScanLine,
      image: anprImage,
    },
    {
      title: t("aiAnalytics.features.2.title"),
      desc: t("aiAnalytics.features.2.desc"),
      icon: Users,
      image: faceRecImage,
    },
    {
      title: t("aiAnalytics.features.3.title"),
      desc: t("aiAnalytics.features.3.desc"),
      icon: Users,
      image: peopleCountImage,
    },
    {
      title: t("aiAnalytics.features.4.title"),
      desc: t("aiAnalytics.features.4.desc"),
      icon: ShieldAlert,
      image: borderImage,
    },
    {
      title: t("aiAnalytics.features.5.title"),
      desc: t("aiAnalytics.features.5.desc"),
      icon: TrendingUp,
      image: behaviorImage,
    },
    {
      title: t("aiAnalytics.features.6.title"),
      desc: t("aiAnalytics.features.6.desc"),
      icon: Bell,
      image: alertsImage,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero with Video Background */}
      <section className="py-32 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* ✅ Use local video file */}
            <source src={aiAnalyticsVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/50 to-[hsl(210,60%,22%)]/60" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
          >
            {t("aiAnalyticsPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
          >
            {t("aiAnalyticsPage.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base text-white/60 max-w-3xl mx-auto"
          >
            {t("aiAnalyticsPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* Main Description - Reduced bottom padding */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-4">
              <Brain size={20} className="text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">
                {t("aiAnalyticsPage.label")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {t("aiAnalyticsPage.mainTitle")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aiAnalyticsPage.mainDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Reduced top padding */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-8"
          >
            {t("aiAnalyticsPage.features.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                // ✅ UPDATED: Even larger card height for bigger images
                className="glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col min-h-[500px]"
              >
                {/* Image - Significantly increased height for prominent display */}
                <div className="relative w-full h-64 md:h-72">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content - Below image */}
                <div className="pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
          >
            {t("cta.title1")}{" "}
            <span className="text-cyan-400">{t("cta.title2")}</span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
          >
            {t("cta.btn")}
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiSmartAnalyticsPage;
