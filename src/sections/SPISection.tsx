import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SPISection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // SVG Waveform Path builders
  // Clock: 50% duty cycle square wave
  const drawLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  const sclkPath = "M 0,20 L 20,20 L 20,0 L 40,0 L 40,20 L 60,20 L 60,0 L 80,0 L 80,20 L 100,20 L 100,0 L 120,0 L 120,20 L 140,20 L 140,0 L 160,0 L 160,20 L 180,20 L 180,0 L 200,0 L 200,20 L 220,20 L 220,0 L 240,0 L 240,20";
  
  // CS1: goes low for the first byte (0xAA)
  const cs1Path = "M 0,0 L 10,0 L 10,20 L 120,20 L 120,0 L 240,0";
  
  // CS2: goes low for the second byte (0xCC)
  const cs2Path = "M 0,0 L 130,0 L 130,20 L 240,20 L 240,0";

  // MOSI: 0xAA (10101010) then 0xCC (11001100)
  const mosiPath = "M 0,20 L 20,20 L 20,0 L 40,0 L 40,20 L 60,20 L 60,0 L 80,0 L 80,20 L 100,20 L 100,0 L 120,0 L 120,20 L 130,20 L 130,0 L 170,0 L 170,20 L 210,20 L 210,0 L 240,0";

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#020202] py-32 border-b border-eng-gray/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm tracking-widest text-eng-accent-amber bg-eng-accent-amber/10 px-3 py-1 rounded">
              PROTOCOL ENGINEERING
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase" data-cursor="ANALYZE">
            Multi-Slave SPI <br /> Communication
          </h2>
          <p className="text-lg md:text-xl text-eng-gray leading-relaxed font-sans max-w-2xl">
            Custom RTL implementation of a 1-Master / 2-Slave SPI (Mode 0) system in Verilog, verified through NgSpice transient simulation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Architecture Block */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border border-eng-gray/20 bg-eng-dark p-6 rounded-lg font-mono text-sm">
              <div className="text-eng-accent-cyan mb-4 pb-4 border-b border-eng-gray/20">MASTER NODE</div>
              <div className="space-y-2 text-eng-light">
                <div className="flex justify-between"><span>CLK_FREQ:</span> <span className="text-eng-gray">8 MHz</span></div>
                <div className="flex justify-between"><span>SPI_MODE:</span> <span className="text-eng-gray">0 (CPOL=0, CPHA=0)</span></div>
                <div className="flex justify-between"><span>FSM_STATE:</span> <span className="text-eng-accent-green">TRANSMITTING</span></div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pl-8 border-l-2 border-eng-gray/20 relative">
              <div className="absolute -left-[9px] top-4 w-4 h-4 bg-eng-dark border-2 border-eng-accent-cyan rounded-full" />
              <div className="border border-eng-gray/20 bg-eng-dark p-6 rounded-lg font-mono text-sm opacity-80">
                <div className="text-eng-accent-amber mb-4 pb-4 border-b border-eng-gray/20">SLAVE 1</div>
                <div className="flex justify-between text-eng-light"><span>DATA_RX:</span> <span className="text-eng-accent-green">0xAA</span></div>
              </div>

              <div className="absolute -left-[9px] bottom-12 w-4 h-4 bg-eng-dark border-2 border-eng-accent-cyan rounded-full" />
              <div className="border border-eng-gray/20 bg-eng-dark p-6 rounded-lg font-mono text-sm opacity-80">
                <div className="text-eng-accent-amber mb-4 pb-4 border-b border-eng-gray/20">SLAVE 2</div>
                <div className="flex justify-between text-eng-light"><span>DATA_RX:</span> <span className="text-eng-accent-green">0xCC</span></div>
              </div>
            </div>
          </div>

          {/* Oscilloscope View */}
          <div className="lg:col-span-8 bg-[#0a1010] border border-eng-accent-cyan/30 rounded-lg p-6 md:p-12 relative overflow-hidden flex flex-col justify-center">
            {/* O-scope Grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center'
            }} />
            
            <div className="absolute top-4 right-6 font-mono text-xs tracking-widest text-eng-accent-cyan opacity-60">
              TIME: 100ns/div | TRIG: CS1_FALL
            </div>

            <div className="relative z-10 space-y-12 py-8">
              {/* SCLK */}
              <div className="flex items-center">
                <div className="w-16 font-mono text-xs text-eng-accent-cyan">SCLK</div>
                <div className="flex-1 h-6 relative">
                  <svg viewBox="0 -5 240 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path 
                      d={sclkPath} 
                      fill="none" 
                      stroke="#00f0ff" 
                      strokeWidth="2"
                      style={{ pathLength: drawLength }}
                      className="text-glow-cyan"
                    />
                  </svg>
                </div>
              </div>

              {/* MOSI */}
              <div className="flex items-center">
                <div className="w-16 font-mono text-xs text-eng-accent-green">MOSI</div>
                <div className="flex-1 h-6 relative">
                  <svg viewBox="0 -5 240 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path 
                      d={mosiPath} 
                      fill="none" 
                      stroke="#00ff66" 
                      strokeWidth="2"
                      style={{ pathLength: drawLength }}
                      className="text-glow-green"
                    />
                  </svg>
                </div>
              </div>

              {/* CS1 */}
              <div className="flex items-center">
                <div className="w-16 font-mono text-xs text-eng-accent-amber">CS1</div>
                <div className="flex-1 h-6 relative">
                  <svg viewBox="0 -5 240 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path 
                      d={cs1Path} 
                      fill="none" 
                      stroke="#ffb800" 
                      strokeWidth="2"
                      style={{ pathLength: drawLength }}
                      className="text-glow-amber"
                    />
                  </svg>
                </div>
              </div>

              {/* CS2 */}
              <div className="flex items-center">
                <div className="w-16 font-mono text-xs text-eng-accent-amber">CS2</div>
                <div className="flex-1 h-6 relative">
                  <svg viewBox="0 -5 240 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path 
                      d={cs2Path} 
                      fill="none" 
                      stroke="#ffb800" 
                      strokeWidth="2"
                      style={{ pathLength: drawLength }}
                      className="text-glow-amber"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
