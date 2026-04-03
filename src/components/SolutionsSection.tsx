import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Camera, Home, Monitor, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import aiCctvImg from "@/assets/ai-cctv.jpg";
import homeAutoImg from "@/assets/home-automation.jpg";
import icccImg from "@/assets/iccc.jpg";
import { HexGrid } from "./VectorBackground";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const solutions = [
  {
    id: "cctv",
    titleKey: "solutions.cctv.title",
    subtitleKey: "solutions.cctv.subtitle",
    descKey: "solutions.cctv.desc",
    image: aiCctvImg,
    Icon: Camera,
    features: [
      "solutions.cctv.f1", "solutions.cctv.f2", "solutions.cctv.f3",
      "solutions.cctv.f4", "solutions.cctv.f5", "solutions.cctv.f6",
    ],
  },
  {
    id: "home",
    titleKey: "solutions.home.title",
    subtitleKey: "solutions.home.subtitle",
    descKey: "solutions.home.desc",
    image: homeAutoImg,
    Icon: Home,
    features: [
      "solutions.home.f1", "solutions.home.f2", "solutions.home.f3",
      "solutions.home.f4", "solutions.home.f5", "solutions.home.f6",
    ],
  },
  {
    id: "iccc",
    titleKey: "solutions.iccc.title",
    subtitleKey: "solutions.iccc.subtitle",
    descKey: "solutions.iccc.desc",
    image: icccImg,
    Icon: Monitor,
    features: [
      "solutions.iccc.f1", "solutions.iccc.f2", "solutions.iccc.f3",
      "solutions.iccc.f4", "solutions.iccc.f5", "solutions.iccc.f6",
    ],
  },
];

const SolutionsSection = () => {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const current = solutions[active];

  return (
    <section id="solutions" className="py-20 md:py-28 relative overflow-hidden">
      <HexGrid className="top-0 right-0 w-[800px] h-[800px]" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-primary/[0.03] blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-4 md:mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("solutions.label")}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-foreground">
            {t("solutions.title1")}{" "}
            <span className="text-gradient">{t("solutions.title2")}</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
        >
          {t("solutions.desc")}
        </motion.p>

        <div className="sticky top-16 md:top-20 z-30 -mx-4 px-4 py-4 bg-background/95 backdrop-blur-xl border-b border-gray-200/50 mb-8 md:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {solutions.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 shrink-0 ${
                  active === i
                    ? "btn-gradient text-white shadow-[0_8px_25px_hsl(210_100%_42%/0.25)]"
                    : "bg-white/70 backdrop-blur-md border border-gray-200/60 text-muted-foreground hover:text-foreground hover:border-primary/20 shadow-sm"
                }`}
              >
                <s.Icon size={16} strokeWidth={1.5} className="shrink-0" />
                <span className="truncate max-w-[140px] sm:max-w-[200px]">{t(s.titleKey)}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-[2rem] btn-gradient opacity-10 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-[1.8rem] p-2 overflow-hidden">
                <img
                  src={current.image}
                  alt={t(current.titleKey)}
                  className="w-full rounded-[1.5rem] aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-xl border border-gray-200/60 shadow-md rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shrink-0">
                    <current.Icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-foreground truncate">
                    {t(current.titleKey)}
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-5 md:space-y-6 min-w-0">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-foreground mb-2">
                  {t(current.titleKey)}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3 md:mb-4">
                  {t(current.subtitleKey)}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(current.descKey)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {current.features.map((fKey, i) => (
                  <motion.div
                    key={fKey}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease }}
                    className="flex items-center gap-2.5 bg-white/70 backdrop-blur-md border border-gray-200/60 shadow-sm rounded-xl px-4 py-3 group hover:border-primary/20 hover:shadow-md transition-all duration-300 min-w-0"
                  >
                    <Check size={14} className="text-primary shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                      {t(fKey)}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, ease }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 35px hsl(210 100% 42% / 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 mt-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-2xl btn-gradient text-white font-semibold text-sm transition-all shadow-[0_6px_20px_hsl(210_100%_42%/0.2)]"
              >
                {t("hero.cta1")}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300 shrink-0"
                />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionsSection;
