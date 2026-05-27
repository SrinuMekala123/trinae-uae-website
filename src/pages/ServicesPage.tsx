import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import local images from src/assets folder
import elvImage from "@/assets/6.png";
import icccImage from "@/assets/5.png";
import homeAutoImage from "@/assets/7.png";
import aiAnalyticsImage from "@/assets/aismart-analytics.jpeg";
import surveillanceImage from "@/assets/surveillance-systems.jpeg";

const ServicesPage = () => {
  const { t } = useLang();

  // ✅ REORDERED: Surveillance Systems, ICCC, Home Automation, ELV Systems, AI Smart Analytics
  const services = [
    // 1. Surveillance Systems
    {
      title: t("servicesPage.surveillance.title"),
      subtitle: t("servicesPage.surveillance.desc"),
      image: surveillanceImage,
      items: [
        t("servicesPage.surveillance.items.1"),
        t("servicesPage.surveillance.items.2"),
        t("servicesPage.surveillance.items.3"),
        t("servicesPage.surveillance.items.4"),
        t("servicesPage.surveillance.items.5"),
        t("servicesPage.surveillance.items.6"),
      ],
      link: "/surveillance-systems",
    },
    // 2. ICCC
    {
      title: t("servicesPage.iccc.title"),
      subtitle: t("servicesPage.iccc.desc"),
      image: icccImage,
      items: [
        t("servicesPage.iccc.items.1"),
        t("servicesPage.iccc.items.2"),
        t("servicesPage.iccc.items.3"),
        t("servicesPage.iccc.items.4"),
        t("servicesPage.iccc.items.5"),
      ],
      link: "/iccc",
    },
    // 3. Home Automation
    {
      title: t("servicesPage.home.title"),
      subtitle: t("servicesPage.home.desc"),
      image: homeAutoImage,
      items: [
        t("servicesPage.home.items.1"),
        t("servicesPage.home.items.2"),
        t("servicesPage.home.items.3"),
        t("servicesPage.home.items.4"),
        t("servicesPage.home.items.5"),
        t("servicesPage.home.items.6"),
        t("servicesPage.home.items.7"),
        t("servicesPage.home.items.8"),
      ],
      link: "/home-automation",
    },
    // 4. ELV Systems
    {
      title: t("servicesPage.elv.title"),
      subtitle: t("servicesPage.elv.desc"),
      image: elvImage,
      items: [
        t("servicesPage.elv.items.1"),
        t("servicesPage.elv.items.2"),
        t("servicesPage.elv.items.3"),
        t("servicesPage.elv.items.4"),
      ],
      link: "/elv-solutions",
    },
    // 5. AI Smart Analytics
    {
      title: t("servicesPage.analytics.title"),
      subtitle: t("servicesPage.analytics.desc"),
      image: aiAnalyticsImage,
      items: [
        t("servicesPage.analytics.items.1"),
        t("servicesPage.analytics.items.2"),
        t("servicesPage.analytics.items.3"),
        t("servicesPage.analytics.items.4"),
        t("servicesPage.analytics.items.5"),
        t("servicesPage.analytics.items.6"),
      ],
      link: "/ai-analytics",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-4"
          >
            {t("servicesPage.title")}
          </motion.h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              // ✅ Alternating layout: odd items reverse image/content position
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
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

                {/* Explore Solutions Button */}
                <motion.button
                  onClick={() => (window.location.href = s.link)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  {t("services.exploreSolutions")}
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
