import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [appReady, setAppReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {!appReady && (
        <OpeningAnimation onComplete={() => setAppReady(true)} />
      )}
      
      <div className={appReady ? '' : 'h-screen overflow-hidden'}>
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[1px] bg-[#C8964A] origin-left z-[60]"
          style={{ scaleX }}
        />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default App;
