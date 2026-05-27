// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { Shield, Building2, Home, Plug } from "lucide-react";

// const features = [
//   {
//     titleKey: "features.f1.title",
//     descKey: "features.f1.desc",
//     Icon: Shield,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     titleKey: "features.f2.title",
//     descKey: "features.f2.desc",
//     Icon: Building2,
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     titleKey: "features.f3.title",
//     descKey: "features.f3.desc",
//     Icon: Home,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     titleKey: "features.f4.title",
//     descKey: "features.f4.desc",
//     Icon: Plug,
//     color: "from-cyan-500 to-blue-500",
//   },
// ];

// const FeaturesSection = () => {
//   const { t } = useLang();

//   return (
//     <section className="py-20 bg-gradient-to-b from-background to-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
//             {t("features.label")}
//           </span>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group text-center p-8 rounded-2xl glass hover:shadow-xl transition-all duration-300"
//             >
//               <div
//                 className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//               >
//                 <f.Icon className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-lg font-bold font-heading text-foreground mb-3">
//                 {t(f.titleKey)}
//               </h3>
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 {t(f.descKey)}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Shield, Building2, Home, Plug, BarChart3 } from "lucide-react"; // ✅ Added BarChart3 import

const features = [
  {
    titleKey: "features.f1.title",
    descKey: "features.f1.desc",
    Icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    titleKey: "features.f2.title",
    descKey: "features.f2.desc",
    Icon: Building2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    titleKey: "features.f3.title",
    descKey: "features.f3.desc",
    Icon: Home,
    color: "from-blue-500 to-cyan-500",
  },
  {
    titleKey: "features.f4.title",
    descKey: "features.f4.desc",
    Icon: Plug,
    color: "from-cyan-500 to-blue-500",
  },
  // ✅ NEW: 5th Card - AI Smart Analytics
  {
    titleKey: "features.f5.title",
    descKey: "features.f5.desc",
    Icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
  },
];

const FeaturesSection = () => {
  const { t } = useLang();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("features.label")}
          </span>
        </motion.div>

        {/* ✅ Updated grid to handle 5 cards: 4 on large screens, 5th wraps to next row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl glass hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <f.Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                {t(f.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed break-words">
                {t(f.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
