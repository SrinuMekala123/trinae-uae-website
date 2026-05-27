import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Brain,
  Link2,
  Award,
  HeadphonesIcon,
  ShieldCheck,
  Maximize,
} from "lucide-react";

const WhyChooseUs = () => {
  const { t } = useLang();

  // ✅ Updated reasons array to use translation keys
  const reasons = [
    {
      titleKey: "why.r1.title",
      descKey: "why.r1.desc",
      Icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      titleKey: "why.r2.title",
      descKey: "why.r2.desc",
      Icon: Link2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      titleKey: "why.r3.title",
      descKey: "why.r3.desc",
      Icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      titleKey: "why.r4.title",
      descKey: "why.r4.desc",
      Icon: HeadphonesIcon,
      color: "from-cyan-500 to-blue-500",
    },
    {
      titleKey: "why.r5.title",
      descKey: "why.r5.desc",
      Icon: ShieldCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      titleKey: "why.r6.title",
      descKey: "why.r6.desc",
      Icon: Maximize,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("why.label")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("why.title1")}{" "}
            <span className="text-gradient">{t("why.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-lg rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <r.Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    {t(r.titleKey)}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(r.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
