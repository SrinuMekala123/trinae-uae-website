import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import local images from src/assets folder
import elvImage from "@/assets/6.png";
import icccImage from "@/assets/5.png";
import homeAutoImage from "@/assets/7.png";

const ServicesPage = () => {
  const { t } = useLang();

  const services = [
    {
      title: "ELV Solutions in UAE",
      subtitle:
        "We provide complete ELV solutions in Dubai, designed for secure and efficient infrastructure.",
      image: elvImage, // 6.png for ELV
      items: [
        "Biometric Access Control – Advanced fingerprint, facial recognition & RFID systems",
        "Boom Barriers – Automated vehicle entry management systems",
        "CCTV Surveillance – AI-powered monitoring with real-time analytics",
        "Fire Alarm Systems – Early detection and safety compliance solutions",
      ],
      link: "/elv-solutions",
    },
    {
      title: "ICCC (Command & Control Centers UAE)",
      subtitle:
        "Centralized platforms for monitoring, managing, and responding in real time.",
      image: icccImage, // 5.png for ICCC
      items: [
        "Video Management Systems (VMS)",
        "AI Video Analytics",
        "Incident Management System",
        "Data Integration & Dashboard",
        "Cloud & On-Premise Solutions",
      ],
      link: "/iccc",
    },
    {
      title: "Home Automation in UAE",
      subtitle: "Smart living solutions designed for modern homes and villas.",
      image: homeAutoImage, // 7.png for Home Automation
      items: [
        "Smart Lighting Control",
        "Climate Control (AC Automation)",
        "Smart Security Integration",
        "Smart Door Locks & Video Door Phones",
        "Curtain & Blind Automation",
        "Entertainment & Media Control",
        "Voice & Mobile App Control",
        "Energy Management Systems",
      ],
      link: "/home-automation",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
          >
            {t("servicesPage.title")}
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image - Removed white background and border */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
                {/* ✅ Removed: bg-white/80 backdrop-blur-md p-3 */}
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full rounded-3xl aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {s.subtitle}
                  </p>
                </div>

                <ul className="space-y-3">
                  {s.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-base text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 text-lg">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Explore Solutions Button - Updated with gradient like Contact Page */}
                <motion.button
                  onClick={() => (window.location.href = s.link)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Explore Solutions
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
