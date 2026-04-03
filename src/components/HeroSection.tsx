// import { motion } from "framer-motion";
// import { ArrowRight, Eye, Shield, Wifi } from "lucide-react";
// import { useLang } from "@/lib/i18n";
// import { useState, useEffect } from "react";

// const HERO_VIDEOS = [
//   {
//     url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/camera%20video.mp4?updatedAt=1771487209171",
//     title: "AI CCTV Surveillance",
//     icon: Eye,
//   },
//   {
//     url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/dubai%20home%20automation%20video.mp4?updatedAt=1771487209782",
//     title: "Home Automation",
//     icon: Shield,
//   },
//   {
//     url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/iccc%20video%20-.mp4?updatedAt=1771487209859",
//     title: "ICCC",
//     icon: Wifi,
//   },
// ];

// const HeroSection = () => {
//   const { t } = useLang();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (isHovering) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [isHovering]);

//   const currentVideo = HERO_VIDEOS[currentSlide];

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Video Background */}
//       <div className="absolute inset-0">
//         {HERO_VIDEOS.map((video, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1 }}
//           >
//             <video
//               src={video.url}
//               className="absolute inset-0 w-full h-full object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//             {/* ✅ Enhanced white overlay - More opacity for better text visibility */}
//             <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/55 to-white/65" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10 text-center pt-24">
//         {/* Tagline - Professional blue styling */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 shadow-lg mb-8"
//         >
//           <Eye size={16} className="text-blue-600" />
//           <span className="text-sm font-semibold text-slate-800 tracking-wide">
//             AI CCTV Surveillance / Home Automation / ICCC
//           </span>
//         </motion.div>

//         {/* Main Title - Dark blue/gray for professional look */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 max-w-6xl mx-auto leading-tight"
//         >
//           Welcome to Trinai <br className="hidden sm:block" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
//             Enter Our World of Smart Security.
//           </span>
//         </motion.h1>

//         {/* Subtitle - Professional dark gray */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
//         >
//           Empower Smart Security with AI Surveillance, Home Automation, and an
//           Integrated Command and Control Center
//         </motion.p>

//         {/* CTA Buttons - Professional blue colors */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-4 mb-16"
//         >
//           {/* Book a Consultation - Primary blue gradient */}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               window.location.href = "/contact";
//             }}
//             className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300"
//           >
//             {t("hero.cta1")}
//             <ArrowRight
//               size={18}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>

//           {/* Explore Solutions - Light blue with border */}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               window.location.href = "/services";
//             }}
//             className="px-8 py-4 rounded-2xl border-2 border-blue-600/40 bg-white/90 backdrop-blur-md text-blue-700 font-semibold text-base hover:bg-blue-50 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
//           >
//             {t("hero.cta2")}
//           </button>
//         </motion.div>

//         {/* Slide Indicators - Blue color */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {HERO_VIDEOS.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "w-8 bg-blue-600"
//                   : "w-2 bg-blue-400/60 hover:bg-blue-500/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { ArrowRight, Eye, Shield, Wifi } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";

const HERO_VIDEOS = [
  {
    url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/camera%20video.mp4?updatedAt=1771487209171",
    title: "AI CCTV Surveillance",
    icon: Eye,
  },
  {
    url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/dubai%20home%20automation%20video.mp4?updatedAt=1771487209782",
    title: "Home Automation",
    icon: Shield,
  },
  {
    url: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/iccc%20video%20-.mp4?updatedAt=1771487209859",
    title: "ICCC",
    icon: Wifi,
  },
];

const HeroSection = () => {
  const { t } = useLang();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const currentVideo = HERO_VIDEOS[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {HERO_VIDEOS.map((video, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <video
              src={video.url}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8"
        >
          <Eye size={16} className="text-cyan-400" />
          <span className="text-sm font-medium text-white tracking-wide">
            {t("hero.tag1")} / {t("hero.tag2")} / {t("hero.tag3")}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-6xl mx-auto leading-tight"
        >
          {t("hero.title1")} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {t("hero.title2")} {t("hero.title3")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.desc")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {/* Book a Consultation - Navigates to /contact */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
            }}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl btn-gradient text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all"
          >
            {t("hero.cta1")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* ✅ Explore Services - Navigates to /services page */}
          <button
            onClick={(e) => {
              e.preventDefault();
              // ✅ Navigate to Services page
              window.location.href = "/services";
            }}
            className="px-8 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-base hover:bg-white/20 transition-all"
          >
            {t("hero.cta2")}
          </button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_VIDEOS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
