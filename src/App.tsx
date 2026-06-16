import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { Vision } from "./components/sections/Vision";
import { Services } from "./components/sections/Services";
import { DiagnosticTech } from "./components/sections/DiagnosticTech";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFloat } from "./components/ui/WhatsAppFloat";
import { Compass } from "lucide-react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset preloading for premium feeling
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-[#090a0f] flex flex-col items-center justify-center gap-6 pointer-events-auto"
          >
            {/* Spinning Ring */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div 
                className="absolute inset-0 rounded-2xl border border-accent/20 animate-spin" 
                style={{ animationDuration: '3.5s' }} 
              />
              {/* Inner glowing logo core */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent2 to-accent text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,111,0,0.4)] border border-white/10 p-2.5">
                <Compass className="w-full h-full text-white" />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-display font-bold text-white tracking-[0.25em] uppercase text-[0.95rem]">
                FIX3
              </span>
              <span className="text-[0.55rem] text-accent tracking-[0.15em] uppercase font-semibold mt-1.5">
                A carregar precisão...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen bg-bg-base text-white"
        >
          <Nav />
          <main className="flex-grow">
            <Hero />
            <Vision />
            <Services />
            <DiagnosticTech />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
        </motion.div>
      )}
    </>
  );
}

export default App;
