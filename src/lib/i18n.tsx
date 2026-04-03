import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

// ✅ Only 2 languages: English and Arabic (Hindi removed)
type Lang = "en" | "ar";

interface Translations {
  [key: string]: { en: string; ar: string };
}

const translations: Translations = {
  // ==================== NAVBAR ====================
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.solutions": { en: "Solutions", ar: "الحلول" },
  "nav.industries": { en: "Industries", ar: "القطاعات" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.getInTouch": { en: "Talk to an Expert", ar: "تحدث مع خبير" },

  // ==================== HERO ====================
  "hero.tag1": { en: "AI Surveillance", ar: "مراقبة بالذكاء الاصطناعي" },
  "hero.tag2": { en: "Home Automation", ar: "أتمتة المنزل" },
  "hero.tag3": { en: "ICCC", ar: "مركز القيادة والتحكم" },
  "hero.title1": { en: "Intelligent Security &", ar: "حلول أمنية ذكية و" },
  "hero.title2": { en: "Automation Solutions", ar: "أتمتة متقدمة" },
  "hero.title3": { en: "for the UAE & Beyond", ar: "للإمارات وأبعد" },
  "hero.desc": {
    en: "End-to-end AI CCTV Surveillance, Home Automation, and Integrated Command & Control Center solutions to secure, automate, and optimize your spaces in real time.",
    ar: "حلول شاملة لكاميرات المراقبة بالذكاء الاصطناعي وأتمتة المنزل ومراكز القيادة والتحكم لتأمين وأتمتة وتحسين مساحاتكم.",
  },
  "hero.cta1": { en: "Book a Consultation", ar: "احجز استشارة" },
  "hero.cta2": { en: "Explore Solutions", ar: "استكشف الحلول" },
  "hero.feat1": { en: "AI-Powered Detection", ar: "كشف بالذكاء الاصطناعي" },
  "hero.feat2": { en: "24/7 Monitoring", ar: "مراقبة على مدار الساعة" },
  "hero.feat3": { en: "Smart Integration", ar: "تكامل ذكي" },

  // Hero Carousel
  "hero.carousel.1.title": {
    en: "AI CCTV Surveillance",
    ar: "مراقبة الكاميرات بالذكاء الاصطناعي",
  },
  "hero.carousel.1.desc": {
    en: "Advanced AI-powered video analytics for proactive security",
    ar: "تحليلات فيديو متقدمة مدعومة بالذكاء الاصطناعي لأمن استباقي",
  },
  "hero.carousel.2.title": { en: "Home Automation", ar: "أتمتة المنزل" },
  "hero.carousel.2.desc": {
    en: "Seamless smart living with integrated control systems",
    ar: "حياة ذكية سلسة مع أنظمة تحكم متكاملة",
  },
  "hero.carousel.3.title": {
    en: "ICCC Solutions",
    ar: "حلول مركز القيادة والتحكم",
  },
  "hero.carousel.3.desc": {
    en: "Centralized command center for total operational visibility",
    ar: "مركز قيادة مركزي لرؤية تشغيلية كاملة",
  },

  // ==================== TRUSTED ====================
  "trusted.label": {
    en: "TRUSTED BY LEADING ORGANIZATIONS",
    ar: "موثوق من المؤسسات الرائدة",
  },

  // ==================== STATS ====================
  "stats.title1": { en: "Impact That", ar: "تأثير" },
  "stats.title2": { en: "Speaks", ar: "يتحدث" },
  "stats.desc": {
    en: "Numbers that reflect our commitment to excellence across the UAE and India.",
    ar: "أرقام تعكس التزامنا بالتميز في الإمارات والهند.",
  },
  "stats.s1": { en: "Projects Delivered", ar: "مشاريع منجزة" },
  "stats.s2": { en: "System Uptime", ar: "وقت تشغيل النظام" },
  "stats.s3": { en: "Support Available", ar: "دعم متاح" },
  "stats.s4": { en: "Cities Covered", ar: "مدن مغطاة" },

  // ==================== FEATURES (UPDATED - No Emojis) ====================
  "features.label": { en: "What We Offer", ar: "ما نقدمه" },

  // Feature 1: AI Surveillance (NO EMOJI)
  "features.f1.title": {
    en: "AI Surveillance",
    ar: "مراقبة بالذكاء الاصطناعي",
  },
  "features.f1.desc": {
    en: "Smart AI-powered systems that monitor, detect, and respond in real time—keeping your spaces secure at all times.",
    ar: "أنظمة ذكية مدعومة بالذكاء الاصطناعي تراقب وتكتشف وتستجيب في الوقت الفعلي — للحفاظ على أمان مساحاتك في جميع الأوقات.",
  },

  // Feature 2: ICCC (NO EMOJI)
  "features.f2.title": {
    en: "ICCC",
    ar: "مركز القيادة والتحكم",
  },
  "features.f2.desc": {
    en: "A centralized platform that brings surveillance, operations, and analytics into one seamless control system.",
    ar: "منصة مركزية تجمع المراقبة والعمليات والتحليلات في نظام تحكم واحد سلس.",
  },

  // Feature 3: Home Automation (NO EMOJI)
  "features.f3.title": {
    en: "Home Automation",
    ar: "أتمتة المنزل",
  },
  "features.f3.desc": {
    en: "Control lighting, security, and comfort effortlessly—designed for a smarter, more convenient lifestyle.",
    ar: "تحكم في الإضاءة والأمن والراحة بسهولة — مصمم لحياة أكثر ذكاءً وملاءمة.",
  },

  // Feature 4: ELV Systems (NO EMOJI)
  "features.f4.title": {
    en: "ELV Systems",
    ar: "أنظمة الجهد المنخفض",
  },
  "features.f4.desc": {
    en: "Reliable infrastructure that powers connectivity, communication, and security for modern spaces.",
    ar: "بنية تحتية موثوقة تدعم الاتصال والتواصل والأمن للمساحات الحديثة.",
  },

  // ==================== SERVICES ====================
  "services.label": { en: "What We Deliver", ar: "ما نقدمه" },
  "services.title1": { en: "Intelligent Solutions for", ar: "حلول ذكية" },
  "services.title2": { en: "Smarter Operations", ar: "لعمليات أذكى" },
  "services.desc": {
    en: "From intelligent surveillance to complete building automation — we deliver integrated technology solutions that transform how you secure and manage your spaces.",
    ar: "من المراقبة الذكية إلى أتمتة المباني الكاملة — نقدم حلول تقنية متكاملة تحول طريقة تأمين وإدارة مساحاتكم.",
  },
  "services.s1.title": {
    en: "AI-Powered Security",
    ar: "أمن مدعوم بالذكاء الاصطناعي",
  },
  "services.s1.desc": {
    en: "Real-time threat detection, facial recognition, and automated alerts with advanced AI CCTV surveillance.",
    ar: "كشف التهديدات الفوري والتعرف على الوجوه والتنبيهات التلقائية بالمراقبة الذكية.",
  },
  "services.s2.title": { en: "ELV Solutions", ar: "حلول الجهد المنخفض" },
  "services.s2.desc": {
    en: "Reliable low-voltage systems for enterprise infrastructure, access control, and smart building integration.",
    ar: "أنظمة جهد منخفض موثوقة للبنية التحتية وأنظمة الدخول والمباني الذكية.",
  },
  "services.s3.title": { en: "Home Automation", ar: "أتمتة المنزل" },
  "services.s3.desc": {
    en: "Seamless smart home systems with voice control, energy management, and remote access from anywhere.",
    ar: "أنظمة منزل ذكي سلسة مع تحكم صوتي وإدارة الطاقة والوصول عن بُعد.",
  },
  "services.s4.title": { en: "ICCC Systems", ar: "أنظمة القيادة والتحكم" },
  "services.s4.desc": {
    en: "Unified command center for real-time monitoring, analytics, and coordinated incident response.",
    ar: "مركز قيادة موحد للمراقبة الفورية والتحليلات والاستجابة المنسقة.",
  },
  "services.s5.title": { en: "Energy Optimization", ar: "تحسين الطاقة" },
  "services.s5.desc": {
    en: "Reduce energy consumption with smart monitoring, automated controls, and sustainability-driven insights.",
    ar: "تقليل استهلاك الطاقة بالمراقبة الذكية والتحكم الآلي.",
  },
  "services.s6.title": {
    en: "Data-Driven Insights",
    ar: "رؤى مبنية على البيانات",
  },
  "services.s6.desc": {
    en: "Actionable analytics dashboards for informed decisions, predictive maintenance, and operational efficiency.",
    ar: "لوحات تحليلية قابلة للتنفيذ لقرارات مدروسة وكفاءة تشغيلية.",
  },

  // ==================== ABOUT ====================
  "about.label": { en: "About Trinai", ar: "عن ترينآي" },
  "about.title": {
    en: "Smart Security Solutions Designed To Protect Modern",
    ar: "حلول أمنية ذكية مصممة لحماية",
  },
  "about.titleAccent": {
    en: "Homes And Businesses",
    ar: "المنازل والأعمال الحديثة",
  },
  "about.p1": {
    en: "Trinai, a UAE-based technology leader, delivers AI CCTV surveillance & ELV solutions, home automation, and ICCC systems for governments, organizations, and enterprises.",
    ar: "ترينآي، شركة تقنية رائدة مقرها الإمارات، تقدم حلول المراقبة بالذكاء الاصطناعي وأنظمة الجهد المنخفض وأتمتة المنزل ومراكز القيادة والتحكم.",
  },
  "about.p2": {
    en: "We prioritize innovation, reliability, and real-time smart security with advanced perimeter protection and monitoring.",
    ar: "نولي الأولوية للابتكار والموثوقية والأمن الذكي في الوقت الفعلي مع حماية ومراقبة محيطية متقدمة.",
  },
  "about.flagTitle": {
    en: "Proudly in UAE & India",
    ar: "بفخر في الإمارات والهند",
  },
  "about.flagDesc": { en: "Trusted across borders", ar: "موثوقون عبر الحدود" },
  "about.badgeTitle": { en: "UAE & India", ar: "الإمارات والهند" },
  "about.badgeDesc": { en: "Global Operations", ar: "عمليات عالمية" },

  // About Page
  "aboutPage.title": { en: "About Us", ar: "من نحن" },
  "aboutPage.subtitle": {
    en: "Powering Smart Security & Intelligent Living Across the UAE",
    ar: "تمكين الأمن الذكي والحياة الذكية في جميع أنحاء الإمارات",
  },
  "aboutPage.p1": {
    en: "Trinai UAE is a next-generation technology company delivering advanced ELV, ICCC, and home automation solutions across Dubai and the UAE.",
    ar: "ترينآي الإمارات هي شركة تقنية من الجيل التالي تقدم حلول الجهد المنخفض ومركز القيادة والتحكم وأتمتة المنزل في دبي والإمارات.",
  },
  "aboutPage.p2": {
    en: "With strong expertise in large-scale surveillance and smart infrastructure, we help businesses, governments, and residential spaces transform into intelligent, secure, and connected environments.",
    ar: "بخبرة قوية في المراقبة واسعة النطاق والبنية التحتية الذكية، نساعد الشركات والحكومات والمساحات السكنية على التحول إلى بيئات ذكية وآمنة ومتصلة.",
  },
  "aboutPage.p3": {
    en: "We integrate AI, IoT, and centralized control systems to deliver real-time monitoring, automation, and operational efficiency.",
    ar: "نقوم بدمج الذكاء الاصطناعي وإنترنت الأشياء وأنظمة التحكم المركزية لتقديم مراقبة فورية وأتمتة وكفاءة تشغيلية.",
  },
  "aboutPage.vision.title": { en: "Our Vision", ar: "رؤيتنا" },
  "aboutPage.vision.desc": {
    en: "To build intelligent ecosystems that redefine safety and connectivity.",
    ar: "بناء أنظمة بيئية ذكية تعيد تعريف السلامة والاتصال.",
  },
  "aboutPage.mission.title": { en: "Our Mission", ar: "مهمتنا" },
  "aboutPage.mission.desc": {
    en: "To deliver scalable, reliable, and future-ready technology solutions across the UAE.",
    ar: "تقديم حلول تقنية قابلة للتطوير وموثوقة وجاهزة للمستقبل في جميع أنحاء الإمارات.",
  },

  // ==================== WHY CHOOSE US ====================
  "why.label": { en: "Why Trinai", ar: "لماذا ترينآي" },
  "why.title1": { en: "Why Businesses Choose", ar: "لماذا تختار المؤسسات" },
  "why.title2": { en: "Trinai", ar: "ترينآي" },
  "why.desc": {
    en: "We don't just install technology — we engineer intelligent ecosystems that evolve with your needs. Here's what sets us apart.",
    ar: "لا نقوم فقط بتركيب التقنية — نهندس أنظمة ذكية تتطور مع احتياجاتكم. إليك ما يميزنا.",
  },
  "why.r1.title": { en: "AI Innovation", ar: "ابتكار الذكاء الاصطناعي" },
  "why.r1.desc": {
    en: "Trinai Leads with Cutting-Edge AI CCTV Surveillance",
    ar: "ترينآي تقود بمراقبة كاميرات متطورة بالذكاء الاصطناعي",
  },
  "why.r2.title": { en: "Reliable Integration", ar: "تكامل موثوق" },
  "why.r2.desc": {
    en: "Mastering Seamless ICCC and Home Automation",
    ar: "إتقان التكامل السلس لمركز القيادة والتحكم وأتمتة المنزل",
  },
  "why.r3.title": { en: "Proven Expertise", ar: "خبرة مثبتة" },
  "why.r3.desc": {
    en: "Delivering Trusted ELV Enterprise Solutions",
    ar: "تقديم حلول الجهد المنخفض الموثوقة للمؤسسات",
  },
  "why.r4.title": {
    en: "24/7 Operations Center",
    ar: "مركز عمليات على مدار الساعة",
  },
  "why.r4.desc": {
    en: "Round-the-clock monitoring with dedicated response teams and proactive maintenance.",
    ar: "مراقبة على مدار الساعة مع فرق استجابة مخصصة وصيانة استباقية.",
  },
  "why.r5.title": { en: "Future-Ready Security", ar: "أمن جاهز للمستقبل" },
  "why.r5.desc": {
    en: "Built on open protocols and modular architecture — ready for tomorrow's challenges.",
    ar: "مبنية على بروتوكولات مفتوحة وبنية معيارية — جاهزة لتحديات الغد.",
  },
  "why.r6.title": { en: "Villa to City Scale", ar: "من الفيلا إلى المدينة" },
  "why.r6.desc": {
    en: "Solutions that scale effortlessly — from a single villa to an entire smart city deployment.",
    ar: "حلول تتوسع بسهولة — من فيلا واحدة إلى نشر مدينة ذكية بأكملها.",
  },

  // ==================== SOLUTIONS ====================
  "solutions.label": { en: "Our Solutions", ar: "حلولنا" },
  "solutions.title1": { en: "Three Pillars of", ar: "ثلاثة أعمدة" },
  "solutions.title2": { en: "Intelligent Security", ar: "للأمن الذكي" },
  "solutions.desc": {
    en: "Each solution is engineered to work independently or as part of a unified intelligent ecosystem.",
    ar: "كل حل مصمم للعمل بشكل مستقل أو كجزء من نظام بيئي ذكي موحد.",
  },
  "solutions.cctv.title": {
    en: "AI CCTV Surveillance",
    ar: "مراقبة الكاميرات بالذكاء الاصطناعي",
  },
  "solutions.cctv.subtitle": {
    en: "Beyond Watching — Understanding",
    ar: "أبعد من المراقبة — الفهم",
  },
  "solutions.cctv.desc": {
    en: "Next-gen AI cameras that don't just record — they analyze, predict, and respond. Our neural-network powered surveillance transforms passive footage into proactive security intelligence.",
    ar: "كاميرات ذكاء اصطناعي من الجيل التالي لا تسجل فقط — بل تحلل وتتنبأ وتستجيب. مراقبتنا المدعومة بالشبكات العصبية تحول اللقطات السلبية إلى ذكاء أمني استباقي.",
  },
  "solutions.cctv.f1": {
    en: "Real-Time Facial Recognition",
    ar: "التعرف على الوجوه في الوقت الفعلي",
  },
  "solutions.cctv.f2": {
    en: "Behavioral Anomaly Detection",
    ar: "كشف الشذوذ السلوكي",
  },
  "solutions.cctv.f3": {
    en: "License Plate Recognition (ANPR)",
    ar: "التعرف على لوحات السيارات",
  },
  "solutions.cctv.f4": {
    en: "Crowd Density Analytics",
    ar: "تحليلات كثافة الحشود",
  },
  "solutions.cctv.f5": {
    en: "Perimeter Intrusion Detection",
    ar: "كشف اختراق المحيط",
  },
  "solutions.cctv.f6": {
    en: "Cloud & Edge Processing",
    ar: "معالجة سحابية وطرفية",
  },
  "solutions.home.title": {
    en: "Smart Home Automation",
    ar: "أتمتة المنزل الذكي",
  },
  "solutions.home.subtitle": {
    en: "Your Home, Effortlessly Intelligent",
    ar: "منزلك، ذكي بلا مجهود",
  },
  "solutions.home.desc": {
    en: "Transform your living space into a responsive, energy-efficient environment. From lighting scenes to climate zones — everything adapts to your lifestyle automatically.",
    ar: "حوّل مساحة معيشتك إلى بيئة متجاوبة وموفرة للطاقة. من مشاهد الإضاءة إلى مناطق المناخ — كل شيء يتكيف مع نمط حياتك تلقائياً.",
  },
  "solutions.home.f1": {
    en: "Voice & App Control",
    ar: "تحكم صوتي وعبر التطبيق",
  },
  "solutions.home.f2": {
    en: "Automated Lighting Scenes",
    ar: "مشاهد إضاءة تلقائية",
  },
  "solutions.home.f3": { en: "Smart Climate Control", ar: "تحكم مناخي ذكي" },
  "solutions.home.f4": {
    en: "Motorized Blinds & Curtains",
    ar: "ستائر ومظلات آلية",
  },
  "solutions.home.f5": {
    en: "Multi-Room Audio/Video",
    ar: "صوت/فيديو متعدد الغرف",
  },
  "solutions.home.f6": {
    en: "Energy Usage Dashboard",
    ar: "لوحة استهلاك الطاقة",
  },
  "solutions.iccc.title": {
    en: "Integrated Command & Control",
    ar: "القيادة والتحكم المتكامل",
  },
  "solutions.iccc.subtitle": {
    en: "One Dashboard. Total Visibility.",
    ar: "لوحة واحدة. رؤية كاملة.",
  },
  "solutions.iccc.desc": {
    en: "Unify all systems — surveillance, access control, fire safety, BMS — into a single intelligent command center with real-time situational awareness and coordinated incident response.",
    ar: "وحّد جميع الأنظمة — المراقبة، التحكم بالدخول، السلامة من الحرائق، إدارة المباني — في مركز قيادة ذكي واحد مع وعي ظرفي فوري واستجابة منسقة للحوادث.",
  },
  "solutions.iccc.f1": {
    en: "Unified Sensor Dashboard",
    ar: "لوحة أجهزة استشعار موحدة",
  },
  "solutions.iccc.f2": {
    en: "AI-Driven Incident Response",
    ar: "استجابة للحوادث مدعومة بالذكاء الاصطناعي",
  },
  "solutions.iccc.f3": {
    en: "GIS Mapping & Tracking",
    ar: "رسم خرائط وتتبع جغرافي",
  },
  "solutions.iccc.f4": {
    en: "Multi-Agency Coordination",
    ar: "تنسيق متعدد الجهات",
  },
  "solutions.iccc.f5": {
    en: "Predictive Analytics Engine",
    ar: "محرك تحليلات تنبؤية",
  },
  "solutions.iccc.f6": {
    en: "Video Wall Integration",
    ar: "تكامل جدار الفيديو",
  },

  // Service Highlights
  "serviceHighlights.cctv.title": {
    en: "AI CCTV Surveillance",
    ar: "مراقبة الكاميرات بالذكاء الاصطناعي",
  },
  "serviceHighlights.cctv.desc": {
    en: "Transforming video into intelligence, our AI-powered CCTV systems deliver real-time monitoring, advanced analytics, and proactive threat detection. Designed for modern infrastructure, they ensure enhanced visibility, faster response, and stronger security across all environments.",
    ar: "تحويل الفيديو إلى ذكاء، أنظمة المراقبة بالذكاء الاصطناعي تقدم مراقبة فورية وتحليلات متقدمة وكشف استباقي للتهديدات.",
  },
  "serviceHighlights.home.title": { en: "Home Automation", ar: "أتمتة المنزل" },
  "serviceHighlights.home.desc": {
    en: "Experience seamless smart living with fully integrated home automation systems. From lighting and climate control to security and energy management, everything is connected and controlled through a single intelligent platform for comfort, convenience, and efficiency.",
    ar: "استمتع بحياة ذكية سلسة مع أنظمة أتمتة منزلية متكاملة. من الإضاءة والتحكم المناخي إلى الأمن وإدارة الطاقة.",
  },
  "serviceHighlights.iccc.title": {
    en: "Integrated Command Control Centre",
    ar: "مركز القيادة والتحكم المتكامل",
  },
  "serviceHighlights.iccc.desc": {
    en: "Our ICCC solutions act as a centralized hub for monitoring, analytics, and operations. By integrating multiple systems into one platform, we enable real-time insights, streamlined control, and efficient management for cities, enterprises, and critical infrastructure.",
    ar: "حلول مركز القيادة والتحكم تعمل كمركز موحد للمراقبة والتحليلات والعمليات.",
  },

  // ==================== INDUSTRIES ====================
  "industries.label": { en: "Industries We Serve", ar: "القطاعات التي نخدمها" },
  "industries.title1": { en: "Transforming", ar: "تحويل" },
  "industries.title2": { en: "Every Sector", ar: "كل قطاع" },
  "industries.desc": {
    en: "Our solutions are deployed across diverse sectors, each customized for industry-specific challenges.",
    ar: "حلولنا منتشرة في قطاعات متنوعة، كل منها مخصص لتحديات الصناعة.",
  },
  "industries.i1": {
    en: "Government & Smart Cities",
    ar: "الحكومة والمدن الذكية",
  },
  "industries.i1.desc": {
    en: "City-scale surveillance & command centers",
    ar: "مراقبة ومراكز قيادة على نطاق المدينة",
  },
  "industries.i2": { en: "Commercial Buildings", ar: "المباني التجارية" },
  "industries.i2.desc": {
    en: "Access control & building management",
    ar: "التحكم بالدخول وإدارة المباني",
  },
  "industries.i3": { en: "Residential & Villas", ar: "السكني والفلل" },
  "industries.i3.desc": {
    en: "Premium smart home experiences",
    ar: "تجارب منزل ذكي متميزة",
  },
  "industries.i4": { en: "Hotels & Hospitality", ar: "الفنادق والضيافة" },
  "industries.i4.desc": {
    en: "Guest experience & energy optimization",
    ar: "تجربة الضيف وتحسين الطاقة",
  },
  "industries.i5": { en: "Healthcare & Hospitals", ar: "الرعاية الصحية" },
  "industries.i5.desc": {
    en: "Patient safety & facility monitoring",
    ar: "سلامة المرضى ومراقبة المنشآت",
  },
  "industries.i6": { en: "Industrial & Warehouses", ar: "الصناعي والمستودعات" },
  "industries.i6.desc": {
    en: "Perimeter security & asset tracking",
    ar: "أمن المحيط وتتبع الأصول",
  },

  // ==================== TRUSTED PARTNER ====================
  "trustedPartner.label": { en: "Our Trusted Partner", ar: "شريكنا الموثوق" },
  "trustedPartner.name": { en: "Doch", ar: "دوتش" },
  "trustedPartner.desc": {
    en: "Leading Smart Home Automation UAE Partner",
    ar: "شريك أتمتة المنزل الذكي الرائد في الإمارات",
  },

  // ==================== CERTIFICATIONS ====================
  "certifications.title": { en: "Certified Excellence", ar: "تميز معتمد" },
  "certifications.desc": {
    en: "Trusted across UAE & India with industry-leading certifications",
    ar: "موثوق في الإمارات والهند مع شهادات رائدة في الصناعة",
  },

  // ==================== FULL VIDEO ====================
  "fullVideo.title": {
    en: "Experience Trinai in Action",
    ar: "اختبر ترينآي في العمل",
  },
  "fullVideo.desc": {
    en: "See how our solutions transform security and automation",
    ar: "شاهد كيف تحول حلولنا الأمن والأتمتة",
  },

  // ==================== FAQ ====================
  "faq.label": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "faq.title1": { en: "Frequently Asked", ar: "الأسئلة" },
  "faq.title2": { en: "Questions", ar: "الشائعة" },
  "faq.q1": {
    en: "What is AI CCTV Surveillance?",
    ar: "ما هي المراقبة بالذكاء الاصطناعي؟",
  },
  "faq.a1": {
    en: "AI CCTV uses advanced algorithms for real-time threat detection, facial recognition, and automated alerts — going beyond traditional passive monitoring.",
    ar: "تستخدم كاميرات الذكاء الاصطناعي خوارزميات متقدمة للكشف الفوري عن التهديدات والتعرف على الوجوه والتنبيهات التلقائية.",
  },
  "faq.q2": {
    en: "How does Home Automation save energy?",
    ar: "كيف توفر أتمتة المنزل الطاقة؟",
  },
  "faq.a2": {
    en: "Smart automation optimizes lighting, HVAC, and appliances based on occupancy and schedules, reducing energy waste by up to 30%.",
    ar: "تعمل الأتمتة الذكية على تحسين الإضاءة والتكييف بناءً على الإشغال والجداول الزمنية.",
  },
  "faq.q3": {
    en: "What is an ICCC system?",
    ar: "ما هو نظام مركز القيادة والتحكم؟",
  },
  "faq.a3": {
    en: "An Integrated Command & Control Center unifies all security, surveillance, and building management systems into one real-time dashboard for coordinated response.",
    ar: "يوحّد مركز القيادة والتحكم المتكامل جميع أنظمة الأمن والمراقبة وإدارة المباني في لوحة واحدة.",
  },
  "faq.q4": {
    en: "Does Trinai operate outside the UAE?",
    ar: "هل تعمل ترينآي خارج الإمارات؟",
  },
  "faq.a4": {
    en: "Yes, Trinai operates in both the UAE and India, with plans to expand across the MENA region.",
    ar: "نعم، تعمل ترينآي في الإمارات والهند مع خطط للتوسع في منطقة الشرق الأوسط.",
  },
  "faq.q5": {
    en: "Can existing buildings be retrofitted?",
    ar: "هل يمكن تحديث المباني القائمة؟",
  },
  "faq.a5": {
    en: "Absolutely. Our solutions are designed to integrate into existing infrastructure without major renovations or downtime.",
    ar: "بالتأكيد. حلولنا مصممة للتكامل مع البنية التحتية القائمة دون تجديدات كبيرة.",
  },
  "faq.q6": {
    en: "What makes Trinai different from other providers?",
    ar: "ما الذي يميز ترينآي عن المزودين الآخرين؟",
  },
  "faq.a6": {
    en: "We take an AI-first approach, integrating surveillance, automation, and command centers into one unified ecosystem — not isolated products.",
    ar: "نتبع نهج الذكاء الاصطناعي أولاً، ندمج المراقبة والأتمتة ومراكز القيادة في نظام بيئي موحد.",
  },

  // ==================== CTA ====================
  "cta.label": { en: "Get Started", ar: "ابدأ الآن" },
  "cta.title1": { en: "Ready to Build a", ar: "مستعد لبناء" },
  "cta.title2": {
    en: "Smarter, Safer Future?",
    ar: "مستقبل أذكى وأكثر أماناً؟",
  },
  "cta.desc": {
    en: "Let our experts design a customized security and automation solution tailored to your exact needs.",
    ar: "دع خبراءنا يصممون حلاً مخصصاً للأمن والأتمتة يناسب احتياجاتك بالضبط.",
  },
  "cta.btn": { en: "Schedule a Free Consultation", ar: "حجز استشارة مجانية" },
  "cta.btn2": { en: "Download Brochure", ar: "تحميل الكتيب" },

  // ==================== CONTACT ====================
  "contact.label": { en: "Contact Us", ar: "تواصل معنا" },
  "contact.title1": { en: "Let's Build Something", ar: "لنبنِ شيئاً" },
  "contact.title2": { en: "Intelligent Together", ar: "ذكياً معاً" },
  "contact.formTitle": {
    en: "Tell us about your project",
    ar: "أخبرنا عن مشروعك",
  },
  "contact.formDesc": {
    en: "Our team will get back to you within 24 hours.",
    ar: "فريقنا سيرد عليك خلال 24 ساعة.",
  },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.subject": { en: "Subject", ar: "الموضوع" },
  "contact.message": {
    en: "Tell us about your project...",
    ar: "أخبرنا عن مشروعك...",
  },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.phoneLabel": { en: "Phone", ar: "الهاتف" },
  "contact.emailLabel": { en: "Email", ar: "البريد" },
  "contact.locationLabel": { en: "Office", ar: "المكتب" },
  "contact.locationVal": { en: "Dubai, UAE", ar: "دبي، الإمارات" },

  // Contact Page
  "contactPage.title": { en: "Contact Us", ar: "تواصل معنا" },
  "contactPage.subtitle": { en: "Take the first step", ar: "خذ الخطوة الأولى" },
  "contactPage.desc": {
    en: "Ready to transform your digital presence? Get in touch with our team and let's build something amazing together.",
    ar: "مستعد لتحويل وجودك الرقمي؟ تواصل مع فريقنا ودعنا نبني شيئًا مذهلاً معًا.",
  },
  "contactPage.office.title": { en: "Head Office", ar: "المكتب الرئيسي" },
  "contactPage.office.address": {
    en: "House number 15, Bloomingdale villa, Al Hebiah Fourth, Dubai Sports City, Dubai, United Arab Emirates",
    ar: "رقم المنزل 15، فيلا بلومينغديل، الحبية الرابعة، مدينة دبي الرياضية، دبي، الإمارات العربية المتحدة",
  },
  "contactPage.email.title": {
    en: "Mail us for information",
    ar: "راسلنا للمعلومات",
  },
  "contactPage.email.address": { en: "info@trinai.ae", ar: "info@trinai.ae" },

  // ==================== SERVICES PAGE ====================
  "servicesPage.title": { en: "Our Services", ar: "خدماتنا" },
  "servicesPage.elv.title": {
    en: "ELV Solutions in UAE",
    ar: "حلول الجهد المنخفض في الإمارات",
  },
  "servicesPage.elv.desc": {
    en: "We provide complete ELV solutions in Dubai, designed for secure and efficient infrastructure.",
    ar: "نقدم حلول الجهد المنخفض الكاملة في دبي، المصممة لبنية تحتية آمنة وفعالة.",
  },
  "servicesPage.elv.items.1": {
    en: "Biometric Access Control – Advanced fingerprint, facial recognition & RFID systems",
    ar: "التحكم بالوصول البيومتري – أنظمة متقدمة للبصمة والتعرف على الوجه وRFID",
  },
  "servicesPage.elv.items.2": {
    en: "Boom Barriers – Automated vehicle entry management systems",
    ar: "الحواجز الرافعة – أنظمة إدارة دخول المركبات الآلية",
  },
  "servicesPage.elv.items.3": {
    en: "CCTV Surveillance – AI-powered monitoring with real-time analytics",
    ar: "مراقبة الكاميرات – مراقبة مدعومة بالذكاء الاصطناعي مع تحليلات فورية",
  },
  "servicesPage.elv.items.4": {
    en: "Fire Alarm Systems – Early detection and safety compliance solutions",
    ar: "أنظمة إنذار الحريق – حلول الكشف المبكر والامتثال للسلامة",
  },
  "servicesPage.iccc.title": {
    en: "ICCC (Command & Control Centers UAE)",
    ar: "مركز القيادة والتحكم في الإمارات",
  },
  "servicesPage.iccc.desc": {
    en: "Centralized platforms for monitoring, managing, and responding in real time.",
    ar: "منصات مركزية للمراقبة والإدارة والاستجابة في الوقت الفعلي.",
  },
  "servicesPage.iccc.items.1": {
    en: "Video Management Systems (VMS)",
    ar: "أنظمة إدارة الفيديو",
  },
  "servicesPage.iccc.items.2": {
    en: "AI Video Analytics",
    ar: "تحليلات الفيديو بالذكاء الاصطناعي",
  },
  "servicesPage.iccc.items.3": {
    en: "Incident Management System",
    ar: "نظام إدارة الحوادث",
  },
  "servicesPage.iccc.items.4": {
    en: "Data Integration & Dashboard",
    ar: "تكامل البيانات ولوحة التحكم",
  },
  "servicesPage.iccc.items.5": {
    en: "Cloud & On-Premise Solutions",
    ar: "حلول سحابية ومحلية",
  },
  "servicesPage.home.title": {
    en: "Home Automation in UAE",
    ar: "أتمتة المنزل في الإمارات",
  },
  "servicesPage.home.desc": {
    en: "Smart living solutions designed for modern homes and villas.",
    ar: "حلول الحياة الذكية المصممة للمنازل والفلل الحديثة.",
  },
  "servicesPage.home.items.1": {
    en: "Smart Lighting Control",
    ar: "التحكم الذكي في الإضاءة",
  },
  "servicesPage.home.items.2": {
    en: "Climate Control (AC Automation)",
    ar: "التحكم المناخي (أتمتة التكييف)",
  },
  "servicesPage.home.items.3": {
    en: "Smart Security Integration",
    ar: "تكامل الأمن الذكي",
  },
  "servicesPage.home.items.4": {
    en: "Smart Door Locks & Video Door Phones",
    ar: "أقفال الأبواب الذكية وهواتف الفيديو",
  },
  "servicesPage.home.items.5": {
    en: "Curtain & Blind Automation",
    ar: "أتمتة الستائر والمظلات",
  },
  "servicesPage.home.items.6": {
    en: "Entertainment & Media Control",
    ar: "التحكم في الترفيه والوسائط",
  },
  "servicesPage.home.items.7": {
    en: "Voice & Mobile App Control",
    ar: "التحكم الصوتي وعبر التطبيق",
  },
  "servicesPage.home.items.8": {
    en: "Energy Management Systems",
    ar: "أنظمة إدارة الطاقة",
  },

  // ==================== ICCC PAGE ====================
  "icccPage.title": {
    en: "ICCC (Command & Control Centre) – Trinai UAE",
    ar: "مركز القيادة والتحكم – ترينآي الإمارات",
  },
  "icccPage.subtitle": {
    en: "Centralized monitoring, enhanced situational awareness, and real-time decision-making",
    ar: "مراقبة مركزية، وعي ظرفي محسن، واتخاذ قرارات في الوقت الفعلي",
  },
  "icccPage.desc": {
    en: "Trinai UAE delivers advanced Integrated Command and Control Centre (ICCC) solutions designed to centralize monitoring, enhance situational awareness, and enable real-time decision-making across critical infrastructure. Our ICCC platforms act as the digital nerve center, integrating multiple systems into a unified interface for complete operational control.",
    ar: "تقدم ترينآي الإمارات حلول مركز قيادة وتحكم متكامل متقدمة مصممة لتركيز المراقبة وتعزيز الوعي الظرفي وتمكين اتخاذ القرارات في الوقت الفعلي.",
  },
  "icccPage.features.1.title": {
    en: "Centralized Monitoring System",
    ar: "نظام المراقبة المركزي",
  },
  "icccPage.features.1.desc": {
    en: "Unified platform to monitor CCTV feeds, sensors, and multiple systems from a single control room.",
    ar: "منصة موحدة لمراقبة كاميرات المراقبة وأجهزة الاستشعار وأنظمة متعددة من غرفة تحكم واحدة.",
  },
  "icccPage.features.2.title": {
    en: "Video Management System (VMS)",
    ar: "نظام إدارة الفيديو",
  },
  "icccPage.features.2.desc": {
    en: "Advanced video management with live streaming, recording, playback, and remote access.",
    ar: "إدارة فيديو متقدمة مع البث المباشر والتسجيل والتشغيل والوصول عن بعد.",
  },
  "icccPage.features.3.title": {
    en: "AI Video Analytics",
    ar: "تحليلات الفيديو بالذكاء الاصطناعي",
  },
  "icccPage.features.3.desc": {
    en: "Intelligent analytics including intrusion detection, facial recognition, crowd monitoring, and anomaly detection.",
    ar: "تحليلات ذكية تشمل كشف التسلل والتعرف على الوجوه ومراقبة الحشود وكشف الشذوذ.",
  },
  "icccPage.features.4.title": {
    en: "Incident Management System",
    ar: "نظام إدارة الحوادث",
  },
  "icccPage.features.4.desc": {
    en: "Real-time alerts, event tracking, and quick response coordination for critical situations.",
    ar: "تنبيهات فورية وتتبع الأحداث وتنسيق الاستجابة السريعة للحالات الحرجة.",
  },
  "icccPage.features.5.title": {
    en: "Data Integration & Dashboard",
    ar: "تكامل البيانات ولوحة التحكم",
  },
  "icccPage.features.5.desc": {
    en: "Integration of multiple data sources into smart dashboards for actionable insights and decision-making.",
    ar: "دمج مصادر بيانات متعددة في لوحات تحكم ذكية لرؤى قابلة للتنفيذ واتخاذ القرارات.",
  },
  "icccPage.features.6.title": {
    en: "Cloud & On-Premise Solutions",
    ar: "حلول سحابية ومحلية",
  },
  "icccPage.features.6.desc": {
    en: "Flexible deployment based on project requirements with secure and scalable architecture.",
    ar: "نشر مرن بناءً على متطلبات المشروع مع بنية آمنة وقابلة للتطوير.",
  },
  "icccPage.applications.title": { en: "Applications", ar: "التطبيقات" },
  "icccPage.applications.items.1": {
    en: "Smart Cities & Urban Infrastructure",
    ar: "المدن الذكية والبنية التحتية الحضرية",
  },
  "icccPage.applications.items.2": {
    en: "Government & Public Safety Projects",
    ar: "مشاريع الحكومة والسلامة العامة",
  },
  "icccPage.applications.items.3": {
    en: "Transportation & Traffic Management",
    ar: "النقل وإدارة المرور",
  },
  "icccPage.applications.items.4": {
    en: "Airports, Railways & Ports",
    ar: "المطارات والسكك الحديدية والموانئ",
  },
  "icccPage.applications.items.5": {
    en: "Large Enterprises & Industrial Facilities",
    ar: "المؤسسات الكبيرة والمنشآت الصناعية",
  },

  // ==================== HOME AUTOMATION PAGE ====================
  "homeAutoPage.title": {
    en: "Home Automation in UAE",
    ar: "أتمتة المنزل في الإمارات",
  },
  "homeAutoPage.subtitle": {
    en: "Transform Your Home into a Smart, Connected Living Space",
    ar: "حوّل منزلك إلى مساحة معيشة ذكية ومتصلة",
  },
  "homeAutoPage.desc": {
    en: "Trinai UAE offers complete home automation solutions in Dubai and across the UAE, covering everything required to transform your home into a smart, secure, and fully connected living space. We provide an end-to-end automation package, where all essential smart systems are integrated into one seamless platform.",
    ar: "تقدم ترينآي الإمارات حلول أتمتة منزلية كاملة في دبي وفي جميع أنحاء الإمارات، تغطي كل ما هو مطلوب لتحويل منزلك إلى مساحة معيشة ذكية وآمنة ومتصلة بالكامل.",
  },
  "homeAutoPage.features.1.title": {
    en: "Smart Lighting Control",
    ar: "التحكم الذكي في الإضاءة",
  },
  "homeAutoPage.features.1.desc": {
    en: "Automate and control lighting based on schedules, motion, or a mobile app.",
    ar: "أتمتة والتحكم في الإضاءة بناءً على الجداول الزمنية أو الحركة أو تطبيق الهاتف.",
  },
  "homeAutoPage.features.2.title": {
    en: "Climate Control (AC Automation)",
    ar: "التحكم المناخي (أتمتة التكييف)",
  },
  "homeAutoPage.features.2.desc": {
    en: "Smart temperature management for comfort and energy efficiency.",
    ar: "إدارة ذكية لدرجة الحرارة للراحة وكفاءة الطاقة.",
  },
  "homeAutoPage.features.3.title": {
    en: "Smart Security Integration",
    ar: "تكامل الأمن الذكي",
  },
  "homeAutoPage.features.3.desc": {
    en: "CCTV, door locks, sensors, and alarms connected into one system.",
    ar: "كاميرات المراقبة وأقفال الأبواب وأجهزة الاستشعار والإنذارات متصلة في نظام واحد.",
  },
  "homeAutoPage.features.4.title": {
    en: "Smart Door Locks & Video Door Phones",
    ar: "أقفال الأبواب الذكية وهواتف الفيديو",
  },
  "homeAutoPage.features.4.desc": {
    en: "Advanced access control with remote monitoring and visitor management.",
    ar: "تحكم متقدم في الوصول مع مراقبة عن بعد وإدارة الزوار.",
  },
  "homeAutoPage.features.5.title": {
    en: "Curtain & Blind Automation",
    ar: "أتمتة الستائر والمظلات",
  },
  "homeAutoPage.features.5.desc": {
    en: "Automated curtains and blinds for convenience and luxury living.",
    ar: "ستائر ومظلات آلية للراحة والحياة الفاخرة.",
  },
  "homeAutoPage.features.6.title": {
    en: "Entertainment & Media Control",
    ar: "التحكم في الترفيه والوسائط",
  },
  "homeAutoPage.features.6.desc": {
    en: "Control TVs, speakers, and home theater systems from a single device.",
    ar: "التحكم في أجهزة التلفزيون ومكبرات الصوت وأنظمة السينما المنزلية من جهاز واحد.",
  },
  "homeAutoPage.features.7.title": {
    en: "Voice & Mobile App Control",
    ar: "التحكم الصوتي وعبر التطبيق",
  },
  "homeAutoPage.features.7.desc": {
    en: "Operate your entire home using voice assistants or a smartphone.",
    ar: "تشغيل منزلك بالكامل باستخدام مساعدين صوتيين أو هاتف ذكي.",
  },
  "homeAutoPage.features.8.title": {
    en: "Energy Management Systems",
    ar: "أنظمة إدارة الطاقة",
  },
  "homeAutoPage.features.8.desc": {
    en: "Monitor and optimize power usage for cost efficiency.",
    ar: "مراقبة وتحسين استهلاك الطاقة لكفاءة التكلفة.",
  },
  "homeAutoPage.experience": {
    en: "Here you can experience the future of smart living.",
    ar: "هنا يمكنك تجربة مستقبل الحياة الذكية.",
  },

  // ==================== ELV PAGE ====================
  "elvPage.title": {
    en: "ELV Solutions in UAE",
    ar: "حلول الجهد المنخفض في الإمارات",
  },
  "elvPage.subtitle": {
    en: "Secure, Scalable, and Intelligent Infrastructure",
    ar: "بنية تحتية آمنة وقابلة للتطوير وذكية",
  },
  "elvPage.desc": {
    en: "Trinai UAE delivers advanced ELV (Extra Low Voltage) solutions in Dubai and across the UAE, designed for secure, scalable, and intelligent infrastructure.",
    ar: "تقدم ترينآي الإمارات حلول الجهد المنخفض المتقدمة في دبي وفي جميع أنحاء الإمارات، المصممة لبنية تحتية آمنة وقابلة للتطوير وذكية.",
  },
  "elvPage.services.1.title": {
    en: "Biometric Access Control Systems",
    ar: "أنظمة التحكم بالوصول البيومتري",
  },
  "elvPage.services.1.desc": {
    en: "Secure your premises with advanced biometric solutions including fingerprint, facial recognition, and RFID-based access systems for offices, industries, and high-security areas.",
    ar: "أمّن منشآتك بحلول بيومترية متقدمة تشمل البصمة والتعرف على الوجه وأنظمة الوصول القائمة على RFID للمكاتب والصناعات والمناطق عالية الأمان.",
  },
  "elvPage.services.2.title": {
    en: "Boom Barriers & Entry Management",
    ar: "الحواجز الرافعة وإدارة الدخول",
  },
  "elvPage.services.2.desc": {
    en: "Automated boom barriers for vehicle access control in residential communities, commercial spaces, and government facilities with seamless integration to security systems.",
    ar: "حواجز رافعة آلية للتحكم في دخول المركبات في المجتمعات السكنية والمساحات التجارية والمرافق الحكومية مع تكامل سلس مع أنظمة الأمن.",
  },
  "elvPage.services.3.title": {
    en: "CCTV Surveillance Systems",
    ar: "أنظمة مراقبة الكاميرات",
  },
  "elvPage.services.3.desc": {
    en: "AI-powered CCTV surveillance solutions with real-time monitoring, video analytics, and remote access for complete security visibility across your premises.",
    ar: "حلول مراقبة كاميرات مدعومة بالذكاء الاصطناعي مع مراقبة فورية وتحليلات فيديو ووصول عن بعد لرؤية أمنية كاملة في جميع أنحاء منشآتك.",
  },
  "elvPage.services.4.title": {
    en: "Fire Alarm Systems",
    ar: "أنظمة إنذار الحريق",
  },
  "elvPage.services.4.desc": {
    en: "Reliable fire detection and alarm systems designed to ensure safety, early warning, and compliance with UAE safety standards.",
    ar: "أنظمة كشف وإنذار حريق موثوقة مصممة لضمان السلامة والإنذار المبكر والامتثال لمعايير السلامة في الإمارات.",
  },
  "elvPage.why.title": {
    en: "Why Choose Trinai for ELV in UAE?",
    ar: "لماذا تختار ترينآي لحلول الجهد المنخفض في الإمارات؟",
  },
  "elvPage.why.items.1": {
    en: "End-to-end system design & implementation",
    ar: "تصميم وتنفيذ النظام من البداية للنهاية",
  },
  "elvPage.why.items.2": {
    en: "Integration with ICCC & smart platforms",
    ar: "التكامل مع مركز القيادة والتحكم والمنصات الذكية",
  },
  "elvPage.why.items.3": {
    en: "Scalable for small to large infrastructure",
    ar: "قابل للتطوير من البنية التحتية الصغيرة إلى الكبيرة",
  },
  "elvPage.why.items.4": {
    en: "Trusted for enterprise & government projects",
    ar: "موثوق لمشاريع المؤسسات والحكومة",
  },

  // ==================== FOOTER ====================
  "footer.desc": {
    en: "Vision With Intelligence. Powered by Brihaspathi Technologies.",
    ar: "رؤية بذكاء. مدعومة من بريهاسباثي تكنولوجيز.",
  },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.services": { en: "Services", ar: "الخدمات" },
  "footer.partner": { en: "Our Partner", ar: "شريكنا" },
  "footer.partnerDesc": {
    en: "Leading Smart Home Automation UAE Partner",
    ar: "شريك أتمتة المنزل الذكي الرائد في الإمارات",
  },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.solutions": { en: "Solutions", ar: "الحلول" },
  "footer.company": { en: "Company", ar: "الشركة" },
};

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
  dir: "ltr",
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  // ✅ Toggle between English and Arabic only
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] || key,
    [lang],
  );

  // ✅ Arabic is RTL, English is LTR
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    // ✅ Set appropriate font based on language
    if (lang === "ar") {
      document.body.style.fontFamily =
        "'Noto Sans Arabic', 'Inter', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang, dir]);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
};
