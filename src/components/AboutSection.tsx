import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Sparkles, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-section.jpg";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl btn-gradient opacity-10 blur-sm" />
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-2xl rounded-3xl p-2.5 overflow-hidden">
              <img
                src={aboutImg}
                alt="AI Command Center"
                className="w-full rounded-2xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-5 -end-3 bg-white/90 backdrop-blur-xl border border-gray-200/60 shadow-lg rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">
                    {t("about.badgeTitle")}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {t("about.badgeDesc")}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              {t("about.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-6 leading-tight">
              What is Trinai?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Trinai, a UAE-based technology leader, delivers AI CCTV
              surveillance & ELV solutions, home automation, and ICCC systems
              for governments, organizations, and enterprises. We prioritize
              innovation, reliability, and real-time smart security with
              advanced perimeter protection and monitoring.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "AI-Powered Surveillance",
                "Home & Building Automation",
                "Integrated Command Centers",
                "24/7 Remote Monitoring",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-sm rounded-2xl p-4 w-fit">
              <img
                src="https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/uae%20and%20india%20flag.jpg.jpeg?updatedAt=1771485868345"
                alt="UAE and India"
                className="w-20 h-14 rounded-xl object-cover"
              />
              <div>
                <div className="text-sm font-bold text-foreground">
                  {t("about.flagTitle")}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t("about.flagDesc")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
