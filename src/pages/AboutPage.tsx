import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CircuitLines } from "@/components/VectorBackground";
import aboutImg from "@/assets/about-section.jpg";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const AboutPage = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Reduced padding */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <CircuitLines className="top-0 end-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-foreground mb-4 sm:mb-6"
          >
            {t("aboutPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
          >
            {t("aboutPage.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Content Section - Reduced padding */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl btn-gradient opacity-10 blur-sm" />
                <img
                  src={aboutImg}
                  alt="About Trinai"
                  className="relative rounded-3xl shadow-2xl w-full aspect-video object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="space-y-4 sm:space-y-5 lg:space-y-6"
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("aboutPage.p1")}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("aboutPage.p2")}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("aboutPage.p3")}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 pt-2 sm:pt-4">
                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-foreground mb-2">
                    {t("aboutPage.vision.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t("aboutPage.vision.desc")}
                  </p>
                </div>
                <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-foreground mb-2">
                    {t("aboutPage.mission.title")}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t("aboutPage.mission.desc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
