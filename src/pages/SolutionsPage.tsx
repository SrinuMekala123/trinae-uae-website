import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Camera, Home, Monitor, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  const { t } = useLang();

  const solutions = [
    {
      title: "AI CCTV Surveillance",
      subtitle: "Beyond Watching — Understanding",
      desc: "Next-gen AI cameras that don't just record — they analyze, predict, and respond. Our neural-network powered surveillance transforms passive footage into proactive security intelligence.",
      icon: Camera,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/Ai%20surveillance.png?updatedAt=1771485893304",
      features: [
        "Real-Time Facial Recognition",
        "Behavioral Anomaly Detection",
        "License Plate Recognition (ANPR)",
        "Crowd Density Analytics",
        "Perimeter Intrusion Detection",
        "Cloud & Edge Processing",
      ],
      link: "/elv-solutions",
    },
    {
      title: "Smart Home Automation",
      subtitle: "Your Home, Effortlessly Intelligent",
      desc: "Transform your living space into a responsive, energy-efficient environment. From lighting scenes to climate zones — everything adapts to your lifestyle automatically.",
      icon: Home,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/home%20automation.png?updatedAt=1771485893293",
      features: [
        "Voice & App Control",
        "Automated Lighting Scenes",
        "Smart Climate Control",
        "Motorized Blinds & Curtains",
        "Multi-Room Audio/Video",
        "Energy Usage Dashboard",
      ],
      link: "/home-automation",
    },
    {
      title: "Integrated Command & Control",
      subtitle: "One Dashboard. Total Visibility.",
      desc: "Unify all systems — surveillance, access control, fire safety, BMS — into a single intelligent command center with real-time situational awareness and coordinated incident response.",
      icon: Monitor,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/iccc.png?updatedAt=1771485893493",
      features: [
        "Unified Sensor Dashboard",
        "AI-Driven Incident Response",
        "GIS Mapping & Tracking",
        "Multi-Agency Coordination",
        "Predictive Analytics Engine",
        "Video Wall Integration",
      ],
      link: "/iccc",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Three Pillars of Intelligent Security — Each solution is engineered
            to work independently or as part of a unified intelligent ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-cyan opacity-10 blur-lg group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-2xl rounded-3xl p-3 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full rounded-2xl aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-2">
                      {s.title}
                    </h2>
                    <p className="text-primary font-semibold">{s.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {s.desc}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {s.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => (window.location.href = s.link)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Learn More
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
          >
            Ready to Build a{" "}
            <span className="text-cyan-400">Smarter, Safer Future?</span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
          >
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
