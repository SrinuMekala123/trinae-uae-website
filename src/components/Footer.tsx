// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUpRight,
//   Linkedin,
//   Facebook,
//   Instagram,
//   Shield,
// } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const Footer = () => {
//   const { t, lang } = useLang();
//   const location = useLocation();

//   // Navigation handler
//   const handleNavigation = (e: React.MouseEvent, path: string) => {
//     e.preventDefault();

//     if (location.pathname !== path) {
//       window.location.href = path;
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Quick Links
//   const quickLinks = [
//     { key: "nav.home", path: "/" },
//     { key: "nav.services", path: "/services" },
//     { key: "nav.about", path: "/about" },
//     { key: "nav.contact", path: "/contact" },
//   ];

//   // Services Links
//   const servicesLinks = [
//     {
//       labelKey: "servicesPage.surveillance.title",
//       path: "/surveillance-systems",
//     },
//     { labelKey: "servicesPage.iccc.title", path: "/iccc" },
//     { labelKey: "servicesPage.home.title", path: "/home-automation" },
//     { labelKey: "servicesPage.elv.title", path: "/elv-solutions" },
//     { labelKey: "servicesPage.analytics.title", path: "/ai-analytics" },
//   ];

//   // Contact Info
//   const contactEmail = "info@trinai.ae";
//   const contactPhone = "+971 55 551 7511";
//   const contactAddress =
//     lang === "ar"
//       ? "الحبية الرابعة، مدينة دبي الرياضية، دبي، الإمارات العربية المتحدة"
//       : "Al Hebiah Fourth, Dubai Sports City, Dubai, United Arab Emirates";

//   // Social Media Links (YouTube removed)
//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       url: "https://www.linkedin.com/company/trinaiae/",
//     },
//     {
//       name: "Facebook",
//       icon: Facebook,
//       url: "https://www.facebook.com/profile.php?id=61587721504259",
//     },
//     {
//       name: "Instagram",
//       icon: Instagram,
//       url: "https://www.instagram.com/trinai_uae/",
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-[hsl(215,55%,15%)] to-[hsl(220,50%,10%)] text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           {/* Logo & Social Media - With left margin */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6 pl-0 md:pl-8"
//           >
//             {/* ✅ Logo from public folder */}
//             <img src="/logo-white.png" alt="TRINAI" className="h-10" />

//             {/* Social Media Icons - Added more gap from logo */}
//             <div className="pt-4">
//               <h4 className="text-sm font-bold text-white mb-4">
//                 {lang === "ar" ? "تابعنا" : "Follow Us"}
//               </h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={social.name}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-300/50 hover:bg-white/15 transition-all duration-300"
//                       aria-label={social.name}
//                     >
//                       <Icon size={18} />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <h4 className="text-sm font-bold text-white mb-4">
//               {t("footer.quickLinks")}
//             </h4>
//             <ul className="space-y-2.5">
//               {quickLinks.map((link) => (
//                 <li key={link.key}>
//                   <button
//                     onClick={(e) => handleNavigation(e, link.path)}
//                     className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
//                   >
//                     <ArrowUpRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
//                     />
//                     {t(link.key)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="text-sm font-bold text-white mb-4">
//               {t("footer.services")}
//             </h4>
//             <ul className="space-y-2.5">
//               {servicesLinks.map((service, i) => (
//                 <li key={i}>
//                   <button
//                     onClick={(e) => handleNavigation(e, service.path)}
//                     className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
//                   >
//                     <ArrowUpRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
//                     />
//                     {t(service.labelKey)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Us - With right margin */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="pr-0 md:pr-8"
//           >
//             <h4 className="text-sm font-bold text-white mb-4">
//               {t("contact.label")}
//             </h4>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-white/60 text-sm">
//                 <Mail size={14} className="text-cyan-400 shrink-0" />{" "}
//                 <span dir="ltr" className="text-left">
//                   {contactEmail}
//                 </span>
//               </li>
//               <li className="flex items-center gap-3 text-white/60 text-sm">
//                 <Phone size={14} className="text-cyan-400 shrink-0" />{" "}
//                 <span dir="ltr" className="text-left">
//                   {contactPhone}
//                 </span>
//               </li>
//               <li className="flex items-start gap-3 text-white/60 text-sm">
//                 <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />{" "}
//                 <span dir="ltr" className="text-left">
//                   {contactAddress}
//                 </span>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6"
//         />

//         {/* Bottom Section - Centered */}
//         <div className="flex justify-center items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-4 text-center"
//           >
//             {/* Powered by Brihaspathi Technologies */}
//             <a
//               href="https://brihaspathi.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
//             >
//               <Shield size={16} className="text-cyan-400" />
//               <span className="text-xs text-white/60">
//                 {lang === "ar" ? "مدعوم من" : "Powered by"}{" "}
//                 <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
//                   Brihaspathi Technologies Ltd
//                 </span>
//               </span>
//             </a>

//             {/* Separator */}
//             <span className="text-white/30">|</span>

//             {/* Copyright */}
//             <p className="text-xs text-white/40">
//               © {new Date().getFullYear()} Trinai. {t("footer.rights")}
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Facebook,
  Instagram,
  Shield,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t, lang } = useLang();
  const location = useLocation();

  // Navigation handler
  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    if (location.pathname !== path) {
      window.location.href = path;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Quick Links - ✅ Blogs added below About
  const quickLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.services", path: "/services" },
    { key: "nav.about", path: "/about" },
    { path: "/blog", label: lang === "ar" ? "المدونة" : "Blogs" }, // ✅ Direct text
    { key: "nav.contact", path: "/contact" },
  ];

  // Services Links
  const servicesLinks = [
    {
      labelKey: "servicesPage.surveillance.title",
      path: "/surveillance-systems",
    },
    { labelKey: "servicesPage.iccc.title", path: "/iccc" },
    { labelKey: "servicesPage.home.title", path: "/home-automation" },
    { labelKey: "servicesPage.elv.title", path: "/elv-solutions" },
    { labelKey: "servicesPage.analytics.title", path: "/ai-analytics" },
  ];

  // Contact Info
  const contactEmail = "info@trinai.ae";
  const contactPhone = "+971 55 551 7511";
  const contactAddress =
    lang === "ar"
      ? "الحبية الرابعة، مدينة دبي الرياضية، دبي، الإمارات العربية المتحدة"
      : "Al Hebiah Fourth, Dubai Sports City, Dubai, United Arab Emirates";

  // Social Media Links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/trinaiae/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61587721504259",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/trinai_uae/",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[hsl(215,55%,15%)] to-[hsl(220,50%,10%)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pl-0 md:pl-8"
          >
            <img src="/logo-white.png" alt="TRINAI" className="h-10" />

            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-4">
                {lang === "ar" ? "تابعنا" : "Follow Us"}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-300/50 hover:bg-white/15 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Includes Blogs */}
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
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => handleNavigation(e, link.path)}
                    className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
                    />
                    {/* ✅ Show direct label for blog, use translation for others */}
                    {link.label || t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-white mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((service, i) => (
                <li key={i}>
                  <button
                    onClick={(e) => handleNavigation(e, service.path)}
                    className="text-white/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
                    />
                    {t(service.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pr-0 md:pr-8"
          >
            <h4 className="text-sm font-bold text-white mb-4">
              {t("contact.label")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={14} className="text-cyan-400 shrink-0" />{" "}
                <span dir="ltr" className="text-left">
                  {contactEmail}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={14} className="text-cyan-400 shrink-0" />{" "}
                <span dir="ltr" className="text-left">
                  {contactPhone}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />{" "}
                <span dir="ltr" className="text-left">
                  {contactAddress}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6"
        />

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-center"
          >
            <a
              href="https://brihaspathi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
            >
              <Shield size={16} className="text-cyan-400" />
              <span className="text-xs text-white/60">
                {lang === "ar" ? "مدعوم من" : "Powered by"}{" "}
                <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  Brihaspathi Technologies Ltd
                </span>
              </span>
            </a>

            <span className="text-white/30">|</span>

            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Trinai. {t("footer.rights")}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
