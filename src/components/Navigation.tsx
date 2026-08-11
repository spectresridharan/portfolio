import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-colors duration-300 ${
        scrolled ? 'bg-eng-dark/80 backdrop-blur-md border-b border-eng-gray/20' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter" data-cursor="HOME">
          [ S ]
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-eng-gray">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-eng-light transition-colors relative group"
            data-cursor="NAVIGATE"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-eng-accent-cyan transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 text-[10px] font-mono border border-eng-gray/30 px-3 py-1.5 rounded-full bg-eng-dark/50">
        <span className="w-1.5 h-1.5 rounded-full bg-eng-accent-green animate-pulse"></span>
        <span className="hidden sm:inline-block tracking-widest text-eng-gray">OPEN TO EMBEDDED / FIRMWARE OPPORTUNITIES</span>
        <span className="sm:hidden tracking-widest text-eng-gray">AVAILABLE</span>
      </div>
    </motion.nav>
  );
}
