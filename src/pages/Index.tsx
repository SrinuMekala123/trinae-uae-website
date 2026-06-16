// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import FeaturesSection from "@/components/FeaturesSection";
// import AboutSection from "@/components/AboutSection";
// import WhyChooseUs from "@/components/WhyChooseUs";

// import ServiceHighlights from "@/components/ServiceHighlights";
// import Certifications from "@/components/Certifications";
// import FullVideoSection from "@/components/FullVideoSection";
// import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <FeaturesSection />
//         <AboutSection />
//         <WhyChooseUs />

//         {/* <ServiceHighlights /> */}
//         <Certifications />
//         <FullVideoSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import FullVideoSection from "@/components/FullVideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "TRINAI",
        "alternateName": "Trinai AI Security & Smart Solutions",
        "description": "TRINAI - Vision With Intelligence. AI CCTV Surveillance, Home Automation, and ICCC solutions in UAE.",
        "url": "https://trinai.ae/",
        "logo": { "@type": "ImageObject", "url": "https://trinai.ae/logo-white.png", "width": 1200, "height": 630 },
        "image": "https://trinai.ae/logo-white.png",
        "sameAs": ["https://twitter.com/TrinaiUAE"],
        "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
        "address": { "@type": "PostalAddress", "addressCountry": "AE", "addressRegion": "Dubai" },
        "knowsAbout": ["AI CCTV Surveillance", "Home Automation", "ICCC Solutions", "Smart Security Systems", "Commercial CCTV Installation"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Security & Smart Solutions",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI CCTV Surveillance" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Automation" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ICCC Solutions" }}
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trinai.ae/" }]
      }
    ]
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <WhyChooseUs />
        <Certifications />
        <FullVideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
