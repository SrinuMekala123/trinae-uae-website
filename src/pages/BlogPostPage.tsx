// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";

// // Import local blog image
// import blogImage from "@/blogimages/Blogimage.jpg";

// // Full blog post content with bilingual support
// const blogPostContent = {
//   id: 1,
//   title: {
//     en: "Why ELV Systems Are the Foundation of Smart Buildings in Dubai",
//     ar: "لماذا تُعد أنظمة الجهد المنخفض الأساس للمباني الذكية في دبي",
//   },
//   excerpt: {
//     en: "Discover how Extra Low Voltage systems power Dubai's smart buildings with intelligent automation, security, and energy efficiency.",
//     ar: "اكتشف كيف تُشغّل أنظمة الجهد المنخفض المباني الذكية في دبي من خلال الأتمتة الذكية، والأمان، وكفاءة الطاقة.",
//   },
//   image: blogImage,
//   category: {
//     en: "ELV Solutions",
//     ar: "حلول الجهد المنخفض",
//   },
//   date: "May 18, 2026",
//   readTime: {
//     en: "8 min read",
//     ar: "8 دقائق قراءة",
//   },
//   slug: "why-elv-systems-foundation-smart-buildings-dubai",
//   content: {
//     en: `
//       <p class="text-lg text-muted-foreground mb-6">Dubai has become a global symbol of innovation, luxury, and futuristic infrastructure. From iconic skyscrapers to intelligent residential communities, the city is transforming the way people live and work through smart building technologies. Behind this transformation lies one of the most important but often overlooked elements of modern infrastructure—ELV systems.</p>

//       <p class="mb-6">ELV stands for Extra Low Voltage systems, and these are the technological backbone that powers communication, automation, safety, and connectivity in smart buildings.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Understanding ELV Systems</h2>

//       <p class="mb-6">ELV systems are low-voltage electrical networks designed to support communication and control functions within a building. Unlike traditional electrical systems that distribute power, ELV systems manage data, automation, and safety technologies.</p>

//       <p class="mb-6">These systems typically include:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>CCTV and surveillance systems</li>
//         <li>Access control and biometric security</li>
//         <li>Fire alarm and emergency systems</li>
//         <li>Structured cabling networks</li>
//         <li>Public address and intercom systems</li>
//         <li>Building Management Systems (BMS)</li>
//         <li>Smart lighting controls</li>
//         <li>Audio-visual solutions</li>
//         <li>Wi-Fi and communication infrastructure</li>
//       </ul>

//       <p class="mb-6">When integrated properly, these technologies work together to create a seamless smart building ecosystem.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Why Smart Buildings Are Growing Rapidly in Dubai</h2>

//       <p class="mb-6">Dubai is leading the Middle East in adopting smart infrastructure. Government initiatives focused on sustainability, digital transformation, and urban innovation have encouraged developers to build technologically advanced properties.</p>

//       <p class="mb-6">Modern buildings in Dubai are expected to provide:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>Intelligent automation</li>
//         <li>Advanced security</li>
//         <li>Energy efficiency</li>
//         <li>High-speed connectivity</li>
//         <li>Remote monitoring capabilities</li>
//         <li>Sustainable operations</li>
//         <li>Enhanced occupant comfort</li>
//       </ul>

//       <p class="mb-6">To achieve these standards, developers rely heavily on ELV systems. Without them, smart buildings simply cannot function effectively.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">How ELV Systems Improve Building Security</h2>

//       <p class="mb-6">Security is one of the biggest priorities for commercial and residential properties in Dubai. ELV systems play a major role in protecting buildings through integrated surveillance and access control technologies.</p>

//       <p class="mb-6">Access control systems allow only authorized individuals to enter specific areas using key cards, fingerprints, or facial recognition technology.</p>

//       <p class="mb-6">Fire alarm systems connected through ELV networks can instantly detect smoke, heat, or emergencies and activate alarms automatically.</p>

//       <p class="mb-6">By integrating all security systems into one centralized platform, property managers can monitor and control building safety more efficiently.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Energy Efficiency and Sustainability</h2>

//       <p class="mb-6">Dubai's focus on sustainability has increased the demand for energy-efficient buildings. ELV systems contribute significantly to reducing energy consumption and operational costs.</p>

//       <p class="mb-6">Intelligent HVAC controls adjust cooling and ventilation based on occupancy and temperature conditions. Building Management Systems continuously monitor energy usage and identify areas for optimization.</p>

//       <p class="mb-6">This automation helps buildings operate more efficiently while supporting Dubai's long-term environmental goals.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Centralized Building Automation</h2>

//       <p class="mb-6">One of the key advantages of ELV systems is centralized automation. Facility managers can control multiple building operations from a single dashboard or mobile application.</p>

//       <p class="mb-6">This includes:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>Lighting systems</li>
//         <li>Air conditioning and ventilation</li>
//         <li>Elevators</li>
//         <li>Security monitoring</li>
//         <li>Fire safety systems</li>
//         <li>Energy consumption tracking</li>
//         <li>Parking management systems</li>
//       </ul>

//       <p class="mb-6">Automation reduces manual work, improves operational efficiency, and minimizes downtime caused by technical failures.</p>

//       <p class="mb-6">In modern smart buildings, automation also improves response times during emergencies by allowing systems to communicate instantly with one another.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Better Communication Infrastructure</h2>

//       <p class="mb-6">Reliable communication networks are essential in modern buildings. ELV systems provide the structured cabling and network infrastructure needed for internet connectivity, telecommunication, and data transfer.</p>

//       <p class="mb-6">Businesses in Dubai depend on uninterrupted connectivity for video conferencing, cloud services, and digital operations. Residential communities also require high-speed internet and smart home connectivity.</p>

//       <p class="mb-6">A properly designed ELV infrastructure ensures smooth communication throughout the building while supporting future technology upgrades.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Enhanced Occupant Experience</h2>

//       <p class="mb-6">Smart buildings are designed not only for efficiency but also for comfort and convenience. ELV systems improve the user experience through intelligent automation and personalized controls.</p>

//       <p class="mb-6">Residents can manage lighting, temperature, entertainment systems, and security settings using smartphones or voice assistants. Office environments can automatically adjust lighting and climate settings to improve employee comfort and productivity.</p>

//       <p class="mb-6">These smart features create a more convenient and modern lifestyle for building occupants.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Scalability for Future Technologies</h2>

//       <p class="mb-6">Technology evolves rapidly, and buildings must be ready to adapt to future innovations.</p>

//       <p class="mb-6">As Dubai moves toward greater adoption of Artificial Intelligence (AI), Internet of Things (IoT), and cloud-based building management, ELV infrastructure will become even more important.</p>

//       <p class="mb-6">Buildings equipped with advanced ELV systems can easily integrate:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>Smart sensors</li>
//         <li>AI-powered monitoring</li>
//         <li>Automated maintenance systems</li>
//         <li>Intelligent parking solutions</li>
//         <li>Smart energy management tools</li>
//       </ul>

//       <p class="mb-6">This future-ready approach increases property value and long-term operational efficiency.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">ELV Systems Support Dubai's Smart City Vision</h2>

//       <p class="mb-6">Dubai's ambition to become one of the world's smartest cities depends heavily on intelligent infrastructure. ELV systems help connect buildings, services, and technologies into a unified urban ecosystem.</p>

//       <p class="mb-6">Smart buildings powered by ELV technologies contribute to:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>Reduced energy waste</li>
//         <li>Improved public safety</li>
//         <li>Faster emergency response</li>
//         <li>Better resource management</li>
//         <li>Advanced digital connectivity</li>
//         <li>Sustainable urban development</li>
//       </ul>

//       <p class="mb-6">From luxury hotels to modern office towers and smart residential communities, ELV systems are helping shape the future of Dubai's urban landscape.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Challenges in ELV Implementation</h2>

//       <p class="mb-6">Despite their advantages, ELV systems require careful planning and professional integration. Poorly designed systems can create communication issues, security vulnerabilities, and maintenance challenges.</p>

//       <p class="mb-6">Some common implementation challenges include:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
//         <li>System compatibility issues</li>
//         <li>Cybersecurity concerns</li>
//         <li>High installation costs</li>
//         <li>Complex integration processes</li>
//         <li>Need for regular maintenance</li>
//       </ul>

//       <p class="mb-6">To ensure successful implementation, developers often work with experienced ELV consultants and certified technology integrators.</p>

//       <div class="mt-12 p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20">
//         <h3 class="text-xl font-bold font-heading text-foreground mb-3">Conclusion</h3>
//         <p class="text-muted-foreground">ELV systems are the invisible foundation that makes Dubai's smart buildings possible. From enhancing security and energy efficiency to improving occupant comfort and enabling future innovations, these systems play a critical role in shaping the city's technological landscape. As Dubai continues its journey toward becoming a global smart city leader, investing in robust ELV infrastructure will remain essential for developers, property managers, and building owners.</p>
//       </div>
//     `,
//     ar: `
//       <p class="text-lg text-muted-foreground mb-6">أصبحت دبي رمزًا عالميًا للابتكار والفخامة والبنية التحتية المستقبلية. من ناطحات السحاب الشهيرة إلى المجتمعات السكنية الذكية، تُحوّل المدينة طريقة عيش الناس وعملهم من خلال تقنيات المباني الذكية. وراء هذا التحول يكمن أحد أهم عناصر البنية التحتية الحديثة التي غالبًا ما يتم تجاهلها - أنظمة الجهد المنخفض.</p>

//       <p class="mb-6">تعني اختصاراً لأنظمة الجهد المنخفض، وهي العمود الفقري التكنولوجي الذي يُشغّل الاتصالات، والأتمتة، والسلامة، والتوصيل في المباني الذكية.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">فهم أنظمة الجهد المنخفض</h2>

//       <p class="mb-6">أنظمة الجهد المنخفض هي شبكات كهربائية منخفضة الجهد مصممة لدعم وظائف الاتصال والتحكم داخل المبنى. على عكس الأنظمة الكهربائية التقليدية التي تُوزّع الطاقة، تُدير أنظمة الجهد المنخفض البيانات، والأتمتة، وتقنيات السلامة.</p>

//       <p class="mb-6">تشمل هذه الأنظمة عادةً:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>أنظمة الدوائر التلفزيونية المغلقة والمراقبة</li>
//         <li>أنظمة التحكم في الوصول والأمان البيومتري</li>
//         <li>أنظمة إنذار الحريق والطوارئ</li>
//         <li>شبكات الكابلات المنظمة</li>
//         <li>أنظمة العناوين العامة والاتصال الداخلي</li>
//         <li>أنظمة إدارة المباني</li>
//         <li>أنظمة التحكم الذكي في الإضاءة</li>
//         <li>حلول الصوت والفيديو</li>
//         <li>بنية الاتصالات والواي فاي</li>
//       </ul>

//       <p class="mb-6">عند دمجها بشكل صحيح، تعمل هذه التقنيات معًا لإنشاء نظام بيئي سلس للمباني الذكية.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">لماذا تنمو المباني الذكية بسرعة في دبي</h2>

//       <p class="mb-6">تقود دبي منطقة الشرق الأوسط في اعتماد البنية التحتية الذكية. شجعت المبادرات الحكومية التي تركز على الاستدامة، والتحول الرقمي، والابتكار الحضري المطورين على بناء عقارات متقدمة تكنولوجيًا.</p>

//       <p class="mb-6">من المتوقع أن توفر المباني الحديثة في دبي:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>أتمتة ذكية</li>
//         <li>أمان متقدم</li>
//         <li>كفاءة في استهلاك الطاقة</li>
//         <li>اتصال عالي السرعة</li>
//         <li>قدرات المراقبة عن بعد</li>
//         <li>عمليات مستدامة</li>
//         <li>راحة محسنة للمقيمين</li>
//       </ul>

//       <p class="mb-6">لتحقيق هذه المعايير، يعتمد المطورون بشكل كبير على أنظمة الجهد المنخفض. بدونها، لا يمكن للمباني الذكية أن تعمل بفعالية.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">كيف تحسّن أنظمة الجهد المنخفض أمان المباني</h2>

//       <p class="mb-6">يُعد الأمان أحد أكبر الأولويات للعقارات التجارية والسكنية في دبي. تلعب أنظمة الجهد المنخفض دورًا رئيسيًا في حماية المباني من خلال تقنيات المراقبة والتحكم في الوصول المتكاملة.</p>

//       <p class="mb-6">تسمح أنظمة التحكم في الوصول فقط للأفراد المصرح لهم بدخول مناطق محددة باستخدام بطاقات المفاتيح، أو البصمات، أو تقنية التعرف على الوجه.</p>

//       <p class="mb-6">يمكن لأنظمة إنذار الحريق المتصلة عبر شبكات الجهد المنخفض اكتشاف الدخان، أو الحرارة، أو حالات الطوارئ على الفور وتفعيل الإنذارات تلقائيًا.</p>

//       <p class="mb-6">من خلال دمج جميع أنظمة الأمان في منصة مركزية واحدة، يمكن لمديري العقارات مراقبة والتحكم في سلامة المبنى بكفاءة أكبر.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">كفاءة الطاقة والاستدامة</h2>

//       <p class="mb-6">أدى تركيز دبي على الاستدامة إلى زيادة الطلب على المباني الموفرة للطاقة. تساهم أنظمة الجهد المنخفض بشكل كبير في تقليل استهلاك الطاقة وتكاليف التشغيل.</p>

//       <p class="mb-6">تُعدّل أنظمة التكييف والتهوية الذكية التبريد والتهوية بناءً على ظروف الإشغال ودرجة الحرارة. تراقب أنظمة إدارة المباني باستمرار استهلاك الطاقة وتحدد مجالات التحسين.</p>

//       <p class="mb-6">تساعد هذه الأتمتة المباني على العمل بكفاءة أكبر مع دعم الأهداف البيئية طويلة المدى لدبي.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">أتمتة المباني المركزية</h2>

//       <p class="mb-6">إحدى المزايا الرئيسية لأنظمة الجهد المنخفض هي الأتمتة المركزية. يمكن لمديري المرافق التحكم في عمليات متعددة للمبنى من لوحة تحكم واحدة أو تطبيق جوال.</p>

//       <p class="mb-6">يشمل ذلك:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>أنظمة الإضاءة</li>
//         <li>تكييف الهواء والتهوية</li>
//         <li>المصاعد</li>
//         <li>مراقبة الأمان</li>
//         <li>أنظمة السلامة من الحرائق</li>
//         <li>تتبع استهلاك الطاقة</li>
//         <li>أنظمة إدارة مواقف السيارات</li>
//       </ul>

//       <p class="mb-6">تقلل الأتمتة من العمل اليدوي، وتحسن الكفاءة التشغيلية، وتقلل من وقت التوقف الناجم عن الأعطال الفنية.</p>

//       <p class="mb-6">في المباني الذكية الحديثة، تحسّن الأتمتة أيضًا أوقات الاستجابة أثناء حالات الطوارئ من خلال السماح للأنظمة بالتواصل فورًا مع بعضها البعض.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">بنية اتصالات أفضل</h2>

//       <p class="mb-6">تُعد شبكات الاتصالات الموثوقة ضرورية في المباني الحديثة. توفر أنظمة الجهد المنخفض الكابلات المنظمة وبنية الشبكة اللازمة لاتصال الإنترنت، والاتصالات السلكية واللاسلكية، ونقل البيانات.</p>

//       <p class="mb-6">تعتمد الشركات في دبي على الاتصال غير المنقطع لمؤتمرات الفيديو، والخدمات السحابية، والعمليات الرقمية. تتطلب المجتمعات السكنية أيضًا إنترنت عالي السرعة واتصال المنازل الذكية.</p>

//       <p class="mb-6">تضمن بنية الجهد المنخفض المصممة بشكل صحيح اتصالاً سلسًا في جميع أنحاء المبنى مع دعم ترقيات التكنولوجيا المستقبلية.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">تجربة محسّنة للمقيمين</h2>

//       <p class="mb-6">صُممت المباني الذكية ليس فقط للكفاءة ولكن أيضًا للراحة والملاءمة. تحسّن أنظمة الجهد المنخفض تجربة المستخدم من خلال الأتمتة الذكية والتحكم الشخصي.</p>

//       <p class="mb-6">يمكن للمقيمين إدارة الإضاءة، ودرجة الحرارة، وأنظمة الترفيه، وإعدادات الأمان باستخدام الهواتف الذكية أو المساعدات الصوتية. يمكن لبيئات المكاتب ضبط الإضاءة وإعدادات المناخ تلقائيًا لتحسين راحة الموظفين وإنتاجيتهم.</p>

//       <p class="mb-6">تخلق هذه الميزات الذكية أسلوب حياة أكثر ملاءمة وحداثة لمقيمي المبنى.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">قابلية التوسع للتقنيات المستقبلية</h2>

//       <p class="mb-6">تتطور التكنولوجيا بسرعة، ويجب أن تكون المباني جاهزة للتكيف مع الابتكارات المستقبلية.</p>

//       <p class="mb-6">مع تحرك دبي نحو اعتماد أكبر للذكاء الاصطناعي، وإنترنت الأشياء، وإدارة المباني القائمة على السحابة، ستصبح بنية الجهد المنخفض أكثر أهمية.</p>

//       <p class="mb-6">يمكن للمباني المجهزة بأنظمة جهد منخفض متقدمة دمج:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>أجهزة استشعار ذكية</li>
//         <li>مراقبة مدعومة بالذكاء الاصطناعي</li>
//         <li>أنظمة صيانة آلية</li>
//         <li>حلول مواقف سيارات ذكية</li>
//         <li>أدوات إدارة الطاقة الذكية</li>
//       </ul>

//       <p class="mb-6">يزيد هذا النهج الجاهز للمستقبل من قيمة العقار والكفاءة التشغيلية طويلة المدى.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">أنظمة الجهد المنخفض تدعم رؤية دبي للمدينة الذكية</h2>

//       <p class="mb-6">يعتمد طموح دبي لتصبح واحدة من أذكى مدن العالم بشكل كبير على البنية التحتية الذكية. تساعد أنظمة الجهد المنخفض في ربط المباني، والخدمات، والتقنيات في نظام بيئي حضري موحد.</p>

//       <p class="mb-6">تساهم المباني الذكية المدعومة بتقنيات الجهد المنخفض في:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>تقليل هدر الطاقة</li>
//         <li>تحسين السلامة العامة</li>
//         <li>استجابة أسرع للطوارئ</li>
//         <li>إدارة أفضل للموارد</li>
//         <li>اتصال رقمي متقدم</li>
//         <li>تطوير حضري مستدام</li>
//       </ul>

//       <p class="mb-6">من الفنادق الفاخرة إلى أبراج المكاتب الحديثة والمجتمعات السكنية الذكية، تساعد أنظمة الجهد المنخفض في تشكيل المستقبل للمشهد الحضري في دبي.</p>

//       <h2 class="text-2xl font-bold font-heading text-foreground mt-8 mb-4">تحديات تنفيذ أنظمة الجهد المنخفض</h2>

//       <p class="mb-6">على الرغم من مزاياها، تتطلب أنظمة الجهد المنخفض تخطيطًا دقيقًا وتكاملًا احترافيًا. يمكن للأنظمة المصممة بشكل سيئ أن تخلق مشاكل في الاتصال، وثغرات أمنية، وتحديات في الصيانة.</p>

//       <p class="mb-6">تشمل بعض تحديات التنفيذ الشائعة:</p>

//       <ul class="list-disc list-inside space-y-2 mb-6 mr-4">
//         <li>مشاكل توافق النظام</li>
//         <li>مخاوف الأمن السيبراني</li>
//         <li>تكاليف التركيب العالية</li>
//         <li>عمليات التكامل المعقدة</li>
//         <li>الحاجة إلى صيانة منتظمة</li>
//       </ul>

//       <p class="mb-6">لضمان التنفيذ الناجح، يعمل المطورون غالبًا مع مستشاري أنظمة جهد منخفض ذوي خبرة ومكاملين تقنيين معتمدين.</p>

//       <div class="mt-12 p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20">
//         <h3 class="text-xl font-bold font-heading text-foreground mb-3">الخلاصة</h3>
//         <p class="text-muted-foreground">أنظمة الجهد المنخفض هي الأساس غير المرئي الذي يجعل المباني الذكية في دبي ممكنة. من تعزيز الأمان وكفاءة الطاقة إلى تحسين راحة المقيمين وتمكين الابتكارات المستقبلية، تلعب هذه الأنظمة دورًا حاسمًا في تشكيل المشهد التكنولوجي للمدينة. مع استمرار دبي في رحلتها لتصبح رائدة عالمية في المدن الذكية، سيبقى الاستثمار في بنية تحتية قوية للجهد المنخفض أمرًا ضروريًا للمطورين، ومديري العقارات، ومالكي المباني.</p>
//       </div>
//     `,
//   },
// };

// // ✅ List of valid blog slugs for validation
// const VALID_BLOG_SLUGS = [
//   "why-elv-systems-foundation-smart-buildings-dubai",
//   // Add more blog slugs here as you create them
// ];

// const BlogPostPage = () => {
//   const { t, lang } = useLang();
//   const navigate = useNavigate();
//   const { slug } = useParams();

//   // ✅ Validate slug - redirect to home if invalid
//   useEffect(() => {
//     if (slug && !VALID_BLOG_SLUGS.includes(slug)) {
//       // If slug is not a valid blog post, redirect to home
//       navigate("/");
//     }
//   }, [slug, navigate]);

//   // Find the post by slug
//   const post = blogPostContent;

//   return (
//     <div
//       className="min-h-screen bg-background"
//       dir={lang === "ar" ? "rtl" : "ltr"}
//     >
//       <Navbar />

//       {/* Back Button */}
//       <div className="pt-24 pb-8 bg-background">
//         <div className="container mx-auto px-4">
//           <button
//             onClick={() => navigate("/blog")}
//             className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//           >
//             <ArrowLeft
//               size={18}
//               className={lang === "ar" ? "rotate-180" : ""}
//             />
//             {lang === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
//           </button>
//         </div>
//       </div>

//       {/* Article Header */}
//       <section className="pb-12 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
//               {post.category[lang]}
//             </span>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
//               {post.title[lang]}
//             </h1>

//             <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-gray-200">
//               <div className="flex items-center gap-2">
//                 <Calendar size={16} />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock size={16} />
//                 <span>{post.readTime[lang]}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Tag size={16} />
//                 <span>{post.category[lang]}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Image - Shows Complete Image */}
//       <section className="pb-12 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.img
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             src={post.image}
//             alt={post.title[lang]}
//             className="w-full h-auto object-contain rounded-2xl shadow-xl"
//           />
//         </div>
//       </section>

//       {/* Article Content */}
//       <article className="pb-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className={`prose prose-lg max-w-none ${
//               lang === "ar" ? "prose-ar" : ""
//             }`}
//             dangerouslySetInnerHTML={{ __html: post.content[lang] }}
//           />
//         </div>
//       </article>

//       <Footer />
//     </div>
//   );
// };

// export default BlogPostPage;

// src/pages/BlogPostPage.tsx
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Calendar, Clock, ArrowLeft, Tag, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogPostBySlug, type BlogPostWithContent } from "@/lib/strapi";

const BlogPostPage = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { slug } = useParams();

  const [post, setPost] = useState<BlogPostWithContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      navigate("/blog");
      return;
    }

    let mounted = true;

    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogPostBySlug(slug, lang);

        if (!mounted) return;

        if (data) {
          console.log("✅ Post loaded:", data.title);
          console.log("📄 Content length:", data.content?.length);
          setPost(data);
        } else {
          navigate("/blog");
        }
      } catch (err) {
        console.error("Error loading post:", err);
        navigate("/blog");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPost();
    return () => {
      mounted = false;
    };
  }, [slug, lang, navigate]);

  if (loading) {
    return (
      <div
        className="min-h-screen bg-background"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              {lang === "ar" ? "جاري تحميل المقال..." : "Loading article..."}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-background"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />

      {/* Back Button */}
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            {lang === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {post.image ? (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <Tag size={48} className="text-gray-400" />
            </div>
          )}
        </div>
      </section>

      {/* ✅ Article Content - Simplified & Bulletproof */}
      <article className="pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-foreground ${lang === "ar" ? "text-right" : "text-left"}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
