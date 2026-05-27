import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import ICCCPage from "./pages/ICCCPage";
import HomeAutomationPage from "./pages/HomeAutomationPage";
import ELVSolutionsPage from "./pages/ELVSolutionsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AiSmartAnalyticsPage from "@/pages/AiSmartAnalyticsPage";
import SurveillanceSystemsPage from "@/pages/SurveillanceSystemsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LangProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* ✅ Specific routes FIRST (before catch-all) */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/iccc" element={<ICCCPage />} />
            <Route path="/home-automation" element={<HomeAutomationPage />} />
            <Route path="/elv-solutions" element={<ELVSolutionsPage />} />
            <Route path="/ai-analytics" element={<AiSmartAnalyticsPage />} />
            <Route
              path="/surveillance-systems"
              element={<SurveillanceSystemsPage />}
            />
            <Route path="/contact" element={<ContactPage />} />

            {/* Blog listing page */}
            <Route path="/blog" element={<BlogPage />} />

            {/* ✅ Blog post route at root level - MUST BE LAST */}
            <Route path="/:slug" element={<BlogPostPage />} />

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LangProvider>
  </QueryClientProvider>
);

export default App;
