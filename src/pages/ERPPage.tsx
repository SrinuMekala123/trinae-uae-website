import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Boxes,
  Cpu,
  TrendingUp,
  Database,
  Eye,
  ShieldAlert,
  MapPin,
  ArrowRight,
  ArrowDown,
  ShoppingCart,
  Package,
  Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const ERPPage = () => {
  const { t, lang } = useLang();

  // Core Infrastructure features (3 columns)
  const coreFeatures = [
    {
      title: t("erp.features.1.title"),
      desc: t("erp.features.1.desc"),
      Icon: Boxes,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: t("erp.features.2.title"),
      desc: t("erp.features.2.desc"),
      Icon: Cpu,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: t("erp.features.3.title"),
      desc: t("erp.features.3.desc"),
      Icon: TrendingUp,
      color: "from-blue-600 to-cyan-500",
    },
  ];

  // Benefits list
  const benefits = [
    { key: "erp.why.item1", Icon: Database },
    { key: "erp.why.item2", Icon: Eye },
    { key: "erp.why.item3", Icon: ShieldAlert },
    { key: "erp.why.item4", Icon: MapPin },
  ];

  // Key Automated Workflows
  const getWorkflowSteps = (key: string) => {
    const raw = t(key);
    return raw.split(/[→←]/).map((s) => s.trim());
  };

  const workflows = [
    {
      name: t("erp.workflows.1.name"),
      steps: getWorkflowSteps("erp.workflows.1.steps"),
    },
    {
      name: t("erp.workflows.2.name"),
      steps: getWorkflowSteps("erp.workflows.2.steps"),
    },
    {
      name: t("erp.workflows.3.name"),
      steps: getWorkflowSteps("erp.workflows.3.steps"),
    },
    {
      name: t("erp.workflows.4.name"),
      steps: getWorkflowSteps("erp.workflows.4.steps"),
    },
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>{lang === "ar" ? "نظام تخطيط موارد المؤسسات | TRINAI" : "Enterprise Resource Planning (ERP) | TRINAI"}</title>
        <meta name="description" content={t("erp.subtitle")} />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[hsl(215,55%,18%)] to-[hsl(210,60%,12%)]">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left rtl:text-right"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6 leading-tight">
                {t("erp.title")}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
                {t("erp.subtitle")}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                {lang === "ar" ? "احجز عرضًا تجريبيًا" : "Book a Demo"}
                <ArrowRight size={18} className={lang === "ar" ? "rotate-180" : ""} />
              </motion.button>
            </motion.div>

            {/* Right mockup column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              {/* Infinite float animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full flex justify-center"
              >
                {/* High-Fidelity ERP Operations & Resources Mockup */}
                <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <div className="flex gap-2">
                      <span className="text-[10px] text-white/80 font-semibold font-mono">ERP Unified Console</span>
                    </div>
                    <span className="text-[9px] font-mono text-green-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Live Sync
                    </span>
                  </div>

                  {/* Operations & Finance logs */}
                  <div className="flex-1 flex flex-col justify-center py-3 space-y-3">
                    
                    {/* Row 1: Finance & Procurement */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/[0.04] border border-white/5 rounded-xl p-3 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                          <Layers size={16} />
                        </div>
                        <div>
                          <span className="text-[8px] text-white/40 block font-mono">FINANCE (SALES)</span>
                          <span className="text-xs font-bold text-white">$128,450.00</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/[0.04] border border-white/5 rounded-xl p-3 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                          <ShoppingCart size={16} />
                        </div>
                        <div>
                          <span className="text-[8px] text-white/40 block font-mono">PROCUREMENT</span>
                          <span className="text-xs font-bold text-white">18 Active Orders</span>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Inventory & Manufacturing */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/[0.04] border border-white/5 rounded-xl p-3 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                          <Package size={16} />
                        </div>
                        <div>
                          <span className="text-[8px] text-white/40 block font-mono">INVENTORY CAPACITY</span>
                          <span className="text-xs font-bold text-white">94% (Optimal)</span>
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/5 rounded-xl p-3 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-300 flex items-center justify-center shrink-0">
                          <Cpu size={16} />
                        </div>
                        <div>
                          <span className="text-[8px] text-white/40 block font-mono">MANUFACTURING</span>
                          <span className="text-xs font-bold text-yellow-300">Run #409 Active</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Operations checklist / metadata logs */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-2 text-center text-[9px] text-white/50 flex justify-around font-mono">
                    <span>Sales Pipeline: <strong className="text-green-300">+14.2% Growth</strong></span>
                    <span className="w-[1px] bg-white/10" />
                    <span>Audit Logs: <strong className="text-blue-300">Clean</strong></span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Infrastructure */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {t("erp.core.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-md`}
                  >
                    <f.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Automated Workflows */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {t("erp.workflows.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {workflows.map((wf, wfIdx) => (
              <motion.div
                key={wfIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold font-heading text-foreground mb-8 border-l-4 border-blue-500 pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pr-3">
                  {wf.name}
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-4 w-full">
                  {wf.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      {/* Step card */}
                      <div className="flex-1 min-w-[90px] max-w-[180px] w-full flex flex-col items-center justify-center p-4 bg-muted/40 rounded-2xl border border-gray-50 text-center min-h-[110px] transition-transform hover:scale-105 duration-300">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-sm">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                          {step}
                        </p>
                      </div>

                      {/* Connector Arrow */}
                      {idx < wf.steps.length - 1 && (
                        <div className="flex items-center justify-center text-muted-foreground shrink-0 py-2 md:py-0">
                          <ArrowRight className="w-5 h-5 hidden md:block rotate-0 rtl:rotate-180" />
                          <ArrowDown className="w-5 h-5 block md:hidden" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {t("erp.why.title")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-sm">
                  <b.Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground mb-1">
                    {t(b.key)}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lang === "ar"
                      ? "نظام مصمم لتبسيط العمليات اليومية وتوفير رؤى متعمقة ومباشرة."
                      : "Designed to optimize daily enterprise workflows and output clear, real-time analytics."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(215,55%,18%)] to-[hsl(210,60%,12%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
              {t("erp.cta.title")}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              {t("erp.cta.desc")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 bg-white text-[hsl(215,55%,18%)] font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              {lang === "ar" ? "تواصل مع خبيرنا" : "Talk to our Expert"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPPage;
