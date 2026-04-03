import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  CheckCircle2,
  Lightbulb,
  Thermometer,
  Shield,
  Lock,
  Blinds,
  Tv,
  Mic,
  Battery,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scrollImages = [
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/1.jpg?updatedAt=1773119110281",
    caption:
      "Your home starts in its normal state. Curtains are closed, lights are off, and the room is calm.",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/2.jpg?updatedAt=1773119110279",
    caption: "Smart lighting adjusts to create the perfect atmosphere.",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/3.jpg?updatedAt=1773119110547",
    caption: "The moment you give a command, the curtains open automatically.",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/4.jpg?updatedAt=1773119110716",
    caption: "Smart lighting adjusts to create the perfect atmosphere.",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/5.jpg?updatedAt=1773119110787",
    caption: "Your home adjusts the temperature for maximum comfort.",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/6.jpg?updatedAt=1773119110783",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/scroll%20images/7.jpg?updatedAt=1773119110738",
    caption: "Your entertainment system responds instantly to your command.",
  },
];

const HomeAutomationPage = () => {
  const { t } = useLang();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % scrollImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Smart Lighting Control",
      desc: "Automate and control lighting based on schedules, motion, or a mobile app.",
      Icon: Lightbulb,
    },
    {
      title: "Climate Control (AC Automation)",
      desc: "Smart temperature management for comfort and energy efficiency.",
      Icon: Thermometer,
    },
    {
      title: "Smart Security Integration",
      desc: "CCTV, door locks, sensors, and alarms connected into one system.",
      Icon: Shield,
    },
    {
      title: "Smart Door Locks & Video Door Phones",
      desc: "Advanced access control with remote monitoring and visitor management.",
      Icon: Lock,
    },
    {
      title: "Curtain & Blind Automation",
      desc: "Automated curtains and blinds for convenience and luxury living.",
      Icon: Blinds,
    },
    {
      title: "Entertainment & Media Control",
      desc: "Control TVs, speakers, and home theater systems from a single device.",
      Icon: Tv,
    },
    {
      title: "Voice & Mobile App Control",
      desc: "Operate your entire home using voice assistants or a smartphone.",
      Icon: Mic,
    },
    {
      title: "Energy Management Systems",
      desc: "Monitor and optimize power usage for cost efficiency.",
      Icon: Battery,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
          >
            Home Automation in UAE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Trinai UAE offers complete home automation solutions in Dubai and
            across the UAE, covering everything required to transform your home
            into a smart, secure, and fully connected living space. We provide
            an end-to-end automation package, where all essential smart systems
            are integrated into one seamless platform.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            What We Include
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl glass group hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                  <f.Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            Here you can experience the future of smart living.
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              {scrollImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={img.src}
                    alt={`Smart Home ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-base md:text-lg">
                        {img.caption}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {scrollImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentImage ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - FIXED */}
      <section className="py-16 bg-gradient-to-r from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white mb-6"
          >
            Ready to Build a{" "}
            <span className="text-cyan-400">Smarter, Safer Future?</span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-4 rounded-2xl bg-white text-[hsl(215,55%,18%)] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
          >
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeAutomationPage;
