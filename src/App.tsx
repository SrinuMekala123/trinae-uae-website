import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import { HelmetProvider } from 'react-helmet-async';
import Index from "@/pages/Index";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import ICCCPage from "@/pages/ICCCPage";
import HomeAutomationPage from "@/pages/HomeAutomationPage";
import ELVSolutionsPage from "@/pages/ELVSolutionsPage";
import AiSmartAnalyticsPage from "@/pages/AiSmartAnalyticsPage";
import SurveillanceSystemsPage from "@/pages/SurveillanceSystemsPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LangProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/iccc" element={<ICCCPage />} />
                <Route path="/home-automation" element={<HomeAutomationPage />} />
                <Route path="/elv-solutions" element={<ELVSolutionsPage />} />
                <Route path="/ai-analytics" element={<AiSmartAnalyticsPage />} />
                <Route path="/surveillance-systems" element={<SurveillanceSystemsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/:slug" element={<BlogPostPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </LangProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
