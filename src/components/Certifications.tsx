// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";

// const certifications = [
//   "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/certifications/1.png",

//   "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/certifications/4.png",
// ];

// const Certifications = () => {
//   const { t } = useLang();

//   return (
//     <section
//       className="py-20 relative overflow-hidden"
//       style={{
//         backgroundImage: `url('https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/uae%20and%20india%20flag.jpg.jpeg?updatedAt=1771485868345')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-background/90" />

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
//             {t("certifications.title")}
//           </span>
//           <p className="text-muted-foreground">{t("certifications.desc")}</p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//           {certifications.map((cert, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="p-6 rounded-2xl glass flex items-center justify-center bg-white/90"
//             >
//               <img
//                 src={cert}
//                 alt={`Certification ${i + 1}`}
//                 className="max-w-full h-auto max-h-24 object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

// ✅ Import local certification images
import cmmiCert from "@/assets/cmmi.webp";
import isoCert from "@/assets/iso.webp";

// ✅ Import local background image
import uaeIndiaFlag from "@/assets/uae-and-india-flag.webp";

const certifications = [
  cmmiCert, // ✅ Local file
  isoCert, // ✅ Local file
];

const Certifications = () => {
  const { t } = useLang();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        // ✅ Use local background image
        backgroundImage: `url('${uaeIndiaFlag}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-background/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("certifications.title")}
          </span>
          <p className="text-muted-foreground">{t("certifications.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl glass flex items-center justify-center bg-white/90"
            >
              <img
                src={cert}
                alt={`Certification ${i + 1}`}
                className="max-w-full h-auto max-h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
