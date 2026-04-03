import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const FullVideoSection = () => {
  const { t } = useLang();
  const VIDEO_URL =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/Videos/full%20video%20dubai%20(1).mp4?updatedAt=1771486915141";

  return (
    <section className="py-24 relative overflow-hidden bg-[hsl(215,55%,18%)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            {t("fullVideo.title")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("fullVideo.desc")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <video
            src={VIDEO_URL}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FullVideoSection;
