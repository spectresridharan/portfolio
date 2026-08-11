import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CodingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80vh] bg-[#020202] py-32 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Header & Metrics */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm tracking-widest text-eng-accent-cyan bg-eng-accent-cyan/10 px-3 py-1 rounded">
                PROGRAMMING DISCIPLINE
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-2 text-eng-light flex items-end gap-4" data-cursor="ANALYZE">
              900+
              <span className="text-2xl font-mono tracking-widest text-eng-gray uppercase pb-3">
                Problems Solved
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-eng-gray leading-relaxed font-sans max-w-md mt-6">
              Strong algorithmic foundation built through consistent practice on SkillRack and LeetCode. 
              Translating logical structures into optimized memory operations.
            </p>
          </div>

          {/* Memory / Algorithm Visualization */}
          <div className="relative w-full h-[400px] border border-eng-gray/20 bg-[#080808] rounded-lg p-8 overflow-hidden font-mono flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M 50,50 Q 150,50 150,150 T 250,250 T 350,150" 
                fill="none" 
                stroke="#00f0ff" 
                strokeWidth="2"
                style={{ pathLength }}
                className="opacity-50"
              />
            </svg>

            <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between border border-eng-gray/30 bg-eng-dark p-3 rounded"
              >
                <span className="text-xs text-eng-gray tracking-widest">ARRAY</span>
                <span className="text-eng-accent-cyan">[ 0x01, 0x02, 0x03, 0x04 ]</span>
              </motion.div>

              <div className="flex justify-center w-full">
                <div className="w-[1px] h-6 bg-eng-gray/30" />
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-between border border-eng-gray/30 bg-eng-dark p-3 rounded"
              >
                <span className="text-xs text-eng-gray tracking-widest">POINTER</span>
                <span className="text-eng-accent-amber">*ptr = 0x2000_0000</span>
              </motion.div>

              <div className="flex justify-center w-full">
                <div className="w-[1px] h-6 bg-eng-gray/30" />
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-between border border-eng-gray/30 bg-eng-dark p-3 rounded"
              >
                <span className="text-xs text-eng-gray tracking-widest">MEMORY</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-eng-accent-green/20 border border-eng-accent-green" />
                  <div className="w-4 h-4 bg-eng-accent-green/20 border border-eng-accent-green" />
                  <div className="w-4 h-4 bg-eng-gray/10 border border-eng-gray/30" />
                  <div className="w-4 h-4 bg-eng-gray/10 border border-eng-gray/30" />
                </div>
              </motion.div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
