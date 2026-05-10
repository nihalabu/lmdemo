import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpeg';

export default function Hero() {
  const line1 = "Where Beauty".split(" ");
  const line2 = ["Meets", "Science"];

  return (
    <section className="min-h-[100dvh] relative overflow-hidden flex flex-col justify-center">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <img src={heroImg} alt="Hero Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-[#0A0806]/60" />
      </motion.div>



      <div className="relative z-[10] w-full max-w-7xl mx-auto px-6 text-center pt-20">
        <motion.div
          className="section-label justify-center text-[#C4826A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          THE COSMETIC CONCIERGE · KOCHI
        </motion.div>
        
        <motion.div 
          className="gold-line mx-auto my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />

        <div className="display-title flex flex-col items-center gap-2">
          <div className="flex gap-[0.2em] overflow-hidden">
            {line1.map((word, i) => (
              <motion.span
                key={i}
                className="text-[#F2E8DC] inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-[0.2em] overflow-hidden">
            {line2.map((word, i) => (
              <motion.span
                key={i}
                className={word === "Science" ? "serif-italic inline-block" : "text-[#F2E8DC] inline-block"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 + (line1.length + i) * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          className="text-[#9A8070] text-lg font-light max-w-lg mx-auto mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          A 6-department cosmetic destination by Dr. Sruthi Bhadran. Personalised skin and hair treatments in the heart of Kochi.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <motion.button
            className="bg-[#C8964A] text-[#0A0806] px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-[#E8C070] transition-colors w-full sm:w-auto"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Book a Consultation
          </motion.button>
          <motion.button
            className="border border-[#F2E8DC]/30 text-[#F2E8DC] px-8 py-4 uppercase tracking-wider text-sm hover:border-[#C8964A] hover:text-[#C8964A] transition-colors w-full sm:w-auto"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </div>


    </section>
  );
}
