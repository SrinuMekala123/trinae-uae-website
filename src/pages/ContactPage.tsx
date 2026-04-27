import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DotGrid } from "@/components/VectorBackground";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ContactPage = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Updated validation to include phone
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed");
      }

      alert("Thank you! Your message has been sent to Info and Barsha.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeAddress =
    "Al Hebiah Fourth, Dubai Sports City, Dubai, United Arab Emirates";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <DotGrid className="top-0 right-0 w-[400px] h-[400px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6"
          >
            {t("contactPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            {t("contactPage.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted-foreground max-w-xl mx-auto"
          >
            {t("contactPage.desc")}
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="space-y-8"
            >
              {/* Office Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-foreground mb-1">
                    {t("contactPage.office.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {officeAddress}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <Mail size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-foreground mb-1">
                    {t("contactPage.email.title")}
                  </h3>
                  <a
                    href="mailto:info@trinai.ae"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {t("contactPage.email.address")}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-foreground mb-1">
                    {t("contact.phoneLabel")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    +971 55 551 7511
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 space-y-5"
            >
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone Number Field - Updated with required star */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.phone")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+971 50 123 4567"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.message")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Send Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 text-white"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t("contact.send")}
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
