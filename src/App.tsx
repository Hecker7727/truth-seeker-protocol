
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageContainer from '@/components/layout/PageContainer';
import Index from "./pages/Index";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Trust from "./pages/Trust";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TransitionNano from '@/components/transitions/TransitionNano';
import { setGlobalLoader } from '@/components/LoaderOverlay';
import React, { useEffect } from 'react';

// Lazy-load heavy sections
const DramaticHero = React.lazy(() => import('@/components/hero/DramaticHero'));
const Marquee = React.lazy(() => import('@/components/sections/Marquee'));
const TiltCards = React.lazy(() => import('@/components/sections/TiltCards'));
const StickyNarrative = React.lazy(() => import('@/components/sections/StickyNarrative'));
const Portfolio = React.lazy(() => import('@/components/Portfolio'));
const WhySoulcloude = React.lazy(() => import('@/components/WhySoulcloude'));
const Testimonials = React.lazy(() => import('@/components/Testimonials'));

// Hook into route changes for progress bar indication
function useRouteProgress() {
  const location = useLocation();
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => { p = Math.min(95, p + 5); setGlobalLoader(p); }, 80);
    return () => { clearInterval(id); setGlobalLoader(100); setTimeout(() => setGlobalLoader(0), 300); };
  }, [location.pathname]);
}

const AppRoutes = () => {
  const location = useLocation();
  useRouteProgress();
  return (
    <>
      <TransitionNano routeKey={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout><PageContainer><Index /></PageContainer></Layout>} />
          <Route path="/about" element={<Layout><PageContainer><About /></PageContainer></Layout>} />
          <Route path="/learn" element={<Layout><PageContainer><Learn /></PageContainer></Layout>} />
          <Route path="/trust" element={<Layout><PageContainer><Trust /></PageContainer></Layout>} />
          <Route path="/contact" element={<Layout><PageContainer><Contact /></PageContainer></Layout>} />
          <Route path="*" element={<Layout><PageContainer><NotFound /></PageContainer></Layout>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
