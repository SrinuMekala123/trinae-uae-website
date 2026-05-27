// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import {
//   Monitor,
//   Brain,
//   AlertTriangle,
//   Database,
//   Cloud,
//   Building2,
//   Shield,
//   Truck,
//   Plane,
//   Factory,
//   Video,
//   Activity,
// } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const ICCCPage = () => {
//   const { t } = useLang();

//   const features = [
//     {
//       title: t("icccPage.features.1.title"),
//       desc: t("icccPage.features.1.desc"),
//       Icon: Monitor,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: t("icccPage.features.2.title"),
//       desc: t("icccPage.features.2.desc"),
//       Icon: Video,
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: t("icccPage.features.3.title"),
//       desc: t("icccPage.features.3.desc"),
//       Icon: Brain,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: t("icccPage.features.4.title"),
//       desc: t("icccPage.features.4.desc"),
//       Icon: AlertTriangle,
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: t("icccPage.features.5.title"),
//       desc: t("icccPage.features.5.desc"),
//       Icon: Database,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: t("icccPage.features.6.title"),
//       desc: t("icccPage.features.6.desc"),
//       Icon: Cloud,
//       color: "from-cyan-500 to-blue-500",
//     },
//   ];

//   const applications = [
//     { title: t("icccPage.applications.items.1"), Icon: Building2 },
//     { title: t("icccPage.applications.items.2"), Icon: Shield },
//     { title: t("icccPage.applications.items.3"), Icon: Truck },
//     { title: t("icccPage.applications.items.4"), Icon: Plane },
//     { title: t("icccPage.applications.items.5"), Icon: Factory },
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />

//       {/* Hero with Video Background - COMPACT HEIGHT (matching other pages) */}
//       <section className="py-28 relative overflow-hidden">
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
//               src="https://ik.imagekit.io/gjpszmq3v/home%20page%20video/iccc.mp4?updatedAt=1775805370357"
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//           {/* Dark Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/50 to-[hsl(210,60%,22%)]/60" />
//         </div>

//         {/* Hero Content - Reduced heading/description size for compact height */}
//         <div className="container mx-auto px-4 text-center relative z-10">
//           {/* ✅ Smaller heading: text-3xl sm:text-4xl lg:text-5xl */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4"
//           >
//             {t("icccPage.title")}
//           </motion.h1>

//           {/* ✅ Smaller subtitle: text-base, reduced margin */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-base text-white/70 max-w-3xl mx-auto mb-3"
//           >
//             {t("icccPage.subtitle")}
//           </motion.p>

//           {/* ✅ Smaller description: text-sm, tighter max-width */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-sm text-white/60 max-w-2xl mx-auto"
//           >
//             {t("icccPage.desc")}
//           </motion.p>
//         </div>
//       </section>

//       {/* What We Provide */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("icccPage.features.title")}
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 {/* Icon with gradient background */}
//                 <div
//                   className={`w-16 h-16 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}
//                 >
//                   <f.Icon className="w-8 h-8 text-white" strokeWidth={2} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold font-heading text-foreground mb-3">
//                   {f.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Applications */}
//       <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("icccPage.applications.title")}
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
//             {applications.map((app, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ scale: 1.03, y: -3 }}
//                 className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 {/* Icon with gradient background */}
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
//                   <app.Icon size={20} className="text-white" strokeWidth={2} />
//                 </div>
//                 {/* Text */}
//                 <span className="text-sm font-medium text-foreground">
//                   {app.title}
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

// export default ICCCPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Monitor,
  Brain,
  AlertTriangle,
  Database,
  Cloud,
  Building2,
  Shield,
  Truck,
  Plane,
  Factory,
  Video,
  Activity,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Import local video file
import icccVideo from "@/assets/iccc.webm";

const ICCCPage = () => {
  const { t } = useLang();

  const features = [
    {
      title: t("icccPage.features.1.title"),
      desc: t("icccPage.features.1.desc"),
      Icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("icccPage.features.2.title"),
      desc: t("icccPage.features.2.desc"),
      Icon: Video,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: t("icccPage.features.3.title"),
      desc: t("icccPage.features.3.desc"),
      Icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("icccPage.features.4.title"),
      desc: t("icccPage.features.4.desc"),
      Icon: AlertTriangle,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: t("icccPage.features.5.title"),
      desc: t("icccPage.features.5.desc"),
      Icon: Database,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("icccPage.features.6.title"),
      desc: t("icccPage.features.6.desc"),
      Icon: Cloud,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const applications = [
    { title: t("icccPage.applications.items.1"), Icon: Building2 },
    { title: t("icccPage.applications.items.2"), Icon: Shield },
    { title: t("icccPage.applications.items.3"), Icon: Truck },
    { title: t("icccPage.applications.items.4"), Icon: Plane },
    { title: t("icccPage.applications.items.5"), Icon: Factory },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero with Video Background - COMPACT HEIGHT (matching other pages) */}
      <section className="py-28 relative overflow-hidden">
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
            <source src={icccVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/50 to-[hsl(210,60%,22%)]/60" />
        </div>

        {/* Hero Content - Reduced heading/description size for compact height */}
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* ✅ Smaller heading: text-3xl sm:text-4xl lg:text-5xl */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4"
          >
            {t("icccPage.title")}
          </motion.h1>

          {/* ✅ Smaller subtitle: text-base, reduced margin */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base text-white/70 max-w-3xl mx-auto mb-3"
          >
            {t("icccPage.subtitle")}
          </motion.p>

          {/* ✅ Smaller description: text-sm, tighter max-width */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white/60 max-w-2xl mx-auto"
          >
            {t("icccPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("icccPage.features.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <f.Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("icccPage.applications.title")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Icon with gradient background */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <app.Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                {/* Text */}
                <span className="text-sm font-medium text-foreground">
                  {app.title}
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

export default ICCCPage;
