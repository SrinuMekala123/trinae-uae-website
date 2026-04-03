import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { DotGrid } from "./VectorBackground";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ContactSection = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary/40 focus:bg-white focus:shadow-[0_0_0_3px_hsl(210_100%_42%/0.08)] transition-all duration-300";

  const contactInfo = [
    { icon: Phone, title: t("contact.phoneLabel"), detail: "+971 XX XXX XXXX", color: "from-primary to-cyan" },
    { icon: Mail, title: t("contact.emailLabel"), detail: "info@trinai.com", color: "from-cyan to-primary" },
    { icon: MapPin, title: t("contact.locationLabel"), detail: t("contact.locationVal"), color: "from-primary to-cyan" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden section-alt">
      <DotGrid className="top-0 start-0 w-[300px] h-[300px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("contact.label")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-foreground">
            {t("contact.title1")}{" "}<span className="text-gradient">{t("contact.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-3 bg-white/90 backdrop-blur-md border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl p-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-cyan"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              style={{ transformOrigin: "left" }}
            />
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">{t("contact.formTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t("contact.formDesc")}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input name="name" value={formData.name} onChange={handleChange} placeholder={t("contact.name")} className={inputClasses} />
              <input name="email" value={formData.email} onChange={handleChange} placeholder={t("contact.email")} className={inputClasses} />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder={t("contact.phone")} className={inputClasses} />
              <input name="subject" value={formData.subject} onChange={handleChange} placeholder={t("contact.subject")} className={inputClasses} />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t("contact.message")} rows={4} className={`${inputClasses} resize-none mb-6`} />

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 12px 35px hsl(210 100% 42% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl btn-gradient text-white font-semibold text-sm shadow-[0_6px_20px_hsl(210_100%_42%/0.2)]"
            >
              <Send size={16} /> {t("contact.send")}
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, ease }}
                className="group"
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_hsl(210_60%_50%/0.12)] rounded-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_16px_hsl(210_100%_42%/0.2)]`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{info.title}</div>
                    <div className="text-xs text-muted-foreground">{info.detail}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
