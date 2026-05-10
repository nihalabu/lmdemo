import { motion } from 'framer-motion';

export default function Reviews() {
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

  const reviews = [
    "Dr. Shruti Bhadran's guidance was instrumental in addressing my skin concerns. She gave me a personalised plan that really worked. My skin has improved a lot.",
    "I have done two laser treatments, my skin tone changed completely and is glowing now. Highly professional service, staff are well experienced and make you comfortable.",
    "Dr. Sruthy and her team are not only professional but also warm and friendly. The facilities are top-notch, clean and equipped with the latest technology."
  ];

  return (
    <section id="reviews" className="bg-[#1A1210] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="section-label justify-center">WHAT THEY SAY</div>
          <div className="gold-line mt-2 mb-6" />
          <h2 className="display-title">Stories of Transformation</h2>
          <p className="text-[#9A8070] text-sm mt-4 font-light">Real experiences from our patients in Kochi</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {reviews.map((quote, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="border border-[#C8964A]/20 p-8 bg-[#0A0806] flex flex-col"
            >
              <div className="h-[2px] bg-[#C8964A] w-12 mb-6" />
              <div className="text-[#C8964A] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="italic font-serif text-lg text-[#F2E8DC] font-light leading-relaxed flex-grow">
                "{quote}"
              </p>
              <div className="border-t border-[#C8964A]/15 mt-6 pt-4">
                <span className="text-[#9A8070] text-[10px] uppercase tracking-wider">Verified Patient</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
