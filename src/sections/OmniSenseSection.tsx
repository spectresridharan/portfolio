import { useState } from 'react';
import { motion } from 'framer-motion';

const architectureNodes = [
  {
    id: 'pi',
    title: 'Raspberry Pi 4',
    subtitle: 'Edge Compute Core',
    description: 'Central processing unit running inference models and orchestrating sensors.',
    position: 'col-start-2 row-start-2',
    color: 'border-eng-accent-cyan'
  },
  {
    id: 'camera',
    title: 'Pi Camera Module',
    subtitle: 'Visual Input',
    description: 'Captures high-res visual data for initial physical analysis.',
    position: 'col-start-1 row-start-1',
    color: 'border-eng-gray'
  },
  {
    id: 'as7343',
    title: 'AS7343 Sensor',
    subtitle: 'Multispectral Sensing',
    description: '14-channel spectrometer detecting precise chemical signatures of adulterants.',
    position: 'col-start-2 row-start-1',
    color: 'border-eng-accent-amber'
  },
  {
    id: 'bme688',
    title: 'BME688 Sensor',
    subtitle: 'VOC / Gas Sensing',
    description: 'Detects volatile organic compounds and ambient air quality.',
    position: 'col-start-3 row-start-1',
    color: 'border-eng-accent-amber'
  },
  {
    id: 'firebase',
    title: 'Firebase',
    subtitle: 'Cloud Sync',
    description: 'Real-time database synchronizing local edge processing results with the cloud dashboard.',
    position: 'col-start-2 row-start-3',
    color: 'border-eng-accent-green'
  }
];

export default function OmniSenseSection() {
  const [activeNode, setActiveNode] = useState(architectureNodes[0]);

  return (
    <section id="work" className="relative w-full min-h-screen bg-eng-dark py-32 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm tracking-widest text-eng-accent-cyan bg-eng-accent-cyan/10 px-3 py-1 rounded">
              FLAGSHIP CASE STUDY
            </span>
            <span className="font-mono text-xs tracking-widest text-eng-gray border border-eng-gray/30 px-3 py-1 rounded-full">
              STATUS — ONGOING
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" data-cursor="READ">
            OMNISENSE EDGE
          </h2>
          <p className="text-xl md:text-2xl text-eng-gray leading-relaxed font-sans">
            An intelligent edge gateway for non-destructive spice adulteration screening. Integrating multi-modal sensing with local inference.
          </p>
        </div>

        {/* Interactive Architecture Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Diagram Area */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-[#050505] rounded-lg border border-eng-gray/10 p-8 grid grid-cols-3 grid-rows-3 gap-4">
            {/* Connection Lines Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Vertical lines */}
                <line x1="50%" y1="16%" x2="50%" y2="50%" stroke="#888" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="83%" stroke="#888" strokeWidth="2" strokeDasharray="4 4" />
                {/* Horizontal / diagonal lines */}
                <path d="M 16% 16% L 50% 50%" stroke="#888" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 83% 16% L 50% 50%" stroke="#888" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Nodes */}
            {architectureNodes.map((node) => (
              <div 
                key={node.id}
                className={`${node.position} flex items-center justify-center relative z-10`}
                onMouseEnter={() => setActiveNode(node)}
              >
                <div 
                  className={`
                    w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 ${node.color} 
                    bg-[#0a0a0a] flex flex-col items-center justify-center gap-2 p-2 
                    cursor-crosshair transition-all duration-300
                    ${activeNode.id === node.id ? 'scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-eng-gray/5' : 'opacity-60 hover:opacity-100 hover:scale-105'}
                  `}
                  data-cursor="INSPECT"
                >
                  <span className="font-mono text-xs tracking-wider text-center text-eng-light leading-tight">
                    {node.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="h-full flex flex-col justify-center">
            <div className="bg-[#0a0a0a] border border-eng-gray/20 rounded-lg p-8 md:p-12 relative overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 min-h-[250px]">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="inline-block px-3 py-1 border border-eng-gray/30 rounded font-mono text-xs text-eng-gray">
                    SYSTEM COMPONENT
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight text-eng-light">
                    {activeNode.title}
                  </h3>
                  
                  <div className="font-mono text-sm tracking-widest text-eng-accent-cyan uppercase">
                    {activeNode.subtitle}
                  </div>
                  
                  <p className="text-eng-gray leading-relaxed text-lg font-sans">
                    {activeNode.description}
                  </p>
                </motion.div>
              </div>

              {/* Data flow animation indicator */}
              <div className="mt-12 flex items-center gap-4 border-t border-eng-gray/10 pt-6">
                <div className="w-full h-[2px] bg-eng-gray/20 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-1/4 bg-eng-accent-cyan"
                    animate={{ left: ['-25%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                  />
                </div>
                <span className="font-mono text-[10px] whitespace-nowrap tracking-widest text-eng-gray">
                  DATA STREAM ACTIVE
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
