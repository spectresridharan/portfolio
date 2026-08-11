import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journeyNodes = [
  { title: "C", desc: "Memory & Pointers", status: "CORE" },
  { title: "Embedded C", desc: "Registers & Bitwise", status: "CORE" },
  { title: "ARM Cortex-M", desc: "Architecture", status: "CORE" },
  { title: "Registers", desc: "Memory Mapped I/O", status: "CORE" },
  { title: "GPIO", desc: "Pin Control", status: "CORE" },
  { title: "Interrupts", desc: "NVIC & ISR", status: "CORE" },
  { title: "Timers", desc: "PWM & Delays", status: "CORE" },
  { title: "UART / SPI / I²C", desc: "Serial Comms", status: "WORKING" },
  { title: "Device Drivers", desc: "Sensor Interfaces", status: "LEARNING" },
  { title: "RTOS", desc: "Tasks & Mutexes", status: "LEARNING" },
  { title: "Embedded Systems", desc: "Full Integration", status: "TARGET" },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'CORE': return 'text-eng-accent-cyan border-eng-accent-cyan';
      case 'WORKING': return 'text-eng-accent-amber border-eng-accent-amber';
      case 'LEARNING': return 'text-eng-gray border-eng-gray';
      case 'TARGET': return 'text-eng-accent-green border-eng-accent-green';
      default: return 'text-eng-gray border-eng-gray';
    }
  };

  return (
    <section ref={sectionRef} id="journey" className="relative w-full min-h-screen bg-eng-dark py-32 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" data-cursor="FOLLOW">
            THE ROAD TO FIRMWARE
          </h2>
          <p className="text-lg md:text-xl text-eng-gray leading-relaxed font-sans max-w-2xl mx-auto">
            A deliberate progression from high-level logic down to the bare metal.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative pl-8 md:pl-0">
          
          {/* Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-eng-gray/20 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-eng-accent-cyan via-eng-accent-amber to-eng-accent-green origin-top shadow-[0_0_10px_rgba(0,240,255,0.5)]" 
            />
          </div>

          <div className="space-y-12">
            {journeyNodes.map((node, i) => (
              <motion.div 
                key={node.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`relative w-full md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  
                  {/* Node Dot */}
                  <div className={`absolute top-2 md:top-1/2 ${i % 2 === 0 ? 'left-[-32.5px] md:left-auto md:-right-[6.5px]' : 'left-[-32.5px] md:-left-[6.5px]'} -translate-y-1/2 w-3 h-3 bg-eng-dark border-2 rounded-full z-10 ${getStatusColor(node.status)}`}></div>

                  <div className={`inline-block p-4 border border-eng-gray/10 bg-[#080808] rounded-lg hover:border-eng-gray/30 transition-colors w-full group`} data-cursor="INSPECT">
                    <div className={`font-mono text-xs tracking-widest mb-2 ${getStatusColor(node.status).split(' ')[0]}`}>
                      {node.status}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-eng-light mb-1">{node.title}</h3>
                    <p className="text-sm font-mono text-eng-gray group-hover:text-eng-light transition-colors">{node.desc}</p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
