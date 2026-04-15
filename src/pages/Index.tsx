import React, { useEffect, useState, useRef } from "react";
import ReflectApp from "../components/ReflectApp";
import { OptimizedHeader } from "../components/OptimizedHeader";
import { MouseGlow } from "../components/MouseGlow";
import { Starfield } from "../components/Starfield";
import { ScrollReveal } from "../components/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function Index() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans" style={{ userSelect: "none" }}>
      <OptimizedHeader />
      <MouseGlow />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      <main className="relative z-10 w-full overflow-x-hidden">
        <ScrollReveal delay={0.2}>
          <ReflectApp />
        </ScrollReveal>
      </main>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all shadow-xl"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm pointer-events-none" />
    </div>
  );
}
