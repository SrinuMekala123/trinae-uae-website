import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useEffect, useRef } from "react";
import { Briefcase, Activity, Clock, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
  delay: number;
  Icon: typeof Briefcase;
  color: string;
}

const AnimatedCounter = ({ target, suffix, label, delay, Icon, color }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, delay, ease: "easeOut" });
    }
  }, [isInView, count, target, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_hsl(210_60%_50%/0.12)] rounded-3xl p-8 text-center overflow-hidden cursor-default transition-all duration-300"
      >
        <motion.div
          className={`absolute top-0 left-0 h-[2px] ${color}`}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease }}
        />

        <motion.div
          className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors duration-500"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={24} className="text-primary" strokeWidth={1.5} />
        </motion.div>

        <div className="text-4xl sm:text-5xl font-extrabold font-heading mb-2">
          <motion.span className="text-gradient">{rounded}</motion.span>
          <span className="text-gradient">{suffix}</span>
        </div>
        <div className="text-muted-foreground text-sm font-medium">{label}</div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/[0.03] via-transparent to-cyan/[0.03] pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const stats = [
  { target: 500, suffix: "+", labelKey: "stats.s1", Icon: Briefcase, color: "bg-gradient-to-r from-primary to-cyan" },
  { target: 99, suffix: ".9%", labelKey: "stats.s2", Icon: Activity, color: "bg-gradient-to-r from-cyan to-primary" },
  { target: 24, suffix: "/7", labelKey: "stats.s3", Icon: Clock, color: "bg-gradient-to-r from-primary to-cyan" },
  { target: 10, suffix: "+", labelKey: "stats.s4", Icon: MapPin, color: "bg-gradient-to-r from-cyan to-primary" },
];

const StatsSection = () => {
  const { t } = useLang();

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="w-16 h-1 mx-auto mb-6 rounded-full btn-gradient"
          />
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("stats.title1")}{" "}<span className="text-gradient">{t("stats.title2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">{t("stats.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <AnimatedCounter
              key={s.labelKey}
              target={s.target}
              suffix={s.suffix}
              label={t(s.labelKey)}
              delay={i * 0.12}
              Icon={s.Icon}
              color={s.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
