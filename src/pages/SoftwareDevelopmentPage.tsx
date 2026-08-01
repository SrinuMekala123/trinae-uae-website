// import { motion } from "framer-motion";
// import { useLang } from "@/lib/i18n";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // Import images for each service section
// import customImage from "@/assets/d.png";
// import hrmsImage from "@/assets/e.png";
// import tasksImage from "@/assets/b.png";
// import anprImage from "@/assets/a.png";
// import erpImage from "@/assets/c.png";

// // Import banner image
// import bannerImage from "@/assets/software.jpeg";

// const SoftwareDevelopmentPage = () => {
//     const { lang, t } = useLang();

//     const services = [
//         {
//             title: t("softwarePage.services.hrms.title"),
//             description: t("softwarePage.services.hrms.desc"),
//             image: hrmsImage,
//         },
//         {
//             title: t("softwarePage.services.tasks.title"),
//             description: t("softwarePage.services.tasks.desc"),
//             image: tasksImage,
//         },
//         {
//             title: t("softwarePage.services.anpr.title"),
//             description: t("softwarePage.services.anpr.desc"),
//             image: anprImage,
//         },
//         {
//             title: t("softwarePage.services.erp.title"),
//             description: t("softwarePage.services.erp.desc"),
//             image: erpImage,
//         },
//         {
//             title: t("softwarePage.services.custom.title"),
//             description: t("softwarePage.services.custom.desc"),
//             image: customImage,
//         },
//     ];

//     return (
//         <div className="min-h-screen overflow-x-hidden bg-background">
//             <Navbar />

//             {/* Hero with Image Background */}
//             <section className="py-32 relative overflow-hidden">
//                 {/* Image Background */}
//                 <div className="absolute inset-0 w-full h-full">
//                     <img
//                         src={bannerImage}
//                         alt="Software Services Banner"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />
//                     {/* Dark Overlay for Text Readability & Transparent Header blending */}
//                     <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/60 to-[hsl(210,60%,22%)]/70" />
//                 </div>

//                 {/* Hero Content */}
//                 <div className="container mx-auto px-4 text-center relative z-10">
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
//                     >
//                         {t("softwarePage.hero.title")}
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
//                     >
//                         {t("softwarePage.hero.simpleDesc")}
//                     </motion.p>
//                 </div>
//             </section>

//             {/* Introduction Section */}
//             <section className="py-16 bg-background">
//                 <div className="container mx-auto px-4 max-w-4xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                             {t("softwarePage.intro.p1")}
//                         </p>
//                         <p className="text-muted-foreground leading-relaxed">
//                             {t("softwarePage.intro.p2")}
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Services Detail Section */}
//             <section className="py-20 bg-muted/30">
//                 <div className="container mx-auto px-4 max-w-6xl">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-3xl md:text-4xl font-extrabold font-heading text-foreground text-center mb-16"
//                     >
//                         {t("softwarePage.services.heading")}
//                     </motion.h2>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         {services.map((service, index) => {
//                             const isCustom = service.image === customImage;
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: false, amount: 0.15 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     className={`glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col ${isCustom ? "md:col-span-2 md:flex-row md:min-h-[350px]" : "min-h-[500px]"
//                                         } overflow-hidden group`}
//                                 >
//                                     {/* Card Image */}
//                                     <div className={`relative w-full ${isCustom ? "md:w-1/2 md:h-auto min-h-[250px] md:min-h-[350px]" : "h-64 md:h-72"
//                                         } bg-muted/30 overflow-hidden shrink-0`}>
//                                         <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300" />
//                                         <img
//                                             src={service.image}
//                                             alt={service.title}
//                                             className="absolute inset-0 w-full h-full object-contain p-4 rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
//                                         />
//                                     </div>

//                                     {/* Card Content */}
//                                     <div className={`pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0 space-y-4 ${isCustom ? "md:w-1/2" : ""
//                                         }`}>
//                                         <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
//                                             {service.title}
//                                         </h3>
//                                         <p className="text-sm text-muted-foreground leading-relaxed break-words whitespace-normal">
//                                             {service.description}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA */}
//             <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
//                 <div className="container mx-auto px-4 text-center">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
//                     >
//                         {t("cta.title1")}{" "}
//                         <span className="text-cyan-400">{t("cta.title2")}</span>
//                     </motion.h2>
//                     <motion.button
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         onClick={() => (window.location.href = "/contact")}
//                         className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
//                     >
//                         {t("cta.btn")}
//                     </motion.button>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default SoftwareDevelopmentPage;

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images for each service section
import customImage from "@/assets/d.png";
import hrmsImage from "@/assets/e.png";
import tasksImage from "@/assets/b.png";
import anprImage from "@/assets/a.png";
import erpImage from "@/assets/c.png";

// Import video instead of banner image
import softwareVideo from "@/assets/software services.mp4";

const SoftwareDevelopmentPage = () => {
    const { lang, t } = useLang();

    const services = [
        {
            title: t("softwarePage.services.hrms.title"),
            description: t("softwarePage.services.hrms.desc"),
            image: hrmsImage,
        },
        {
            title: t("softwarePage.services.tasks.title"),
            description: t("softwarePage.services.tasks.desc"),
            image: tasksImage,
        },
        {
            title: t("softwarePage.services.anpr.title"),
            description: t("softwarePage.services.anpr.desc"),
            image: anprImage,
        },
        {
            title: t("softwarePage.services.erp.title"),
            description: t("softwarePage.services.erp.desc"),
            image: erpImage,
        },
        {
            title: t("softwarePage.services.custom.title"),
            description: t("softwarePage.services.custom.desc"),
            image: customImage,
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero with Video Background */}
            <section className="py-32 relative overflow-hidden min-h-[500px] flex items-center">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={softwareVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,55%,18%)]/70 to-[hsl(210,60%,22%)]/80" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
                    >
                        {t("softwarePage.hero.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t("softwarePage.hero.simpleDesc")}
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {t("softwarePage.intro.p1")}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {t("softwarePage.intro.p2")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold font-heading text-foreground text-center mb-16"
                    >
                        {t("softwarePage.services.heading")}
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const isCustom = service.image === customImage;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.15 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`glass rounded-2xl hover:shadow-xl transition-shadow flex flex-col ${isCustom ? "md:col-span-2 md:flex-row md:min-h-[350px]" : "min-h-[500px]"
                                        } overflow-hidden group`}
                                >
                                    {/* Card Image */}
                                    <div className={`relative w-full ${isCustom ? "md:w-1/2 md:h-auto min-h-[250px] md:min-h-[350px]" : "h-64 md:h-72"
                                        } bg-muted/30 overflow-hidden shrink-0`}>
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-contain p-4 rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className={`pt-4 pb-6 px-6 flex flex-col justify-center flex-1 min-w-0 space-y-4 ${isCustom ? "md:w-1/2" : ""
                                        }`}>
                                        <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed break-words whitespace-normal">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
                    >
                        {t("cta.title1")}{" "}
                        <span className="text-cyan-400">{t("cta.title2")}</span>
                    </motion.h2>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => (window.location.href = "/contact")}
                        className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
                    >
                        {t("cta.btn")}
                    </motion.button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SoftwareDevelopmentPage;