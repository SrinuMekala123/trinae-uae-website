// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import TrustedBy from "@/components/TrustedBy";
// import StatsSection from "@/components/StatsSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import ServicesSection from "@/components/ServicesSection";
// import AboutSection from "@/components/AboutSection";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import SolutionsSection from "@/components/SolutionsSection";
// import TrustedPartner from "@/components/TrustedPartner";
// import ServiceHighlights from "@/components/ServiceHighlights";
// import Certifications from "@/components/Certifications";
// import FullVideoSection from "@/components/FullVideoSection";
// import IndustriesSection from "@/components/IndustriesSection";
// import FAQSection from "@/components/FAQSection";
// import CTASection from "@/components/CTASection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <TrustedBy />
//         <StatsSection />
//         <FeaturesSection />
//         <ServicesSection />
//         <AboutSection />
//         <WhyChooseUs />
//         <SolutionsSection />
//         <TrustedPartner />
//         <ServiceHighlights />
//         <Certifications />
//         <FullVideoSection />
//         <IndustriesSection />
//         <FAQSection />
//         <CTASection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";

import ServiceHighlights from "@/components/ServiceHighlights";
import Certifications from "@/components/Certifications";
import FullVideoSection from "@/components/FullVideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <WhyChooseUs />

        {/* <ServiceHighlights /> */}
        <Certifications />
        <FullVideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
