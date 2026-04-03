import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TrustedBy = () => {
  const { t } = useLang();

  const brands = [
    "Dubai Police", "DEWA", "Emaar", "Nakheel", "ADNOC",
    "Dubai Municipality", "Aldar Properties", "Etisalat"
  ];

  return (
    <section className="py-14 border-t border-b border-gray-200/60 relative overflow-hidden bg-white/50">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-background via-primary/[0.02] to-background pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/80 mb-10"
        >
          {t("trusted.label")}
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              whileHover={{ scale: 1.08, color: "hsl(210 100% 42%)" }}
              className="text-foreground/25 text-sm font-semibold tracking-wide cursor-default transition-colors duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
