
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
import TransitionCurtain from '@/components/transitions/TransitionCurtain';

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <TransitionCurtain routeKey={location.pathname} />
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
