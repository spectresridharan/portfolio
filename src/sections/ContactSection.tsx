import { useState } from 'react';


export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // Placeholder, will be updated based on resume if available

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full min-h-[70vh] bg-eng-dark py-32 flex flex-col justify-center">
      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto w-full">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-cursor="CONNECT">
            HAVE A FIRMWARE PROBLEM <br /> <span className="text-eng-gray">WORTH DEBUGGING?</span>
          </h2>
          <p className="text-lg text-eng-gray max-w-md mx-auto">
            Let's build something that talks to hardware.
          </p>
        </div>

        {/* Terminal Interface */}
        <div className="bg-[#050505] border border-eng-gray/20 rounded-lg overflow-hidden max-w-2xl mx-auto shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-eng-dark border-b border-eng-gray/20 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-eng-gray/30" />
            <div className="w-3 h-3 rounded-full bg-eng-gray/30" />
            <div className="w-3 h-3 rounded-full bg-eng-gray/30" />
            <div className="ml-4 font-mono text-[10px] text-eng-gray tracking-widest flex-1 text-center pr-12">
              sridharan@embedded-sys:~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm space-y-6">
            <div>
              <span className="text-eng-accent-cyan">$</span> connect sridharan
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-eng-gray">STATUS:</span>
                <span className="text-eng-accent-green bg-eng-accent-green/10 px-2 py-0.5 rounded text-xs animate-pulse">
                  AVAILABLE FOR EMBEDDED / FIRMWARE OPPORTUNITIES
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-eng-gray">LOCATION:</span>
                <span className="text-eng-light">India</span>
              </div>
            </div>

            <div className="pt-4 border-t border-eng-gray/10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleCopy}
                className="bg-eng-light text-eng-dark px-6 py-3 rounded hover:bg-white transition-colors font-bold text-xs tracking-widest group relative overflow-hidden"
                data-cursor="COPY"
              >
                <span className="relative z-10">{copied ? 'EMAIL COPIED!' : 'SEND MESSAGE'}</span>
                <div className="absolute inset-0 bg-eng-accent-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>

              <a 
                href="https://www.linkedin.com/in/sridharan-s-180107mdu/" 
                target="_blank" 
                rel="noreferrer"
                className="border border-eng-gray/30 px-6 py-3 rounded text-eng-light hover:border-eng-accent-cyan transition-colors text-xs tracking-widest flex items-center justify-center"
                data-cursor="OPEN"
              >
                LINKEDIN
              </a>

              <a 
                href="https://www.ewskills.com/user/shreedharan" 
                target="_blank" 
                rel="noreferrer"
                className="border border-eng-gray/30 px-6 py-3 rounded text-eng-light hover:border-eng-accent-amber transition-colors text-xs tracking-widest flex items-center justify-center"
                data-cursor="OPEN"
              >
                eWSKILLS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
