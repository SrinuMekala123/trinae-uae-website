import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Shield,
  Cpu,
  Home,
  Monitor,
  Zap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    {
      titleKey: "services.s1.title",
      descKey: "services.s1.desc",
      Icon: Shield,
    },
    { titleKey: "services.s2.title", descKey: "services.s2.desc", Icon: Cpu },
    { titleKey: "services.s3.title", descKey: "services.s3.desc", Icon: Home },
    {
      titleKey: "services.s4.title",
      descKey: "services.s4.desc",
      Icon: Monitor,
    },
    { titleKey: "services.s5.title", descKey: "services.s5.desc", Icon: Zap },
    {
      titleKey: "services.s6.title",
      descKey: "services.s6.desc",
      Icon: BarChart3,
    },
  ];

  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden section-alt"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("services.label")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("services.title1")}{" "}
            <span className="text-gradient">{t("services.title2")}</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          {t("services.desc")}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-lg rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl btn-gradient flex items-center justify-center shadow-lg">
                    <s.Icon size={24} className="text-white" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 group-hover:text-primary transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                  {t(s.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(s.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
