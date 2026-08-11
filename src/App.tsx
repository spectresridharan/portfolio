import { useEffect } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';

import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import OmniSenseSection from './sections/OmniSenseSection';
import SPISection from './sections/SPISection';
import FosseSection from './sections/FosseSection';
import JourneySection from './sections/JourneySection';
import SkillsSection from './sections/SkillsSection';
import CodingSection from './sections/CodingSection';
import AchievementsSection from './sections/AchievementsSection';
import EducationSection from './sections/EducationSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-eng-dark min-h-screen text-eng-light selection:bg-eng-accent-cyan/30 selection:text-eng-accent-cyan">
      <Cursor />
      <Navigation />
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <IntroSection />
        <OmniSenseSection />
        <SPISection />
        <FosseSection />
        <JourneySection />
        <SkillsSection />
        <CodingSection />
        <AchievementsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
