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

const reasons = [
  {
    title: "AI Innovation",
    desc: "Trinai Leads with Cutting-Edge AI CCTV Surveillance",
    Icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Reliable Integration",
    desc: "Mastering Seamless ICCC and Home Automation",
    Icon: Link2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Proven Expertise",
    desc: "Delivering Trusted ELV Enterprise Solutions",
    Icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "24/7 Operations Center",
    desc: "Round-the-clock monitoring with dedicated response teams and proactive maintenance",
    Icon: HeadphonesIcon,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Future-Ready Security",
    desc: "Built on open protocols and modular architecture — ready for tomorrow's challenges",
    Icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Villa to City Scale",
    desc: "Solutions that scale effortlessly — from a single villa to an entire smart city deployment",
    Icon: Maximize,
    color: "from-cyan-500 to-blue-500",
  },
];

const WhyChooseUs = () => {
  const { t } = useLang();

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
                    {r.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {r.desc}
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
