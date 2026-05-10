import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  return (
    <footer className="bg-[#080604] border-t border-[#C8964A]/15 pt-20 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={fadeUp} className="flex flex-col">
            <img src={logoImg} alt="LM Laege Mathrru" className="h-16 object-contain self-start" />
            <p className="text-[#9A8070] text-xs italic mt-5 font-serif">
              A Concept by Dr. Sruthi Bhadran
            </p>
            <p className="text-[#9A8070] text-xs mt-2">
              Kakkanad, Kochi, Kerala 682037
            </p>
            <a href="#" className="mt-6 text-[#9A8070] hover:text-[#C8964A] transition-colors inline-block w-fit">
              <Instagram size={20} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 md:items-center">
            {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[#9A8070] text-xs uppercase tracking-wider hover:text-[#C8964A] transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col md:items-end justify-center h-full">
            <div className="text-right">
              <span className="text-[#1A1210] text-5xl md:text-6xl lg:text-[5rem] font-serif block leading-none select-none">Beauty Meets</span>
              <span className="serif-italic !text-[#1A1210] text-5xl md:text-6xl lg:text-[5rem] block leading-none select-none">Science.</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-[#C8964A]/10 mt-16 pt-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-[#9A8070]/40 text-[10px] tracking-wider uppercase">
            © {new Date().getFullYear()} LM – Laege Mathrru. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
