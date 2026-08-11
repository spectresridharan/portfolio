import { motion } from 'framer-motion';

const ongoingLearning = [
  "Embedded Device Driver Development",
  "RTOS",
  "Prompt Engineering"
];

const completedLearning = [
  "Embedded Systems",
  "Data Structures using C/C++",
  "Python / Data Analysis",
  "C",
  "C++",
  "Java"
];

export default function EducationSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#020202] py-32 border-b border-eng-gray/20 flex flex-col justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12 uppercase text-eng-gray" data-cursor="READ">
              FORMAL EDUCATION
            </h2>
            
            <div className="relative pl-8 border-l border-eng-gray/20">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-eng-accent-cyan" />
              <h3 className="text-2xl font-bold text-eng-light">B.E. Electronics & Communication Engineering</h3>
              <p className="text-eng-gray text-lg mt-2">Sri Eshwar College of Engineering</p>
              
              <div className="flex gap-6 mt-6 font-mono text-sm">
                <div className="flex flex-col">
                  <span className="text-eng-gray tracking-widest text-[10px]">PERIOD</span>
                  <span className="text-eng-light">2024 &ndash; 2028</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-eng-gray tracking-widest text-[10px]">STANDING</span>
                  <span className="text-eng-light">3rd Year</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-eng-gray tracking-widest text-[10px]">CGPA</span>
                  <span className="text-eng-accent-cyan">8.68 <span className="text-[10px] text-eng-gray">(up to Sem IV)</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Leveling Up */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12 uppercase text-eng-gray" data-cursor="READ">
              CURRENTLY LEVELING UP
            </h2>
            
            <div className="space-y-8">
              
              {/* Ongoing */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-eng-accent-amber animate-pulse" />
                  <span className="font-mono text-xs tracking-widest text-eng-accent-amber">ONGOING</span>
                </div>
                <div className="flex flex-col gap-2">
                  {ongoingLearning.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border border-eng-accent-amber/30 bg-eng-accent-amber/5 px-4 py-3 rounded text-eng-light font-sans text-sm md:text-base flex justify-between items-center group hover:bg-eng-accent-amber/10 transition-colors"
                    >
                      {item}
                      <span className="font-mono text-[10px] text-eng-accent-amber opacity-0 group-hover:opacity-100 transition-opacity">BUILDING</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Completed Basics */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-eng-gray" />
                  <span className="font-mono text-xs tracking-widest text-eng-gray">COMPLETED</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {completedLearning.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="border border-eng-gray/20 bg-eng-dark px-3 py-1.5 rounded text-eng-gray font-mono text-xs hover:border-eng-gray/40 hover:text-eng-light transition-colors"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
