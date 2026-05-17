import { motion, useScroll, useTransform } from "motion/react";
import { siteData, CONTACT_WHATSAPP } from "../data/content";
import { Canvas } from "@react-three/fiber";
import { ThreeHeroScene } from "../components/ThreeHeroScene";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layered depth effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image pushed deeply visually */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2500" 
          alt="Atmospheric digital interface" 
          className="w-full h-full object-cover opacity-30 transform scale-105"
        />
      </motion.div>

      {/* ThreeJS Particles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ThreeHeroScene />
        </Canvas>
      </div>

      {/* Glow Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Foreground Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 pt-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
            Digital Solutions Architecture
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] font-bold text-main mb-8 tracking-tight">
            Разрабатываем сайты <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">CRM системы</span><br className="hidden md:block" /> и веб-системы
          </h1>
          <p className="text-lg md:text-xl text-sub max-w-3xl mx-auto mb-12 leading-relaxed">
            {siteData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a 
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-navy font-bold rounded-full hover:bg-slate-200 transition-transform active:scale-95 shadow-xl"
            >
              Обсудить проект
            </a>
            
            <a 
              href="#works"
              className="px-10 py-5 bg-secondary border border-border-medium text-main font-bold rounded-full hover:bg-slate-800 transition-transform active:scale-95"
            >
              Посмотреть работы
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {siteData.hero.labels.map((label, idx) => (
              <motion.span 
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                className="px-4 py-1.5 rounded-full border border-border-medium bg-fg-subtle text-xs text-sub uppercase tracking-widest font-medium"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
