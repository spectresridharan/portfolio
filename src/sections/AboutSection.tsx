import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-eng-dark py-32 border-b border-eng-gray/20 flex flex-col justify-center">
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden border border-eng-gray/20 group"
          >
            {/* Color overlay to fit the dark technical theme */}
            <div className="absolute inset-0 bg-eng-accent-cyan/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
            
            <img 
              src="/profile.png" 
              alt="Sridharan S" 
              className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            
            {/* Engineering overlay decorations */}
            <div className="absolute bottom-6 right-6 z-20 font-mono text-[10px] tracking-widest text-eng-accent-cyan bg-eng-dark/80 px-3 py-1.5 rounded backdrop-blur-md border border-eng-accent-cyan/30">
              SYS.ADMIN: SRIDHARAN
            </div>
            
            {/* Crosshairs */}
            <div className="absolute top-6 left-6 w-4 h-4 border-l-2 border-t-2 border-eng-accent-cyan/50 z-20 transition-all duration-300 group-hover:border-eng-accent-cyan group-hover:scale-110" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-l-2 border-b-2 border-eng-accent-cyan/50 z-20 transition-all duration-300 group-hover:border-eng-accent-cyan group-hover:scale-110" />
            <div className="absolute top-6 right-6 w-4 h-4 border-r-2 border-t-2 border-eng-accent-cyan/50 z-20 transition-all duration-300 group-hover:border-eng-accent-cyan group-hover:scale-110" />
          </motion.div>

          {/* Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-eng-light uppercase" data-cursor="READ">
              From Circuits <br />
              <span className="text-eng-gray">To Code.</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-eng-gray font-sans leading-relaxed">
              <p>
                My engineering journey began with the physical world—understanding how electrons flow through silicon. But hardware without logic is just a rock. I learned programming to give those circuits purpose.
              </p>
              <p>
                I am deeply curious about the hardware-software interface. While others are building web abstractions, I am focused on what happens at the register level, writing the C code that makes a microcontroller talk to a sensor over SPI.
              </p>
              <p>
                I am hands-on, experiment-driven, and highly competitive. Whether I'm modeling semiconductor devices in NgSpice or writing bare-metal drivers, my goal is always the same: building real, intelligent systems from the ground up.
              </p>
            </div>
            
            <div className="pt-8 border-t border-eng-gray/20">
              <div className="font-mono text-xs tracking-widest text-eng-light flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-eng-accent-green animate-pulse shadow-[0_0_10px_rgba(0,255,102,0.5)]" />
                BUILDING EMBEDDED SYSTEMS
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
