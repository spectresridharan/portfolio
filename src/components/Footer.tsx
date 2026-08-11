export default function Footer() {
  return (
    <footer className="w-full bg-[#020202] py-8 border-t border-eng-gray/20">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold tracking-tighter text-eng-light">SRIDHARAN S</span>
          <span className="font-mono text-[10px] tracking-widest text-eng-gray">ECE &rarr; EMBEDDED SOFTWARE</span>
        </div>

        <div className="font-mono text-[10px] tracking-widest text-eng-gray/50 text-center md:text-right">
          BUILT WITH REACT + TYPESCRIPT + THREE.JS + GSAP <br />
          &copy; 2026 SRIDHARAN S
        </div>

      </div>
    </footer>
  );
}
