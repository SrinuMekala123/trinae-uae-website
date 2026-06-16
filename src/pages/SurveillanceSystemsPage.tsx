// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { Eye, HardDrive, Wifi, Grid3X3, CheckCircle2 } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // Import image from assets
// import applicationsImage from "@/assets/applications5.jpeg";

// const SurveillanceSystemsPage = () => {
//   const { t } = useLang();

//   const features = [
//     {
//       title: t("surveillancePage.features.1.title"),
//       desc: t("surveillancePage.features.1.desc"),
//       icon: Eye,
//     },
//     {
//       title: t("surveillancePage.features.2.title"),
//       desc: t("surveillancePage.features.2.desc"),
//       icon: HardDrive,
//     },
//     {
//       title: t("surveillancePage.features.3.title"),
//       desc: t("surveillancePage.features.3.desc"),
//       icon: Wifi,
//     },
//     {
//       title: t("surveillancePage.features.4.title"),
//       desc: t("surveillancePage.features.4.desc"),
//       icon: Grid3X3,
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
//               src="https://ik.imagekit.io/gjpszmq3v/trinai%20uae%20web%20videos/ab09bc94-22fa-4aee-a52a-08138bb10931.mp4?updatedAt=1775805370175"
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
//             {t("surveillancePage.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
//           >
//             {t("surveillancePage.subtitle")}
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Description */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               {t("surveillancePage.desc")}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-10 bg-gradient-to-b from-muted/30 to-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
//                   <f.icon size={28} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold font-heading text-foreground mb-3">
//                   {f.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Applications Section */}
//       <section className="py-10 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid lg:grid-cols-2 gap-12 items-center"
//           >
//             {/* Image Side */}
//             <div className="relative group">
//               <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
//               <div className="relative rounded-3xl overflow-hidden">
//                 <img
//                   src={applicationsImage}
//                   alt="Applications"
//                   className="w-full rounded-3xl aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* Content Side */}
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
//                   {t("surveillancePage.applications.title")}
//                 </h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t("surveillancePage.applications.desc")}
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-3">
//                 {[
//                   t("surveillancePage.applications.items.1"),
//                   t("surveillancePage.applications.items.2"),
//                   t("surveillancePage.applications.items.3"),
//                   t("surveillancePage.applications.items.4"),
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={18} className="text-primary shrink-0" />
//                     <span className="text-sm text-muted-foreground">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
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

// export default SurveillanceSystemsPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Eye, HardDrive, Wifi, Grid3X3, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import image from assets
import applicationsImage from "@/assets/applications5.jpeg";

// ✅ Import local video file
import surveillanceVideo from "@/assets/Surveillance-Systems.webm";

const SurveillanceSystemsPage = () => {
  const { t } = useLang();

  const features = [
    {
      title: t("surveillancePage.features.1.title"),
      desc: t("surveillancePage.features.1.desc"),
      icon: Eye,
    },
    {
      title: t("surveillancePage.features.2.title"),
      desc: t("surveillancePage.features.2.desc"),
      icon: HardDrive,
    },
    {
      title: t("surveillancePage.features.3.title"),
      desc: t("surveillancePage.features.3.desc"),
      icon: Wifi,
    },
    {
      title: t("surveillancePage.features.4.title"),
      desc: t("surveillancePage.features.4.desc"),
      icon: Grid3X3,
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
            <source src={surveillanceVideo} type="video/webm" />
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
            {t("surveillancePage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
          >
            {t("surveillancePage.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("surveillancePage.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <f.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={applicationsImage}
                  alt="Applications"
                  className="w-full rounded-3xl aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
                  {t("surveillancePage.applications.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("surveillancePage.applications.desc")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  t("surveillancePage.applications.items.1"),
                  t("surveillancePage.applications.items.2"),
                  t("surveillancePage.applications.items.3"),
                  t("surveillancePage.applications.items.4"),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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

export default SurveillanceSystemsPage;
