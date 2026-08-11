import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Cpu, Radio, Wrench, Code2, Microchip } from 'lucide-react';

const skillCategories = [
  {
    id: 'embedded',
    title: 'EMBEDDED SOFTWARE',
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: 'Embedded C', level: 'CORE' },
      { name: 'C', level: 'CORE' },
      { name: 'Microcontrollers', level: 'CORE' },
      { name: 'Bare-metal concepts', level: 'CORE' },
      { name: 'GPIO / Interrupts', level: 'CORE' },
      { name: 'Peripheral programming', level: 'CORE' },
      { name: 'Device drivers', level: 'LEARNING' },
      { name: 'RTOS', level: 'LEARNING' }
    ]
  },
  {
    id: 'hardware',
    title: 'HARDWARE',
    icon: <Microchip className="w-5 h-5" />,
    skills: [
      { name: 'Digital Electronics', level: 'CORE' },
      { name: 'Circuit Analysis', level: 'WORKING' },
      { name: 'Semiconductor Devices', level: 'WORKING' },
      { name: 'Sensors', level: 'CORE' },
      { name: 'Raspberry Pi', level: 'WORKING' },
      { name: 'STM32', level: 'FAMILIAR' }
    ]
  },
  {
    id: 'comms',
    title: 'COMMUNICATION',
    icon: <Radio className="w-5 h-5" />,
    skills: [
      { name: 'UART', level: 'WORKING' },
      { name: 'SPI', level: 'WORKING' },
      { name: 'I²C', level: 'WORKING' }
    ]
  },
  {
    id: 'eda',
    title: 'HDL / EDA',
    icon: <Network className="w-5 h-5" />,
    skills: [
      { name: 'Verilog', level: 'WORKING' },
      { name: 'eSim / NgSpice', level: 'WORKING' },
      { name: 'Verilator', level: 'FAMILIAR' },
      { name: 'SPICE device modelling', level: 'WORKING' }
    ]
  },
  {
    id: 'software',
    title: 'SOFTWARE',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: 'Python', level: 'WORKING' },
      { name: 'JavaScript / React', level: 'WORKING' },
      { name: 'Node.js / Express', level: 'FAMILIAR' }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: 'STM32CubeIDE', level: 'FAMILIAR' },
      { name: 'Proteus', level: 'WORKING' },
      { name: 'Wokwi / Tinkercad', level: 'WORKING' },
      { name: 'GitHub', level: 'WORKING' }
    ]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'CORE': return 'text-eng-accent-cyan bg-eng-accent-cyan/10 border-eng-accent-cyan/30';
      case 'WORKING': return 'text-eng-accent-amber bg-eng-accent-amber/10 border-eng-accent-amber/30';
      case 'FAMILIAR': return 'text-eng-light bg-eng-gray/10 border-eng-gray/30';
      case 'LEARNING': return 'text-eng-gray border-eng-gray/20 border-dashed';
      default: return 'text-eng-gray';
    }
  };

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#020202] py-32 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" data-cursor="INSPECT">
            ENGINEERING STACK
          </h2>
          <div className="flex gap-4 font-mono text-[10px] tracking-widest uppercase">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-eng-accent-cyan" /> Core</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-eng-accent-amber" /> Working</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-eng-light" /> Familiar</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-eng-gray border-dashed" /> Learning</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {skillCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-lg font-mono text-sm tracking-widest text-left transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-eng-dark border border-eng-gray/30 text-eng-light shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                    : 'text-eng-gray hover:bg-eng-dark/50 hover:text-eng-light'
                }`}
                data-cursor="SELECT"
              >
                <div className={`${activeCategory === category.id ? 'text-eng-accent-cyan' : 'text-eng-gray'}`}>
                  {category.icon}
                </div>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Map */}
          <div className="lg:col-span-8 bg-[#050505] border border-eng-gray/10 rounded-lg p-8 md:p-12 min-h-[400px] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {skillCategories.map((category) => (
                category.id === activeCategory && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full"
                  >
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div 
                          key={skill.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border min-w-[140px] ${getLevelColor(skill.level)} bg-[#080808] transition-transform hover:-translate-y-1 hover:shadow-lg`}
                        >
                          <span className="font-sans font-medium text-center">{skill.name}</span>
                          <span className="font-mono text-[9px] tracking-widest opacity-80">{skill.level}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Visual connections structure behind nodes (abstract) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
