import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { HexGrid } from "./VectorBackground";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CTASection = () => {
  const { t } = useLang();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="bg-gradient-to-br from-[hsl(215,55%,18%)] via-[hsl(210,60%,22%)] to-[hsl(200,50%,20%)] rounded-[2rem] p-12 sm:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_hsl(210_60%_20%/0.3)]"
        >
          <HexGrid className="top-0 left-0 w-full h-full" />

          <motion.div
            className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-cyan/10 blur-[80px] pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold tracking-wider uppercase mb-6"
            >
              {t("cta.label")}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mb-4">
              {t("cta.title1")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">{t("cta.title2")}</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">{t("cta.desc")}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px hsl(195 100% 50% / 0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
              >
                {t("cta.btn")}
                <ArrowRight size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, borderColor: "hsl(0 0% 100% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
              >
                <Download size={16} />
                {t("cta.btn2")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
