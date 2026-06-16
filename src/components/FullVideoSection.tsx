// import { motion, useScroll, useTransform } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { useRef } from "react";

// const FullVideoSection = () => {
//   const { t } = useLang();
//   const VIDEO_URL =
//     "https://ik.imagekit.io/gjpszmq3v/home%20page%20video/home%20page%20Video.mp4";

//   const containerRef = useRef<HTMLDivElement>(null);

//   // Track scroll progress with peak at center
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.85", "center center", "end 0.15"],
//   });

//   // Scale: Starts at 35%, peaks at 100% when centered, settles at 98%
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.98]);

//   // Opacity fades in smoothly
//   const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative overflow-visible bg-[hsl(215,55%,18%)] pt-28 pb-32"
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">
//             {t("fullVideo.title")}
//           </h2>
//           <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
//             {t("fullVideo.desc")}
//           </p>
//         </motion.div>

//         {/* Video Container - Sticky + Scroll Animation */}
//         <motion.div
//           style={{ scale, opacity }}
//           className="sticky top-28 z-30 w-full max-w-6xl mx-auto flex justify-center"
//         >
//           {/* ✅ DECREASED HEIGHT: Changed from 56.25% (16:9) to 45% for a shorter, compact look */}
//           <div className="relative w-full" style={{ paddingBottom: "45%" }}>
//             <video
//               src={VIDEO_URL}
//               className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
//               autoPlay
//               muted
//               loop
//               playsInline
//               controls
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FullVideoSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useRef } from "react";

// ✅ Import local video file
import homePageVideo from "@/assets/home-page-Video.webm";

const FullVideoSection = () => {
  const { t } = useLang();

  // ✅ Use imported local video
  const VIDEO_URL = homePageVideo;

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress with peak at center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center center", "end 0.15"],
  });

  // Scale: Starts at 35%, peaks at 100% when centered, settles at 98%
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.98]);

  // Opacity fades in smoothly
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-visible bg-[hsl(215,55%,18%)] pt-28 pb-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">
            {t("fullVideo.title")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            {t("fullVideo.desc")}
          </p>
        </motion.div>

        {/* Video Container - Sticky + Scroll Animation */}
        <motion.div
          style={{ scale, opacity }}
          className="sticky top-28 z-30 w-full max-w-6xl mx-auto flex justify-center"
        >
          {/* ✅ DECREASED HEIGHT: Changed from 56.25% (16:9) to 45% for a shorter, compact look */}
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            <video
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullVideoSection;
