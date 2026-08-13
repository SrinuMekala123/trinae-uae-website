import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Lock,
  BarChart3,
  Code,
  Cloud,
  ArrowRight,
  GitBranch,
  Target,
  Database,
  FileSpreadsheet,
  Cpu,
  Server,
  Activity,
  Terminal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CustomSoftwarePage = () => {
  const { lang } = useLang();

  const coreContentTypes = lang === "ar" ? [
    {
      title: "أهداف المشروع وقصص المستخدمين",
      desc: "مخططات تفصيلية ومطابقة لمتطلبات الشركة مع المعالم الوظيفية للمشروع.",
      Icon: Target,
    },
    {
      title: "الكود المصدري وسجل التغييرات",
      desc: "بنية برمجية قوية مع تتبع شفاف لإصدارات الكود والتحديثات المستمرة.",
      Icon: GitBranch,
    },
    {
      title: "خرائط قواعد البيانات وروابط الـ API",
      desc: "اتصال سلس، ومخططات لتدفق البيانات، وبوابات خارجية لواجهات برمجة التطبيقات.",
      Icon: Database,
    },
    {
      title: "خطط الاختبار وسجلات الأخطاء",
      desc: "دورات اختبار شاملة، وإرشادات لضمان الجودة، ومراقبة استباقية أثناء التشغيل.",
      Icon: FileSpreadsheet,
    },
  ] : [
    {
      title: "Project goals and user stories",
      desc: "Detailed blueprinting and mapping of corporate requirements to functional milestones.",
      Icon: Target,
    },
    {
      title: "Source code and change history",
      desc: "Robust code architecture with transparent version control tracking and updates.",
      Icon: GitBranch,
    },
    {
      title: "Database maps and API links",
      desc: "Seamless connectivity, data architecture flowcharts, and external API gateways.",
      Icon: Database,
    },
    {
      title: "Test plans and error logs",
      desc: "Thorough testing cycles, quality assurance guidelines, and proactive runtime monitoring.",
      Icon: FileSpreadsheet,
    },
  ];

  const essentialFeatures = lang === "ar" ? [
    {
      title: "تسجيل دخول آمن وأدوار المستخدمين",
      desc: "تحكم آمن في الوصول مصمم خصيصاً للهيكل التنظيمي لمؤسستك.",
      Icon: Lock,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "مخططات ورسوم بيانية مباشرة للبيانات",
      desc: "لوحات تحليلات في الوقت الفعلي لاتخاذ قرارات مدروسة ومبنية على البيانات.",
      Icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "تحديثات سريعة واختبارات كود مستمرة",
      desc: "أنابيب CI/CD للنشر السريع للميزات والتحسينات مع ضمان الجودة.",
      Icon: Code,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "تخزين سحابي وأدوات توسع مرنة",
      desc: "بنية تحتية مرنة وقابلة للتوسع لتنمو مع متطلبات عملك المتزايدة.",
      Icon: Cloud,
      color: "from-cyan-500 to-blue-500",
    },
  ] : [
    {
      title: "Safe login and user roles",
      desc: "Secure access control tailored to your organizational hierarchy.",
      Icon: Lock,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Live data charts and graphs",
      desc: "Real-time analytics dashboards for informed decision making.",
      Icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Fast code updates and testing",
      desc: "CI/CD pipelines for rapid deployment and quality assurance.",
      Icon: Code,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Cloud storage and scaling tools",
      desc: "Infrastructure that grows with your business demands.",
      Icon: Cloud,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>{lang === "ar" ? "تطوير البرمجيات المخصصة | TRINAI" : "Custom Software Development | TRINAI"}</title>
        <meta
          name="description"
          content="Custom software development data includes core components like user management, data analytics, and system integration."
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
                <Code size={14} />
                {lang === "ar" ? "هندسة برمجيات مخصصة" : "Tailored Engineering"}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6 leading-tight">
                {lang === "ar" ? "تطوير البرمجيات المخصصة" : "Custom Software Development"}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
                {lang === "ar"
                  ? "يتضمن تطوير البرمجيات المخصصة مكونات أساسية مثل إدارة المستخدمين، وتحليلات البيانات، وتكامل الأنظمة. توفر هذه الميزات وصولاً آمناً، وتقارير مباشرة، واتصالاً سلساً بالأدوات الخارجية لتلبية احتياجات عملك بدقة."
                  : "Custom software development data includes core components like user management, data analytics, and system integration. These features deliver secure access, live reports, and smooth connections with external tools to match your exact business needs."}
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
                {/* High-Fidelity Custom Software Dashboard Mockup */}
                <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-slate-950 border border-white/15 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  {/* IDE style tab headers */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-slate-800 text-cyan-400 px-2.5 py-1 rounded-md font-mono border border-slate-700/50">UserAuth.ts</span>
                      <span className="text-[10px] text-white/40 px-2.5 py-1 font-mono">Analytics.tsx</span>
                      <span className="text-[10px] text-white/40 px-2.5 py-1 font-mono">Deploy.yml</span>
                    </div>
                    <span className="text-[9px] font-mono text-white/20">main.branch</span>
                  </div>

                  {/* Simulated Server Architecture node layout */}
                  <div className="flex-1 flex flex-col justify-center py-4">
                    
                    {/* System visual nodes */}
                    <div className="grid grid-cols-3 gap-3 items-center text-center max-w-[360px] mx-auto">
                      {/* Node 1 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col items-center">
                        <Terminal size={16} className="text-cyan-400 mb-1" />
                        <span className="text-[9px] text-white/60 font-mono">API GATEWAY</span>
                        <span className="text-[7px] text-green-400 font-mono mt-0.5">200 OK</span>
                      </div>

                      {/* Node Connector Line */}
                      <div className="relative h-1 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-slate-800" />
                        <motion.div 
                          animate={{ x: [-20, 20] }} 
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute" 
                        />
                      </div>

                      {/* Node 2 */}
                      <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col items-center">
                        <Server size={16} className="text-blue-400 mb-1" />
                        <span className="text-[9px] text-white/60 font-mono">MICROSERVICE</span>
                        <span className="text-[7px] text-cyan-300 font-mono mt-0.5">READY</span>
                      </div>
                    </div>

                    {/* Code Analytics Live Graph representation */}
                    <div className="mt-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-3 flex flex-col justify-between h-[80px]">
                      <div className="flex justify-between items-center text-[8px] font-mono text-white/40">
                        <span className="flex items-center gap-1"><Activity size={8} className="text-cyan-400" /> API TRANSACTION VOLUME</span>
                        <span>LIVE</span>
                      </div>
                      {/* CSS Bar Chart preview */}
                      <div className="flex items-end gap-1.5 h-8 mt-2 px-1">
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[30%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[60%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[45%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[80%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[95%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[70%] rounded transition-all duration-300" />
                        <div className="w-full bg-cyan-400/20 hover:bg-cyan-400 h-[85%] rounded transition-all duration-300" />
                      </div>
                    </div>

                  </div>

                  {/* Dashboard Stats */}
                  <div className="grid grid-cols-3 gap-2 bg-white/5 border border-white/10 rounded-2xl p-2 font-mono text-[9px] text-center">
                    <div>
                      <span className="text-white/40 block">UPTIME</span>
                      <span className="text-green-400 font-bold">99.99%</span>
                    </div>
                    <div className="border-x border-white/5">
                      <span className="text-white/40 block">LATENCY</span>
                      <span className="text-cyan-300 font-bold">12ms</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">DOCKER</span>
                      <span className="text-blue-400 font-bold">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Content Types Section */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {lang === "ar" ? "هندسة المحتوى والبيانات" : "Core Content Types"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreContentTypes.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 shadow-sm">
                  <c.Icon size={20} />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Features Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mb-4">
              {lang === "ar" ? "المميزات والخصائص الأساسية" : "Essential Features"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {essentialFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <f.Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-3">
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
              {lang === "ar" ? "ابنِ حل البرمجيات المخصص لك" : "Build Your Custom Software Solution"}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              {lang === "ar"
                ? "نحن نترجم أهداف المشروع إلى منتجات مؤسسية آمنة وسريعة وقابلة للتطوير."
                : "We translate project goals into secure, fast, and scalable enterprise products."}
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

export default CustomSoftwarePage;
