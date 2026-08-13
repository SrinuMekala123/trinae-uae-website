import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Camera,
  ScanSearch,
  FileText,
  Database,
  ArrowRight,
  Cpu,
  ShieldAlert,
  SunMoon,
  Gauge,
  Car,
  Settings,
  ShieldCheck,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const ANPRPage = () => {
  const { lang } = useLang();

  const mechanismSteps = lang === "ar" ? [
    {
      title: "التقاط الصور",
      desc: "التقاط لقطات أو إطارات فيديو عالية التباين أو بالأشعة تحت الحمراء بواسطة أجهزة متخصصة.",
      Icon: Camera,
    },
    {
      title: "تحديد موقع اللوحة",
      desc: "خوارزميات الرؤية الحاسوبية تعزل حدود اللوحة عن الخلفيات أو الزوايا المعقدة.",
      Icon: ScanSearch,
    },
    {
      title: "استخراج الأحرف (OCR)",
      desc: "ترجمة بكسلات الصورة المرئية إلى سلاسل نصية وأرقام قابلة للبحث.",
      Icon: FileText,
    },
    {
      title: "مطابقة قاعدة البيانات",
      desc: "مقارنة النص المستخرج بقوائم الحظر أو القوائم البيضاء أو سجلات بوابات التعرفة (سالك/درب).",
      Icon: Database,
    },
  ] : [
    {
      title: "Image Capture",
      desc: "High-contrast or infrared snapshots/video frames taken by specialized hardware.",
      Icon: Camera,
    },
    {
      title: "Plate Localization",
      desc: "Computer vision algorithms isolate the plate boundaries from complex backgrounds or angles.",
      Icon: ScanSearch,
    },
    {
      title: "Character Extraction (OCR)",
      desc: "Translates visual pixels into searchable alphanumeric strings.",
      Icon: FileText,
    },
    {
      title: "Database Matching",
      desc: "Compares the text against blacklists, whitelists, or Salik/Darb toll records.",
      Icon: Database,
    },
  ];

  const features = lang === "ar" ? [
    {
      title: "دقة عالية",
      desc: "يحقق دقة تعرف تتراوح بين 95% و 99% في ظل الإعدادات المثلى ليلاً ونهاراً.",
      Icon: Cpu,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "مقاوم لجميع الظروف الجوية ورؤية ليلية",
      desc: "يستخدم إضاءة الأشعة تحت الحمراء (IR) والتحكم بالغالق للتخفيف من التوهج والمطر والظلام.",
      Icon: SunMoon,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "قراءة عالية السرعة",
      desc: "قادر على تسجيل لوحات المركبات التي تسير بسرعات عالية (تصل إلى 320 كم/ساعة في الأنظمة المتقدمة).",
      Icon: Gauge,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "تنبيه فوري في الوقت الفعلي",
      desc: "يرسل تنبيهات فورية عبر الرسائل القصيرة أو البريد الإلكتروني للمركبات غير المصرح بها أو المطلوبة.",
      Icon: ShieldAlert,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "تصنيف البيانات الوصفية",
      desc: "يكتشف السمات الإضافية للمركبة بما في ذلك اللون، العلامة التجارية/الموديل، واتجاه السير.",
      Icon: Car,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "أتمتة الدخول",
      desc: "يتكامل مباشرة مع الحواجز الرافعة، بوابات التعرفة الإلكترونية (سالك/درب)، وسجلات الزوار.",
      Icon: Settings,
      color: "from-cyan-500 to-blue-500",
    },
  ] : [
    {
      title: "High Accuracy",
      desc: "Frequently achieves 95% to 99% recognition accuracy under optimal day and night configurations.",
      Icon: Cpu,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "All-Weather/Night Vision",
      desc: "Employs infrared (IR) illumination and shutter control to mitigate glare, rain, and darkness.",
      Icon: SunMoon,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "High-Speed Reading",
      desc: "Capable of logging plates on vehicles traveling at high velocities (up to 320 km/h on advanced systems).",
      Icon: Gauge,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Real-Time Alerting",
      desc: "Triggers instant SMS, email, or dashboard warnings for unauthorized or flagged vehicles.",
      Icon: ShieldAlert,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Metadata Tagging",
      desc: "Detects supplemental vehicle traits including color, brand/model, and travel direction.",
      Icon: Car,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Access Automation",
      desc: "Interfaces directly with boom barriers, electronic toll gates (Salik/Darb), and visitor registries.",
      Icon: Settings,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <title>{lang === "ar" ? "نظام القراءة التلقائية للوحات المركبات (ANPR) | TRINAI" : "Automatic Number Plate Recognition (ANPR) | TRINAI"}</title>
        <meta
          name="description"
          content="Automatic Number Plate Recognition (ANPR) is an AI-powered technology that converts vehicle license plates into digital data in real time."
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
                <Car size={14} />
                {lang === "ar" ? "نظام قراءة لوحات المركبات الذكي" : "AI Intelligent ANPR"}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6 leading-tight">
                {lang === "ar" ? "التعرف التلقائي على لوحات الأرقام" : "Automatic Number Plate Recognition (ANPR)"}
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
                {lang === "ar"
                  ? "تقنية التعرف التلقائي على لوحات أرقام المركبات (ANPR) المدعومة بالذكاء الاصطناعي مصممة خصيصاً لأنماط لوحات المركبات في دولة الإمارات (بما في ذلك دبي وأبوظبي والشارقة وغيرها). متوافق تماماً مع معايير SIRA و ADMCC لتوفير التقاط عالي الدقة، ومعالجة الرؤية الحاسوبية، ومطابقة قواعد البيانات لمواقف السيارات وبوابات التعرفة المرورية (سالك ودرب)."
                  : "Automatic Number Plate Recognition (ANPR) is an AI-powered technology designed specifically for UAE vehicle registration styles (including Dubai, Abu Dhabi, Sharjah, and other emirates). Fully compliant with SIRA and ADMCC standards, it provides high-resolution capture, computer vision processing, and database matching for parking management, gated communities, and Salik/Darb toll integration."}
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
                {/* High-Fidelity ANPR Camera feed Mockup */}
                <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-black/40 border border-white/15 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Viewfinder corner lines */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                  {/* Vertical Scanning laser line */}
                  <motion.div 
                    animate={{ y: [0, 240, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
                    style={{ top: "10px" }}
                  />

                  {/* Mockup Header info */}
                  <div className="flex justify-between items-center z-10">
                    <span className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      LIVE FEED
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">CAM_04 // GATE_EAST</span>
                  </div>

                  {/* Center target vehicle layout */}
                  <div className="flex-1 flex flex-col justify-center items-center my-4 relative">
                    {/* Plate boundary box */}
                    <div className="border border-dashed border-cyan-400/60 bg-cyan-500/5 rounded-xl px-6 py-4 flex flex-col items-center shadow-lg relative">
                      <span className="absolute -top-2.5 left-4 bg-cyan-500 text-black text-[8px] font-bold px-1.5 py-0.5 rounded">VEHICLE_PLATE</span>
                      {/* Dubai plate mockup */}
                      <div className="bg-white text-black font-extrabold text-xl tracking-wider rounded border-2 border-black/80 px-4 py-2 flex items-center gap-3 font-mono shadow-md select-none mt-1">
                        <div className="flex flex-col items-center justify-center border-r border-black/20 pr-2">
                          <span className="text-[8px] tracking-tighter">DUBAI</span>
                          <span className="text-xs font-bold leading-none">D</span>
                        </div>
                        <span className="text-2xl leading-none">98201</span>
                      </div>
                    </div>

                    {/* Recognition Confidence tag */}
                    <div className="mt-4 flex gap-3 text-[10px] font-mono z-10">
                      <span className="bg-green-500/20 border border-green-500/40 text-green-300 px-2.5 py-1 rounded-full">
                        Match: 99.8%
                      </span>
                      <span className="bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-2.5 py-1 rounded-full">
                        Speed: 64 km/h
                      </span>
                    </div>
                  </div>

                  {/* Scanned Logs stream */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 space-y-1.5 z-10">
                    <div className="flex justify-between items-center text-[9px] text-white/40 font-mono pb-1 border-b border-white/5">
                      <span>RECENT READS</span>
                      <span>STATUS</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/90">
                      <span className="flex items-center gap-1.5"><Car size={10} className="text-cyan-400" /> D 98201 (DUBAI)</span>
                      <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[8px] font-bold">AUTHORIZED</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/70">
                      <span className="flex items-center gap-1.5"><Car size={10} className="text-white/40" /> H 44321 (SHJ)</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[8px] font-bold">GUEST_TICKET</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
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
              {lang === "ar" ? "آلية العمل ومراحلها" : "How It Works"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {mechanismSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 min-h-[280px]"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3.5 right-6 rtl:right-auto rtl:left-6 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold font-mono shadow-md uppercase tracking-wider">
                  {lang === "ar" ? `الخطوة 0${idx + 1}` : `Step 0${idx + 1}`}
                </div>

                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <step.Icon size={26} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              {lang === "ar" ? "أهم مميزات النظام" : "Key Features"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-md`}>
                    <f.Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
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
              {lang === "ar" ? "نشر نظام ANPR المدعوم بالذكاء الاصطناعي" : "Deploy AI-Powered ANPR"}
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              {lang === "ar"
                ? "أتمتة تحصيل الرسوم، وتحسين مراقبة المنشآت، ومزامنة قراءة اللوحات الذكية مع الحواجز البوابية."
                : "Automate toll collection, enhance facility monitoring, and sync smart license reading with gate barriers."}
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

export default ANPRPage;
