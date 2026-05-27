// import { useState, useEffect } from "react";
// import { Menu, X, Globe } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { useLocation } from "react-router-dom";

// const navItems = [
//   { key: "nav.home", path: "/" },
//   { key: "nav.services", path: "/services" },
//   { key: "nav.about", path: "/about" },
//   { key: "nav.solutions", path: "/#solutions", isAnchor: true },
//   { key: "nav.contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { t, toggleLang, lang } = useLang();
//   const location = useLocation();

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [location.pathname]);

//   const handleNavigation = (
//     e: React.MouseEvent,
//     item: (typeof navItems)[0],
//   ) => {
//     e.preventDefault();

//     if (item.isAnchor && location.pathname === "/") {
//       const element = document.getElementById(item.path.replace("/#", ""));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else if (item.isAnchor) {
//       window.location.href = `/#${item.path.replace("/#", "")}`;
//     } else if (location.pathname !== item.path) {
//       window.location.href = item.path;
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Logo based on scroll state
//   const logoSrc = scrolled
//     ? "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20logo%20R.png"
//     : "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20logo%20R%20white.png";

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-xl py-3 shadow-lg border-b border-gray-200/50"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-4">
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             window.location.href = "/";
//           }}
//           className="focus:outline-none"
//         >
//           <img src={logoSrc} alt="TRINAI Logo" className="h-9 transition-all" />
//         </button>

//         <ul className="hidden md:flex items-center gap-7">
//           {navItems.map((item) => {
//             const isActive = location.pathname === item.path && !item.isAnchor;
//             return (
//               <li key={item.key}>
//                 <button
//                   onClick={(e) => handleNavigation(e, item)}
//                   className={`font-medium transition-colors text-sm tracking-wide relative group ${
//                     isActive
//                       ? "text-primary"
//                       : scrolled
//                         ? "text-foreground/70 hover:text-primary"
//                         : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   {t(item.key)}
//                   <span
//                     className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${
//                       isActive
//                         ? "w-full btn-gradient"
//                         : "w-0 group-hover:w-full bg-white/60"
//                     }`}
//                   />
//                 </button>
//               </li>
//             );
//           })}

//           <li>
//             <button
//               onClick={toggleLang}
//               className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
//                 scrolled
//                   ? "border-gray-200 text-foreground/60 hover:text-primary bg-white/50"
//                   : "border-white/30 text-white hover:bg-white/10"
//               }`}
//             >
//               <Globe size={14} />
//               {lang === "en" ? "العربية" : "English"}
//             </button>
//           </li>

//           <li>
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = "/contact";
//               }}
//               className="px-6 py-2.5 rounded-xl btn-gradient text-white font-semibold text-sm hover:shadow-lg transition-shadow"
//             >
//               {t("nav.getInTouch")}
//             </button>
//           </li>
//         </ul>

//         <div className="flex items-center gap-3 md:hidden">
//           <button
//             onClick={toggleLang}
//             className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
//               scrolled
//                 ? "border-gray-200 text-foreground/60 bg-white/50"
//                 : "border-white/30 text-white"
//             }`}
//           >
//             <Globe size={12} />
//             {lang === "en" ? "AR" : "EN"}
//           </button>
//           <button
//             onClick={() => setOpen(!open)}
//             className={scrolled ? "text-foreground" : "text-white"}
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200/50"
//           >
//             {navItems.map((item) => (
//               <button
//                 key={item.key}
//                 onClick={(e) => handleNavigation(e, item)}
//                 className="block w-full text-start px-6 py-3 text-foreground/70 hover:text-primary font-medium text-sm transition-colors"
//               >
//                 {t(item.key)}
//               </button>
//             ))}
//             <div className="px-6 py-3 border-t border-gray-200/50">
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.location.href = "/contact";
//                 }}
//                 className="w-full px-4 py-2.5 rounded-xl btn-gradient text-white font-semibold text-sm"
//               >
//                 {t("nav.getInTouch")}
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useLocation } from "react-router-dom";

// Navigation item type
interface NavItem {
  key: string;
  label: string;
  path: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { key: "nav.home", label: "Home", path: "/" },
  { key: "nav.about", label: "About", path: "/about" },
  { key: "nav.services", label: "Services", path: "/services" },
  { key: "nav.contact", label: "Contact", path: "/contact" },
];

// ✅ Pages that should have transparent header at top
const TRANSPARENT_PAGES = [
  "/",
  "/elv-solutions",
  "/iccc",
  "/home-automation",
  "/ai-analytics",
  "/surveillance-systems",
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t, toggleLang, lang } = useLang();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handler: () => void = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle navigation with proper typing
  const handleNavigation = (
    e: MouseEvent<HTMLButtonElement>,
    item: NavItem,
  ): void => {
    e.preventDefault();

    if (item.isAnchor && location.pathname === "/") {
      const element = document.getElementById(item.path.replace("/#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.isAnchor) {
      window.location.href = `/#${item.path.replace("/#", "")}`;
    } else if (location.pathname !== item.path) {
      window.location.href = item.path;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  // ✅ KEY LOGIC: Transparent only on specific pages AND at top
  const isTransparentPage: boolean = TRANSPARENT_PAGES.includes(
    location.pathname,
  );
  const isTransparentTheme: boolean = isTransparentPage && !scrolled;

  // ✅ Logo from public folder (not ImageKit)
  const logoSrc: string = isTransparentTheme
    ? "/logo-white.png" // White logo for transparent/dark backgrounds
    : "/logo.png"; // Colored logo for white/light backgrounds

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparentTheme
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-xl py-3 shadow-lg border-b border-gray-200/50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="focus:outline-none transition-opacity"
          aria-label="Home"
        >
          <img src={logoSrc} alt="TRINAI Logo" className="h-9 transition-all" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive: boolean =
              location.pathname === item.path && !item.isAnchor;
            return (
              <li key={item.key}>
                <button
                  onClick={(e: MouseEvent<HTMLButtonElement>) =>
                    handleNavigation(e, item)
                  }
                  className={`font-medium transition-colors text-sm tracking-wide relative group ${
                    isActive
                      ? "text-primary"
                      : isTransparentTheme
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/70 hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.key)}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-full btn-gradient"
                        : "w-0 group-hover:w-full " +
                          (isTransparentTheme ? "bg-white/60" : "bg-primary/60")
                    }`}
                  />
                </button>
              </li>
            );
          })}

          {/* Language Toggle */}
          <li>
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                isTransparentTheme
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-gray-200 text-foreground/60 hover:text-primary bg-white/50"
              }`}
              aria-label="Toggle language"
            >
              <Globe size={14} aria-hidden="true" />
              {lang === "en" ? "العربية" : "English"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
              isTransparentTheme
                ? "border-white/30 text-white"
                : "border-gray-200 text-foreground/60 bg-white/50"
            }`}
            aria-label="Toggle language"
          >
            <Globe size={12} aria-hidden="true" />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-lg transition-colors ${
              isTransparentTheme
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-gray-100"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden mx-4 mt-2 rounded-2xl overflow-hidden shadow-lg border ${
              isTransparentTheme
                ? "bg-black/90 backdrop-blur-xl border-white/20"
                : "bg-white/95 backdrop-blur-xl border-gray-200/50"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={(e: MouseEvent<HTMLButtonElement>) =>
                  handleNavigation(e, item)
                }
                className={`block w-full text-start px-6 py-3 font-medium text-sm transition-colors ${
                  isTransparentTheme
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
