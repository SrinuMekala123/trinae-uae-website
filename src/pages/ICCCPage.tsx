import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import {
  Monitor,
  Brain,
  AlertTriangle,
  Database,
  Cloud,
  Building2,
  Shield,
  Truck,
  Plane,
  Factory,
  Video,
  Activity,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ICCCPage = () => {
  const { t } = useLang();

  const features = [
    {
      title: "Centralized Monitoring System",
      desc: "Unified platform to monitor CCTV feeds, sensors, and multiple systems from a single control room.",
      Icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Video Management System (VMS)",
      desc: "Advanced video management with live streaming, recording, playback, and remote access.",
      Icon: Video,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI Video Analytics",
      desc: "Intelligent analytics including intrusion detection, facial recognition, crowd monitoring, and anomaly detection.",
      Icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Incident Management System",
      desc: "Real-time alerts, event tracking, and quick response coordination for critical situations.",
      Icon: AlertTriangle,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Data Integration & Dashboard",
      desc: "Integration of multiple data sources into smart dashboards for actionable insights and decision-making.",
      Icon: Database,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cloud & On-Premise Solutions",
      desc: "Flexible deployment based on project requirements with secure and scalable architecture.",
      Icon: Cloud,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const applications = [
    { title: "Smart Cities & Urban Infrastructure", Icon: Building2 },
    { title: "Government & Public Safety Projects", Icon: Shield },
    { title: "Transportation & Traffic Management", Icon: Truck },
    { title: "Airports, Railways & Ports", Icon: Plane },
    { title: "Large Enterprises & Industrial Facilities", Icon: Factory },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[hsl(215,55%,18%)] to-[hsl(210,60%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white mb-6"
          >
            ICCC (Command & Control Centre) – Trinai UAE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/70 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Trinai UAE delivers advanced Integrated Command and Control Centre
            (ICCC) solutions designed to centralize monitoring, enhance
            situational awareness, and enable real-time decision-making across
            critical infrastructure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base text-white/60 max-w-3xl mx-auto"
          >
            Our ICCC platforms act as the digital nerve center, integrating
            multiple systems into a unified interface for complete operational
            control.
          </motion.p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            What We Provide
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <f.Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold font-heading text-foreground text-center mb-12"
          >
            Applications
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Icon with gradient background */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <app.Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                {/* Text */}
                <span className="text-sm font-medium text-foreground">
                  {app.title}
                </span>
              </motion.div>
            ))}
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

export default ICCCPage;
