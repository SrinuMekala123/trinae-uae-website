// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { CheckCircle2 } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const ELVSolutionsPage = () => {
//   const { t, lang } = useLang();

//   const services = [
//     {
//       title: t("elvPage.services.1.title"),
//       desc: t("elvPage.services.1.desc"),
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/Bio%20metric.png?updatedAt=1774848029302",
//     },
//     {
//       title: t("elvPage.services.2.title"),
//       desc: t("elvPage.services.2.desc"),
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/boom%20barrier.png?updatedAt=1774848029397",
//     },
//     {
//       title: t("elvPage.services.3.title"),
//       desc: t("elvPage.services.3.desc"),
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/cctv%20surviellance.png?updatedAt=1774848029292",
//     },
//     {
//       title: t("elvPage.services.4.title"),
//       desc: t("elvPage.services.4.desc"),
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/fire%20alarm.png?updatedAt=1774848029445",
//     },
//   ];

//   const whyChoose = [
//     t("elvPage.why.items.1"),
//     t("elvPage.why.items.2"),
//     t("elvPage.why.items.3"),
//     t("elvPage.why.items.4"),
//   ];

//   return (
//     <div
//       className="min-h-screen overflow-x-hidden bg-background"
//       dir={lang === "ar" ? "rtl" : "ltr"}
//     >
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
//               src="https://ik.imagekit.io/gjpszmq3v/home%20page%20video/elv.mp4"
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//           {/* Dark Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/30 to-[hsl(210,60%,22%)]/40" />
//         </div>

//         {/* Hero Content */}
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
//           >
//             {t("elvPage.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
//           >
//             {t("elvPage.desc")}
//           </motion.p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("elvPage.services.title")}
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((s, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 // ✅ UPDATED: Increased card min-height for larger images
//                 className="glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col min-h-[500px]"
//               >
//                 {/* Image - Significantly increased height for prominent display */}
//                 <div className="relative w-full h-64 md:h-72">
//                   <img
//                     src={s.image}
//                     alt={s.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
//                   />
//                 </div>

//                 {/* Content - Below image */}
//                 <div className="pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0">
//                   <h3 className="text-xl font-bold font-heading text-foreground mb-3">
//                     {s.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed break-words whitespace-normal">
//                     {s.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose */}
//       <section className="py-5 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("elvPage.why.title")}
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
//             {whyChoose.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-center gap-3 p-5 rounded-xl glass"
//               >
//                 <CheckCircle2 size={20} className="text-primary shrink-0" />
//                 <span className="text-base font-medium text-foreground break-words">
//                   {item}
//                 </span>
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

// export default ELVSolutionsPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Import local images from src/assets/
import bioMetricImg from "../assets/Bio-metric.webp";
import boomBarrierImg from "../assets/boom-barrier.webp";
import cctvSurveillanceImg from "../assets/cctv-surviellance.webp";
import fireAlarmImg from "../assets/fire-alarm.webp";

// ✅ Import local video from src/assets/
import elvVideo from "../assets/elv.webm";

const ELVSolutionsPage = () => {
  const { t, lang } = useLang();

  const services = [
    {
      title: t("elvPage.services.1.title"),
      desc: t("elvPage.services.1.desc"),
      image: bioMetricImg, // ✅ Use local image
    },
    {
      title: t("elvPage.services.2.title"),
      desc: t("elvPage.services.2.desc"),
      image: boomBarrierImg, // ✅ Use local image
    },
    {
      title: t("elvPage.services.3.title"),
      desc: t("elvPage.services.3.desc"),
      image: cctvSurveillanceImg, // ✅ Use local image
    },
    {
      title: t("elvPage.services.4.title"),
      desc: t("elvPage.services.4.desc"),
      image: fireAlarmImg, // ✅ Use local image
    },
  ];

  const whyChoose = [
    t("elvPage.why.items.1"),
    t("elvPage.why.items.2"),
    t("elvPage.why.items.3"),
    t("elvPage.why.items.4"),
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
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
            <source src={elvVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/30 to-[hsl(210,60%,22%)]/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
          >
            {t("elvPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
          >
            {t("elvPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("elvPage.services.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                // ✅ UPDATED: Increased card min-height for larger images
                className="glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col min-h-[500px]"
              >
                {/* Image - Significantly increased height for prominent display */}
                <div className="relative w-full h-64 md:h-72">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content - Below image */}
                <div className="pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words whitespace-normal">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-5 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("elvPage.why.title")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-5 rounded-xl glass"
              >
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span className="text-base font-medium text-foreground break-words">
                  {item}
                </span>
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

export default ELVSolutionsPage;
