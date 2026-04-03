import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import { CircuitLines } from "./VectorBackground";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const faqKeys = ["faq.q1", "faq.q2", "faq.q3", "faq.q4", "faq.q5", "faq.q6"];
const faqAnswerKeys = ["faq.a1", "faq.a2", "faq.a3", "faq.a4", "faq.a5", "faq.a6"];

const FAQSection = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <CircuitLines className="top-0 end-0 w-[400px] h-[400px]" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("faq.label")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("faq.title1")}{" "}<span className="text-gradient">{t("faq.title2")}</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqKeys.map((qKey, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={qKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className={`bg-white/80 backdrop-blur-md border shadow-[0_2px_16px_rgba(0,0,0,0.03)] rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-primary/20 shadow-[0_8px_30px_hsl(210_60%_50%/0.08)]" : "border-gray-200/60"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-start gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "btn-gradient shadow-[0_4px_12px_hsl(210_100%_42%/0.2)]" : "bg-primary/8"}`}>
                      <MessageCircleQuestion size={14} className={isOpen ? "text-white" : "text-primary"} />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{t(qKey)}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 ps-16 text-sm text-muted-foreground leading-relaxed">
                        {t(faqAnswerKeys[i])}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
