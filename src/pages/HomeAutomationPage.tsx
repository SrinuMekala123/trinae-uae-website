// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import {
//   CheckCircle2,
//   Lightbulb,
//   Thermometer,
//   Shield,
//   Lock,
//   Blinds,
//   Tv,
//   Mic,
//   Battery,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const scrollImages = [
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/1.jpg?updatedAt=1773119110281",
//     captionKey: "homeAutoPage.scroll.1",
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/2.jpg?updatedAt=1773119110279",
//     captionKey: "homeAutoPage.scroll.2",
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/3.jpg?updatedAt=1773119110547",
//     captionKey: "homeAutoPage.scroll.3",
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/4.jpg?updatedAt=1773119110716",
//     captionKey: "homeAutoPage.scroll.4",
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/5.jpg?updatedAt=1773119110787",
//     captionKey: "homeAutoPage.scroll.5",
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/6.jpg?updatedAt=1773119110783",
//     captionKey: "", // No caption
//   },
//   {
//     src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/7.jpg?updatedAt=1773119110738",
//     captionKey: "homeAutoPage.scroll.7",
//   },
// ];

// const HomeAutomationPage = () => {
//   const { t } = useLang();
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % scrollImages.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       title: t("homeAutoPage.features.1.title"),
//       desc: t("homeAutoPage.features.1.desc"),
//       Icon: Lightbulb,
//     },
//     {
//       title: t("homeAutoPage.features.2.title"),
//       desc: t("homeAutoPage.features.2.desc"),
//       Icon: Thermometer,
//     },
//     {
//       title: t("homeAutoPage.features.3.title"),
//       desc: t("homeAutoPage.features.3.desc"),
//       Icon: Shield,
//     },
//     {
//       title: t("homeAutoPage.features.4.title"),
//       desc: t("homeAutoPage.features.4.desc"),
//       Icon: Lock,
//     },
//     {
//       title: t("homeAutoPage.features.5.title"),
//       desc: t("homeAutoPage.features.5.desc"),
//       Icon: Blinds,
//     },
//     {
//       title: t("homeAutoPage.features.6.title"),
//       desc: t("homeAutoPage.features.6.desc"),
//       Icon: Tv,
//     },
//     {
//       title: t("homeAutoPage.features.7.title"),
//       desc: t("homeAutoPage.features.7.desc"),
//       Icon: Mic,
//     },
//     {
//       title: t("homeAutoPage.features.8.title"),
//       desc: t("homeAutoPage.features.8.desc"),
//       Icon: Battery,
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
//               src="https://ik.imagekit.io/gjpszmq3v/trinai%20uae%20web%20videos/cd4302cc-3fff-44f2-892f-7f1d2fe92734.mp4?updatedAt=1775805370221"
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//           {/* Dark Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/30 to-[hsl(210,60%,22%)]/45" />
//         </div>

//         {/* Hero Content */}
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
//           >
//             {t("homeAutoPage.title")}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-lg text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed"
//           >
//             {t("homeAutoPage.desc")}
//           </motion.p>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("homeAutoPage.features.title")}
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 }}
//                 className="p-6 rounded-2xl glass group hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
//                   <f.Icon size={24} className="text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold font-heading text-foreground mb-3">
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

//       {/* Scroll Gallery */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
//           >
//             {t("homeAutoPage.experience")}
//           </motion.h2>

//           <div className="relative max-w-5xl mx-auto">
//             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
//               {scrollImages.map((img, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute inset-0"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: i === currentImage ? 1 : 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <img
//                     src={img.src}
//                     alt={`Smart Home ${i + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   {img.captionKey && (
//                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//                       <p className="text-white text-base md:text-lg">
//                         {t(img.captionKey)}
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             <div className="flex justify-center gap-2 mt-6">
//               {scrollImages.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentImage(i)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     i === currentImage ? "bg-primary w-8" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
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

// export default HomeAutomationPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  CheckCircle2,
  Lightbulb,
  Thermometer,
  Shield,
  Lock,
  Blinds,
  Tv,
  Mic,
  Battery,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ CORRECT IMPORTS - Match exact filenames in src/assets/
import homeAutoImg1 from "../assets/home-automation-image1.webp";
import homeAutoImg2 from "../assets/home-automation-image2.webp";
import homeAutoImg3 from "../assets/home-automation-image3.webp";
import homeAutoImg4 from "../assets/home-automation-image4.webp";
import homeAutoImg5 from "../assets/home-automation-image5.webp";
import homeAutoImg6 from "../assets/home-automation-image6.webp";
import homeAutoImg7 from "../assets/home-automation-image7.webp";
// ✅ FIXED: Changed "video" to "vedio" to match actual filename
import homeAutoVideo from "../assets/home-automation-vedio.webm";

const scrollImages = [
  {
    src: homeAutoImg1,
    captionKey: "homeAutoPage.scroll.1",
  },
  {
    src: homeAutoImg2,
    captionKey: "homeAutoPage.scroll.2",
  },
  {
    src: homeAutoImg3,
    captionKey: "homeAutoPage.scroll.3",
  },
  {
    src: homeAutoImg4,
    captionKey: "homeAutoPage.scroll.4",
  },
  {
    src: homeAutoImg5,
    captionKey: "homeAutoPage.scroll.5",
  },
  {
    src: homeAutoImg6,
    captionKey: "", // No caption
  },
  {
    src: homeAutoImg7,
    captionKey: "homeAutoPage.scroll.7",
  },
];

const HomeAutomationPage = () => {
  const { t } = useLang();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % scrollImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: t("homeAutoPage.features.1.title"),
      desc: t("homeAutoPage.features.1.desc"),
      Icon: Lightbulb,
    },
    {
      title: t("homeAutoPage.features.2.title"),
      desc: t("homeAutoPage.features.2.desc"),
      Icon: Thermometer,
    },
    {
      title: t("homeAutoPage.features.3.title"),
      desc: t("homeAutoPage.features.3.desc"),
      Icon: Shield,
    },
    {
      title: t("homeAutoPage.features.4.title"),
      desc: t("homeAutoPage.features.4.desc"),
      Icon: Lock,
    },
    {
      title: t("homeAutoPage.features.5.title"),
      desc: t("homeAutoPage.features.5.desc"),
      Icon: Blinds,
    },
    {
      title: t("homeAutoPage.features.6.title"),
      desc: t("homeAutoPage.features.6.desc"),
      Icon: Tv,
    },
    {
      title: t("homeAutoPage.features.7.title"),
      desc: t("homeAutoPage.features.7.desc"),
      Icon: Mic,
    },
    {
      title: t("homeAutoPage.features.8.title"),
      desc: t("homeAutoPage.features.8.desc"),
      Icon: Battery,
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
            {/* ✅ Use imported video variable */}
            <source src={homeAutoVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/30 to-[hsl(210,60%,22%)]/45" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
          >
            {t("homeAutoPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            {t("homeAutoPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("homeAutoPage.features.title")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl glass group hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                  <f.Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">
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

      {/* Scroll Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            {t("homeAutoPage.experience")}
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              {scrollImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={img.src}
                    alt={`Smart Home ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {img.captionKey && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-base md:text-lg">
                        {t(img.captionKey)}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {scrollImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentImage ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
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

export default HomeAutomationPage;
