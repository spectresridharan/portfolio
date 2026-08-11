import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pipelineStages = [
  { id: '01', title: 'ELECTRONICS' },
  { id: '02', title: 'MICROCONTROLLER' },
  { id: '03', title: 'PERIPHERALS' },
  { id: '04', title: 'DRIVERS' },
  { id: '05', title: 'PROTOCOLS' },
  { id: '06', title: 'APPLICATION' },
  { id: '07', title: 'INTELLIGENCE' },
];

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Pinning and horizontal scroll effect for pipeline
    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray('.pipeline-stage');
      
      gsap.to(stages, {
        xPercent: -100 * (stages.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (stages.length - 1),
          end: () => "+=" + (containerRef.current?.offsetWidth || 1000) * 2,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="intro" className="relative w-full bg-eng-dark z-20 pt-32 pb-24 border-b border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24 mb-32 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" data-cursor="READ">
            I LIKE KNOWING WHAT <br />
            HAPPENS <span className="text-eng-accent-amber">BELOW THE API.</span>
          </h2>
          <p className="text-lg md:text-xl text-eng-gray leading-relaxed font-sans max-w-3xl">
            My interests sit at the boundary between electronics and software — where microcontrollers, peripherals, communication protocols, sensors and low-level code come together to create real systems.
          </p>
        </motion.div>
      </div>

      {/* Hardware -> Software Pipeline visualization */}
      <div ref={containerRef} className="w-full h-screen flex flex-col justify-center overflow-hidden bg-[#020202] border-y border-eng-gray/10 relative">
        <div className="absolute top-12 left-6 md:left-16 font-mono text-xs tracking-widest text-eng-gray uppercase">
          HARDWARE &rarr; SOFTWARE PIPELINE
        </div>
        
        <div className="flex items-center w-[300vw] lg:w-[150vw] px-16 h-full">
          {pipelineStages.map((stage, index) => (
            <div key={stage.id} className="pipeline-stage flex-shrink-0 w-[50vw] lg:w-[25vw] flex items-center">
              <div className="relative group">
                <span className="font-mono text-4xl md:text-6xl text-eng-gray/20 font-bold mr-6 group-hover:text-eng-accent-cyan transition-colors">
                  {stage.id}
                </span>
                <span className="font-mono text-xl md:text-3xl text-eng-light tracking-wider" data-cursor="STAGE">
                  {stage.title}
                </span>
                
                {/* Visual Connection line */}
                {index !== pipelineStages.length - 1 && (
                  <div className="absolute right-[-25vw] lg:right-[-12.5vw] top-1/2 -translate-y-1/2 w-full h-px bg-eng-gray/20">
                    <div className="w-full h-full bg-eng-accent-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
