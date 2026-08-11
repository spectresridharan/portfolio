import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const labStages = [
  "DEVICE MODEL",
  "PARAMETER EXTRACTION",
  "SPICE",
  "NGSPICE",
  "VERILOG",
  "VERILATOR",
  "NGVERI"
];

const devices = ["BJT", "MOSFET", "JFET", "DIODE"];

export default function FosseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} id="experience" className="relative w-full min-h-screen bg-[#050505] py-32 overflow-hidden border-b border-eng-gray/20">
      {/* Semiconductor Lab Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-cursor="READ">
              SEMICONDUCTOR SYSTEMS <br /> & EDA
            </h2>
            <div className="flex flex-col gap-1 font-mono text-sm tracking-widest text-eng-gray border-l-2 border-eng-accent-cyan pl-4">
              <span className="text-eng-light">FOSSEE Summer Fellowship</span>
              <span>IIT Bombay</span>
              <span>May 2026 – July 2026</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            {devices.map(device => (
              <div key={device} className="w-16 h-16 rounded-full border border-eng-gray/30 flex items-center justify-center text-[10px] font-mono tracking-widest text-eng-gray hover:border-eng-accent-cyan hover:text-eng-accent-cyan transition-colors cursor-default">
                {device}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Progression */}
        <div className="relative mt-32 max-w-5xl mx-auto">
          {/* Main timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-eng-gray/20 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
            {labStages.map((stage, index) => (
              <motion.div 
                key={stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-3 h-3 rounded-full bg-eng-dark border-2 border-eng-gray/50 group-hover:border-eng-accent-cyan group-hover:bg-eng-accent-cyan/20 transition-all duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-eng-accent-cyan opacity-0 group-hover:opacity-50 blur-sm transition-opacity" />
                </div>
                
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-center text-eng-gray group-hover:text-eng-light transition-colors max-w-[100px]">
                  {stage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Focus Areas */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "OpenCores 8051", desc: "RTL architecture analysis and integration." },
            { title: "Verilog", desc: "Hardware description and logic synthesis." },
            { title: "Verilator", desc: "Fast C++ cycle-accurate simulation." },
            { title: "NgVeri", desc: "Mixed-signal co-simulation interface." }
          ].map((tech, i) => (
            <motion.div 
              key={tech.title}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className="bg-eng-dark/50 border border-eng-gray/20 p-8 rounded-lg backdrop-blur-sm hover:border-eng-accent-cyan/50 transition-colors"
            >
              <div className="text-eng-accent-cyan font-mono text-xl mb-4">{tech.title}</div>
              <p className="text-eng-gray text-sm font-sans leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
