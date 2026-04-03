import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Fingerprint, Car, Camera, Flame, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ELVSolutionsPage = () => {
  const { t } = useLang();

  const services = [
    {
      title: "Biometric Access Control Systems",
      desc: "Secure your premises with advanced biometric solutions including fingerprint, facial recognition, and RFID-based access systems for offices, industries, and high-security areas.",
      icon: Fingerprint,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/Bio%20metric.png?updatedAt=1774848029302",
    },
    {
      title: "Boom Barriers & Entry Management",
      desc: "Automated boom barriers for vehicle access control in residential communities, commercial spaces, and government facilities with seamless integration to security systems.",
      icon: Car,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/boom%20barrier.png?updatedAt=1774848029397",
    },
    {
      title: "CCTV Surveillance Systems",
      desc: "AI-powered CCTV surveillance solutions with real-time monitoring, video analytics, and remote access for complete security visibility across your premises.",
      icon: Camera,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/cctv%20surviellance.png?updatedAt=1774848029292",
    },
    {
      title: "Fire Alarm Systems",
      desc: "Reliable fire detection and alarm systems designed to ensure safety, early warning, and compliance with UAE safety standards.",
      icon: Flame,
      image:
        "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/trinai%20uae%20websites%20home%20page%20images/fire%20alarm.png?updatedAt=1774848029445",
    },
  ];

  const whyChoose = [
    "End-to-end system design & implementation",
    "Integration with ICCC & smart platforms",
    "Scalable for small to large infrastructure",
    "Trusted for enterprise & government projects",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
          >
            ELV Solutions in UAE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/70 max-w-4xl mx-auto mb-4"
          >
            Trinai UAE delivers advanced ELV (Extra Low Voltage) solutions in
            Dubai and across the UAE, designed for secure, scalable, and
            intelligent infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            Our ELV Services Include:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mb-4">
                      <s.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            Why Choose Trinai for ELV in UAE?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-5 rounded-xl glass"
              >
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span className="text-base font-medium text-foreground">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - FIXED */}
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

export default ELVSolutionsPage;
