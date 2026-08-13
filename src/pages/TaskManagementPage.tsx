import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  FolderKanban,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle,
  Briefcase,
  CheckSquare,
  Clock,
  Plus
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TaskManagementPage = () => {
  const { t, lang } = useLang();

  const coreCapabilities = [
    {
      title: t("tms.capabilities.1.title"),
      desc: t("tms.capabilities.1.desc"),
      Icon: FolderKanban,
      color: "from-blue-600 to-cyan-500",
      points: [
        t("tms.capabilities.1.point1"),
        t("tms.capabilities.1.point2"),
        t("tms.capabilities.1.point3"),
        t("tms.capabilities.1.point4"),
      ]
    },
    {
      title: t("tms.capabilities.2.title"),
      desc: t("tms.capabilities.2.desc"),
      Icon: Users,
      color: "from-cyan-500 to-blue-500",
      points: [
        t("tms.capabilities.2.point1"),
        t("tms.capabilities.2.point2"),
        t("tms.capabilities.2.point3"),
        t("tms.capabilities.2.point4"),
      ]
    },
    {
      title: t("tms.capabilities.3.title"),
      desc: t("tms.capabilities.3.desc"),
      Icon: ShieldCheck,
      color: "from-blue-600 to-cyan-500",
      points: [
        t("tms.capabilities.3.point1"),
        t("tms.capabilities.3.point2"),
        t("tms.capabilities.3.point3"),
        t("tms.capabilities.3.point4"),
      ]
    },
    {
      title: t("tms.capabilities.4.title"),
      desc: t("tms.capabilities.4.desc"),
      Icon: Zap,
      color: "from-cyan-500 to-blue-500",
      points: [
        t("tms.capabilities.4.point1"),
        t("tms.capabilities.4.point2"),
        t("tms.capabilities.4.point3"),
        t("tms.capabilities.4.point4"),
      ]
    },
  ];

  const differentiators = [
    {
      title: t("tms.differentiators.1.title"),
      desc: t("tms.differentiators.1.desc"),
    },
    {
      title: t("tms.differentiators.2.title"),
      desc: t("tms.differentiators.2.desc"),
    },
    {
      title: t("tms.differentiators.3.title"),
      desc: t("tms.differentiators.3.desc"),
    },
  ];

  const idealFor = [
    t("tms.idealFor.1"),
    t("tms.idealFor.2"),
    t("tms.idealFor.3"),
    t("tms.idealFor.4"),
    t("tms.idealFor.5"),
    t("tms.idealFor.6"),
    t("tms.idealFor.7"),
    t("tms.idealFor.8"),
    t("tms.idealFor.9"),
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>{t("tms.title")}</title>
        <meta
          name="description"
          content={t("tms.metaDesc")}
        />
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
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
                <Briefcase size={14} />
                {t("tms.hero.badge")}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6 leading-tight">
                {t("tms.hero.title")}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
                {t("tms.hero.desc")}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                {t("tms.hero.cta")}
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
                {/* High-Fidelity Task Board Preview */}
                <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Mockup Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-white/40 text-xs ml-2 font-mono">Workspace / Board</span>
                    </div>
                    <button className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Mockup Content - Kanban Columns */}
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    {/* Column 1: In Progress */}
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider px-1">
                        <span className="flex items-center gap-1">
                          <Clock size={10} className="text-yellow-500" />
                          {t("tms.mockup.inProgress")}
                        </span>
                        <span>2</span>
                      </div>

                      <div className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/5 rounded-2xl p-3 space-y-2 transition-all cursor-pointer">
                        <div className="flex justify-between items-start">
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[8px] font-semibold">Dev</span>
                          <span className="text-white/30 text-[8px]">P1</span>
                        </div>
                        <h4 className="text-white/90 text-xs font-semibold leading-tight">Database Schema Update</h4>
                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[8px] text-white/40">
                            <span>Progress</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 rounded-full" style={{ width: "75%" }} />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/5 rounded-2xl p-3 space-y-2">
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[8px] font-semibold">Design</span>
                        <h4 className="text-white/90 text-xs font-semibold leading-tight">Revamp Mobile UI</h4>
                        <div className="flex items-center gap-1.5 text-white/40 text-[9px]">
                          <CheckSquare size={10} className="text-purple-400" />
                          <span>3/5 tasks</span>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Completed */}
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider px-1">
                        <span className="flex items-center gap-1">
                          <CheckCircle size={10} className="text-green-500" />
                          {t("tms.mockup.completed")}
                        </span>
                        <span>1</span>
                      </div>

                      <div className="bg-white/[0.04] border border-white/5 rounded-2xl p-3 space-y-2 opacity-80">
                        <div className="flex justify-between items-start">
                          <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-300 text-[8px] font-semibold">Security</span>
                          <span className="text-white/30 text-[8px]">Done</span>
                        </div>
                        <h4 className="text-white/90 text-xs font-semibold leading-tight line-through">OAuth Integration</h4>
                        <div className="flex items-center gap-1.5 text-green-400 text-[9px]">
                          <CheckCircle size={10} />
                          <span>Verified & deployed</span>
                        </div>
                      </div>

                      {/* Floating mini stats widget inside preview */}
                      <div className="mt-auto bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-3 text-center">
                        <span className="text-[10px] text-white/40 block">Weekly Sprint Target</span>
                        <span className="text-base font-bold text-white tracking-wide">92.4% Achieved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is TMS Section */}
      <section className="py-20 bg-background border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-50/50 to-cyan-50/30 border border-blue-100/50 shadow-sm relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 -mt-12 -mr-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl" />
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground mb-6">
              {t("tms.about.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("tms.about.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {t("tms.capabilities.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreCapabilities.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0 shadow-md mb-6`}>
                    <c.Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {c.desc}
                  </p>
                  
                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 border-t border-gray-100 pt-6 mt-2">
                    {c.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80 leading-tight">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Differentiators Section */}
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
              {t("tms.differentiators.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground mb-4">
              {t("tms.idealFor.heading")}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t("tms.idealFor.desc")}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {idealFor.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-4 py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm text-sm text-foreground font-medium flex items-center gap-2"
              >
                <CheckCircle size={16} className="text-blue-500" />
                {item}
              </motion.span>
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
              {t("tms.cta.title")}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              {t("tms.cta.desc")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 bg-white text-[hsl(215,55%,18%)] font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              {t("tms.cta.btn")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaskManagementPage;
