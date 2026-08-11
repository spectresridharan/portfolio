import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import MCUCore from '../components/canvas/MCUCore';

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!headingRef.current) return;
    
    // Simple GSAP intro animation for text
    gsap.fromTo(
      headingRef.current.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
    );
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24 py-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      {/* Background 3D Canvas - Revolved STM32 */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-50 pointer-events-none">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={45} />
          <PresentationControls 
            global 
            rotation={[0, 0, 0]} 
            polar={[-Math.PI / 3, Math.PI / 3]} 
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Suspense fallback={null}>
              <MCUCore />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mt-8 md:mt-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start justify-center gap-8 mix-blend-difference">
          <h1 
            ref={headingRef}
            className="text-[12vw] lg:text-[6.5rem] font-bold tracking-tighter leading-[0.85] uppercase"
            data-cursor="INSPECT"
          >
            <div className="overflow-hidden"><span className="inline-block">SRIDHARAN</span></div>
            <div className="overflow-hidden"><span className="inline-block text-eng-accent-cyan">S.</span></div>
          </h1>
          
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-3 font-mono text-[10px] md:text-sm tracking-[0.2em] text-eng-gray"
            >
              <span>ECE STUDENT</span>
              <span className="text-eng-accent-cyan">&rarr;</span>
              <span className="text-eng-light">EMBEDDED SOFTWARE / FIRMWARE</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="max-w-md text-sm md:text-base text-eng-gray leading-relaxed font-sans"
            >
              I’m a third-year Electronics & Communication Engineering student interested in embedded software, firmware development, microcontrollers, communication protocols and intelligent edge systems.
            </motion.p>
          </div>

          {/* Metrics Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-8 pt-8 mt-4 border-t border-eng-gray/20 w-full max-w-lg"
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-mono text-eng-light">900+</span>
              <span className="text-[10px] tracking-widest text-eng-gray uppercase">Coding Problems</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-mono text-eng-light">8.75</span>
              <span className="text-[10px] tracking-widest text-eng-gray uppercase">CGPA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-mono text-eng-light">2&times;</span>
              <span className="text-[10px] tracking-widest text-eng-gray uppercase">Top 50 Hackathon</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Photo */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-eng-accent-cyan/40 shadow-[0_0_40px_rgba(0,240,255,0.2),0_0_80px_rgba(0,240,255,0.1)] group"
          >
            {/* Actual photo */}
            <img
              src="/profile.jpg"
              alt="Sridharan S"
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
            />

            {/* Subtle cyan tint on hover only */}
            <div className="absolute inset-0 bg-eng-accent-cyan/0 group-hover:bg-eng-accent-cyan/5 transition-colors duration-500 pointer-events-none z-10" />

            {/* Spinning dashed ring outside */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-eng-accent-cyan/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* System Status Panel (Overlay) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden xl:flex absolute right-12 bottom-12 flex-col gap-2 font-mono text-[10px] tracking-widest z-20 bg-eng-dark/60 p-6 border border-eng-gray/20 backdrop-blur-md rounded-sm"
      >
        <div className="text-eng-gray mb-2 flex items-center justify-between">
          <span>SYSTEM STATUS</span>
          <span className="w-2 h-2 bg-eng-accent-cyan rounded-full animate-pulse"></span>
        </div>
        
        <div className="flex justify-between gap-12">
          <span className="text-eng-light">Firmware mindset</span>
          <span className="text-eng-accent-green">ACTIVE</span>
        </div>
        <div className="flex justify-between gap-12">
          <span className="text-eng-light">Embedded C</span>
          <span className="text-eng-accent-green">ACTIVE</span>
        </div>
        <div className="flex justify-between gap-12">
          <span className="text-eng-light">Hardware integration</span>
          <span className="text-eng-accent-green">ACTIVE</span>
        </div>
        <div className="flex justify-between gap-12">
          <span className="text-eng-gray">SPI / UART / I²C</span>
          <span className="text-eng-accent-amber">BUILDING</span>
        </div>
        <div className="flex justify-between gap-12">
          <span className="text-eng-gray">Device Drivers</span>
          <span className="text-eng-gray">LEARNING</span>
        </div>
        <div className="flex justify-between gap-12">
          <span className="text-eng-gray">RTOS</span>
          <span className="text-eng-gray">LEARNING</span>
        </div>
      </motion.div>
    </section>
  );
}
