import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Camera, Home, Monitor } from "lucide-react";

const services = [
  {
    title: "AI CCTV Surveillance",
    desc: "Transforming video into intelligence, our AI-powered CCTV systems deliver real-time monitoring, advanced analytics, and proactive threat detection. Designed for modern infrastructure, they ensure enhanced visibility, faster response, and stronger security across all environments.",
    Icon: Camera,
    image:
      "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/Ai%20surveillance.png?updatedAt=1771485893304",
  },
  {
    title: "Home Automation",
    desc: "Experience seamless smart living with fully integrated home automation systems. From lighting and climate control to security and energy management, everything is connected and controlled through a single intelligent platform for comfort, convenience, and efficiency.",
    Icon: Home,
    image:
      "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/home%20automation.png?updatedAt=1771485893293",
  },
  {
    title: "Integrated Command Control Centre",
    desc: "Our ICCC solutions act as a centralized hub for monitoring, analytics, and operations. By integrating multiple systems into one platform, we enable real-time insights, streamlined control, and efficient management for cities, enterprises, and critical infrastructure.",
    Icon: Monitor,
    image:
      "https://ik.imagekit.io/e7pijyscb/Trinai%20UAE/Home%20page/images%20trinai%20uae/iccc.png?updatedAt=1771485893493",
  },
];

const ServiceHighlights = () => {
  const { t } = useLang();

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
                      <s.Icon size={18} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
