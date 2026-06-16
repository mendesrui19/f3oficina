import { ShimmerButton } from "../ui/shimmer-button";
import { BlurIn } from "../ui/blur-in";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <header id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-bg-base">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,10,15,0.45)_0%,rgba(9,10,15,0.7)_55%,rgba(9,10,15,0.98)_100%)] z-10" />

        <video
          src="/hero_video.mp4"
          poster="/images/logo_fix3.jpg"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Oficina Fix3"
          className="w-full h-full object-cover opacity-60"
        />

        {/* Technical line grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:60px_60px] z-20" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 max-w-[1200px] w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center w-full">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="flex flex-col text-left"
          >
            {/* Status / Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/8 border border-accent/20 text-accent text-[0.7rem] font-bold tracking-widest mb-8 uppercase self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-[pingSm_1.5s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Oficina Automóvel · Salvador de Briteiros
            </motion.div>

            <BlurIn
              word="Precisão técnica."
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-white m-0 text-left font-bold"
              duration={0.8}
            />
            <BlurIn
              word="Confiança absoluta."
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] gradient-text m-0 text-left font-bold mt-1"
              duration={1}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-7 mb-10 text-[1rem] text-[#eef1f6]/60 leading-[1.85] max-w-[540px]"
            >
              Na Fix3, cuidamos do seu automóvel com rigor eletrónico e mecânico. Diagnósticos avançados, manutenção programada e reparações qualificadas em Guimarães.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <ShimmerButton
                href="#contacto"
                shimmerSize="0.1em"
                shimmerColor="#ffffff"
                shimmerDuration="2.5s"
                background="#ff6f00"
                className="text-white text-[0.75rem] font-bold uppercase tracking-widest px-8 py-4 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 shadow-[0_0_50px_rgba(255,111,0,0.35)] rounded-full border-none"
              >
                Agendar Marcação
                <svg viewBox="0 0 16 16" fill="none" className="w-[13px] h-[13px]">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ShimmerButton>
              
              <a
                href="#servicos"
                className="btn btn-ghost text-[0.72rem] tracking-wider font-bold py-3.5 px-7 rounded-full"
              >
                Nossos Serviços
              </a>
            </motion.div>

            {/* Google reviews and ratings badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/[0.07] flex-wrap items-center"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display text-[1.9rem] font-bold text-white leading-none tracking-tight">4.7</span>
                  <div className="flex gap-0.5 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-[0.68rem] text-dim uppercase tracking-wider mt-1.5 font-medium">18 Avaliações no Google Maps</span>
              </div>

              <div className="w-[1px] h-10 bg-white/[0.07] hidden sm:block" />

              <div className="flex flex-col">
                <span className="font-display text-[1.9rem] font-bold text-white leading-none tracking-tight">100%</span>
                <span className="text-[0.68rem] text-dim uppercase tracking-wider mt-1.5 font-medium">Peças Homologadas</span>
              </div>

              <div className="w-[1px] h-10 bg-white/[0.07] hidden sm:block" />

              <div className="flex flex-col">
                <span className="font-display text-[1.9rem] font-bold text-white leading-none tracking-tight">Guimarães</span>
                <span className="text-[0.68rem] text-dim uppercase tracking-wider mt-1.5 font-medium">Briteiros São Salvador</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Blueprint Visual Column (Sport Car Wireframe) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-[440px] group">
              {/* Wood theme Glow blur */}
              <div className="absolute inset-[8%] bg-gradient-to-tr from-accent/20 via-accent2/5 to-transparent blur-[50px] rounded-full group-hover:scale-110 transition-all duration-700" />
              
              <svg 
                className="w-full h-auto overflow-visible relative z-10"
                viewBox="0 0 520 460" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="car-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ff6f00"/>
                    <stop offset="1" stopColor="#9e3a00"/>
                  </linearGradient>
                  <linearGradient id="blueprint-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff"/>
                    <stop offset="1" stopColor="#ff6f00"/>
                  </linearGradient>
                </defs>

                {/* Ground Line */}
                <line className="draw-line" x1="20" y1="380" x2="500" y2="380" stroke="url(#car-line)" strokeWidth="1.5" opacity="0.6"/>
                
                {/* Car Silhouette Wireframe (Isometric / Side view projection) */}
                {/* Wheel arch back */}
                <path className="draw-line" d="M100 380 A 35 35 0 0 1 170 380" fill="none" stroke="url(#car-line)" strokeWidth="2"/>
                {/* Wheel arch front */}
                <path className="draw-line" d="M350 380 A 35 35 0 0 1 420 380" fill="none" stroke="url(#car-line)" strokeWidth="2"/>
                {/* Body Underline */}
                <line className="draw-line" x1="170" y1="380" x2="350" y2="380" stroke="url(#car-line)" strokeWidth="2"/>
                <line className="draw-line" x1="50" y1="380" x2="100" y2="380" stroke="url(#car-line)" strokeWidth="2"/>
                <line className="draw-line" x1="420" y1="380" x2="470" y2="380" stroke="url(#car-line)" strokeWidth="2"/>
                
                {/* Rear bumper / boot outline */}
                <path className="draw-line" d="M50 380 L35 355 L40 330 L70 320 L130 310" fill="none" stroke="url(#car-line)" strokeWidth="1.8"/>
                {/* Roofline / Cabin */}
                <path className="draw-line" d="M130 310 L190 230 L320 230 L370 310" fill="none" stroke="url(#car-line)" strokeWidth="2"/>
                {/* Bonnet / Front bumper */}
                <path className="draw-line" d="M370 310 L455 330 L470 355 L470 380" fill="none" stroke="url(#car-line)" strokeWidth="1.8"/>
                
                {/* Cabin details */}
                <path className="draw-line" d="M200 240 L310 240 L350 305 L150 305 Z" fill="none" stroke="url(#car-line)" strokeWidth="1.2" opacity="0.7"/>
                <line className="draw-line" x1="270" y1="240" x2="270" y2="305" stroke="url(#car-line)" strokeWidth="1" opacity="0.6"/>

                {/* Back Wheel outline */}
                <circle cx="135" cy="380" r="30" fill="none" stroke="url(#car-line)" strokeWidth="2"/>
                <circle cx="135" cy="380" r="15" fill="none" stroke="url(#car-line)" strokeWidth="1" strokeDasharray="3 3"/>
                {/* Front Wheel outline */}
                <circle cx="385" cy="380" r="30" fill="none" stroke="url(#car-line)" strokeWidth="2"/>
                <circle cx="385" cy="380" r="15" fill="none" stroke="url(#car-line)" strokeWidth="1" strokeDasharray="3 3"/>

                {/* Diagnostics sensor dots & circles */}
                <circle cx="300" cy="280" r="14" fill="none" stroke="url(#blueprint-glow)" strokeWidth="1.2" strokeDasharray="3 3"/>
                <line className="draw-line" x1="300" y1="266" x2="300" y2="180" stroke="url(#blueprint-glow)" strokeWidth="1"/>
                <text x="235" y="170" fill="#ffcca6" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1">DIAGNÓSTICO OBD2</text>

                <circle cx="385" cy="380" r="42" fill="none" stroke="url(#blueprint-glow)" strokeWidth="1.2" strokeDasharray="3 3"/>
                <line className="draw-line" x1="422" y1="360" x2="455" y2="320" stroke="url(#blueprint-glow)" strokeWidth="1"/>
                <text x="400" y="310" fill="#ffcca6" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1">ALINHAMENTO 3D</text>

                <circle cx="135" cy="315" r="12" fill="none" stroke="url(#blueprint-glow)" strokeWidth="1.2" strokeDasharray="3 3"/>
                <line className="draw-line" x1="135" y1="303" x2="135" y2="210" stroke="url(#blueprint-glow)" strokeWidth="1"/>
                <text x="80" y="200" fill="#ffcca6" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1">SISTEMA DE TRAVAGEM</text>
              </svg>
              
              <div className="absolute bottom-[-18px] right-0 text-[0.68rem] text-dim/60 italic tracking-wide">
                Diagnóstico computadorizado avançado.
              </div>

              {/* Floating location badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-bg-sec border border-white/10 rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="text-[0.6rem] text-dim uppercase tracking-widest">Contacto Directo</div>
                <div className="font-display font-bold text-white text-sm">911 771 712</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.6rem] text-dim/50 tracking-[0.2em] uppercase">Scroll</span>
        <div className="scroll-indicator w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>

      {/* Line-art drawing animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawStroke 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .draw-line:nth-child(2n) { animation-delay: 0.1s; }
        .draw-line:nth-child(3n) { animation-delay: 0.25s; }
        .draw-line:nth-child(4n) { animation-delay: 0.4s; }
        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </header>
  );
}
