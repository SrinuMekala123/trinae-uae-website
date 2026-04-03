import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Building2, Home, Hotel, HeartPulse, Factory, Landmark } from "lucide-react";
import { DotGrid } from "./VectorBackground";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const industries = [
  { key: "industries.i1", descKey: "industries.i1.desc", Icon: Landmark },
  { key: "industries.i2", descKey: "industries.i2.desc", Icon: Building2 },
  { key: "industries.i3", descKey: "industries.i3.desc", Icon: Home },
  { key: "industries.i4", descKey: "industries.i4.desc", Icon: Hotel },
  { key: "industries.i5", descKey: "industries.i5.desc", Icon: HeartPulse },
  { key: "industries.i6", descKey: "industries.i6.desc", Icon: Factory },
];

const IndustriesSection = () => {
  const { t } = useLang();

  return (
    <section id="industries" className="py-28 relative overflow-hidden section-alt">
      <DotGrid className="bottom-0 right-0 w-[400px] h-[400px]" />

      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan/[0.03] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("industries.label")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("industries.title1")}{" "}<span className="text-gradient">{t("industries.title2")}</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          {t("industries.desc")}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_hsl(210_60%_50%/0.12)] rounded-2xl p-7 text-center h-full transition-all duration-300 cursor-default relative overflow-hidden"
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-cyan"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease }}
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 group-hover:scale-110 transition-all duration-500">
                    <ind.Icon size={28} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-foreground mb-2">{t(ind.key)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(ind.descKey)}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
