// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import logo from "@/assets/logo.png";
// import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// const Footer = () => {
//   const { t } = useLang();
//   const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   const quickLinks = [
//     { key: "nav.home", id: "home" },
//     { key: "nav.services", id: "services" },
//     { key: "nav.about", id: "about" },
//     { key: "nav.solutions", id: "solutions" },
//     { key: "nav.contact", id: "contact" },
//   ];

//   const solutionLinks = [
//     "solutions.cctv.title",
//     "solutions.home.title",
//     "solutions.iccc.title",
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-[hsl(215,55%,15%)] to-[hsl(220,50%,10%)] text-white pt-16 pb-8 relative overflow-hidden">
//       <motion.div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
//       />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease }}
//           >
//             <img src={logo} alt="TRINAI" className="h-9 mb-4 brightness-0 invert" />
//             <p className="text-white/50 text-sm leading-relaxed mb-6">{t("footer.desc")}</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1, ease }}
//           >
//             <h4 className="text-sm font-bold text-white mb-4">{t("footer.quickLinks")}</h4>
//             <ul className="space-y-2.5">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button onClick={() => scrollTo(link.id)} className="text-white/40 hover:text-cyan-300 text-sm transition-colors duration-300 flex items-center gap-1 group">
//                     {t(link.key)}
//                     <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2, ease }}
//           >
//             <h4 className="text-sm font-bold text-white mb-4">{t("footer.solutions")}</h4>
//             <ul className="space-y-2.5">
//               {solutionLinks.map((key) => (
//                 <li key={key}>
//                   <button onClick={() => scrollTo("solutions")} className="text-white/40 hover:text-cyan-300 text-sm transition-colors duration-300 flex items-center gap-1 group">
//                     {t(key)}
//                     <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3, ease }}
//           >
//             <h4 className="text-sm font-bold text-white mb-4">{t("contact.label")}</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-white/40 text-sm">
//                 <Mail size={14} className="text-cyan-400 shrink-0" /> info@trinai.com
//               </li>
//               <li className="flex items-center gap-3 text-white/40 text-sm">
//                 <Phone size={14} className="text-cyan-400 shrink-0" /> +971 XX XXX XXXX
//               </li>
//               <li className="flex items-start gap-3 text-white/40 text-sm">
//                 <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" /> Dubai, UAE
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease }}
//           className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6"
//         />
//         <p className="text-center text-white/30 text-xs">
//           © {new Date().getFullYear()} Trinai. {t("footer.rights")}
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useLang();
  const location = useLocation();

  // Navigation handler - matches Navbar behavior
  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    if (location.pathname !== path) {
      window.location.href = path;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Quick Links - ✅ Solutions removed
  const quickLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.services", path: "/services" },
    { key: "nav.about", path: "/about" },
    { key: "nav.contact", path: "/contact" },
  ];

  // Services Links - ✅ New section with direct links
  const servicesLinks = [
    { label: "ELV Solutions in UAE", path: "/elv-solutions" },
    { label: "ICCC (Command & Control Centers UAE)", path: "/iccc" },
    { label: "Home Automation in UAE", path: "/home-automation" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[hsl(215,55%,15%)] to-[hsl(220,50%,10%)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20logo%20R%20white.png"
              alt="TRINAI"
              className="h-10 mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
          </motion.div>

          {/* Quick Links - ✅ Solutions removed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-white mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={(e) => handleNavigation(e, link.path)}
                    className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
                  >
                    {t(link.key)}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - ✅ NEW: Direct links to service pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((service, i) => (
                <li key={i}>
                  <button
                    onClick={(e) => handleNavigation(e, service.path)}
                    className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
                  >
                    {service.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - ✅ Updated Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-bold text-white mb-4">
              {t("contact.label")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={14} className="text-cyan-400 shrink-0" />{" "}
                info@trinai.ae
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={14} className="text-cyan-400 shrink-0" /> +971 XX
                XXX XXXX
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />{" "}
                Al Hebiah Fourth, Dubai Sports City, Dubai, United Arab Emirates
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6"
        />
        <p className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Trinai. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
