import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery-1.jpeg';
import gallery2 from '../assets/gallery-2.jpeg';
import gallery3 from '../assets/gallery-3.jpeg';
import gallery4 from '../assets/gallery-4.jpeg';
import gallery5 from '../assets/gallery-5.jpeg';
import gallery6 from '../assets/gallery-6.jpeg';

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  return (
    <section id="gallery" className="bg-[#0F0C0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="section-label justify-center">OUR WORK</div>
          <div className="gold-line mt-2 mb-6" />
          <h2 className="display-title">Results That Speak</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {images.map((src, i) => (
            <motion.div 
              key={i}
              variants={imageReveal}
              className={`overflow-hidden border border-[#C8964A]/10 group hover:border-[#C8964A]/40 transition-colors duration-500 ${
                i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3] mt-0 lg:mt-12'
              }`}
            >
              <motion.img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
