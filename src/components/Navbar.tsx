import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > 150 && latest > previous && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-[50] transition-colors duration-300 ${
          scrolled ? 'bg-[#0A0806]/90 backdrop-blur-md border-b border-[#C8964A]/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logoImg} alt="LM Laege Mathrru" className="h-16 object-contain" />
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] text-[#9A8070] hover:text-[#F2E8DC] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="border border-[#C8964A] text-[#C8964A] text-[11px] uppercase tracking-[0.15em] px-5 py-2 hover:bg-[#C8964A] hover:text-[#0A0806] transition-all">
              Book Appointment
            </button>
          </div>

          <button 
            className="md:hidden text-[#F2E8DC]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <motion.div
        className={`fixed inset-0 bg-[#0A0806] z-[60] flex flex-col p-6 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <img src={logoImg} alt="LM Laege Mathrru" className="h-16 object-contain" />
          <button onClick={() => setMobileMenuOpen(false)} className="text-[#F2E8DC]">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-6 mt-20">
          {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-serif text-[#F2E8DC]"
              initial={{ y: 20, opacity: 0 }}
              animate={mobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
