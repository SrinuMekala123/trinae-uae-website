import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const TrustedPartner = () => {
  const { t } = useLang();

  return (
    <section className="py-16 border-y border-gray-200/60 bg-gradient-to-b from-white/50 to-background">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground/80 mb-12"
        >
          {t("trustedPartner.label")}
        </motion.p>

        <div className="flex flex-col items-center justify-center gap-8">
          {/* Doch Logos - Only Color Logo Now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Color Logo Only */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/2.png"
              alt="Doch Color Logo"
              className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-2xl"
          >
            <p className="text-muted-foreground mb-2">
              {t("trustedPartner.desc")}
            </p>
            <p className="text-sm text-muted-foreground/80">
              Advanced Home Automation Systems for Intelligent Living
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
