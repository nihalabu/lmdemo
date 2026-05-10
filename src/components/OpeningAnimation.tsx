import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { useEffect, useState } from 'react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-[#0A0806] z-[9999] flex flex-col items-center justify-center"
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const } }}
        >
          <motion.img
            src={logoImg}
            alt="LM Laege Mathrru Logo"
            className="h-32 object-contain"
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }}
          />
          <motion.div
            className="tracking-[0.45em] text-[10px] text-[#C4826A] font-light mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            THE COSMETIC CONCIERGE
          </motion.div>
          <div className="h-[1px] w-40 bg-white/5 mt-10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#C8964A]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
