import { motion } from 'framer-motion';

export default function Services() {
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

  const services = [
    { name: "Skin Treatments", desc: "Customised facials, peels, and skin correction for every skin type and concern." },
    { name: "Laser Therapy", desc: "Advanced laser technology for skin tone correction, rejuvenation, and precision treatment." },
    { name: "Hair Restoration", desc: "Science-backed solutions for hair fall, thinning, and scalp health restoration." },
    { name: "Anti-Aging Treatments", desc: "Non-surgical procedures to restore youthful radiance and firmness." },
    { name: "Cosmetic Consultations", desc: "Personalised skin analysis and treatment planning with Dr. Sruthi Bhadran." },
    { name: "Aesthetic Procedures", desc: "Comprehensive aesthetic treatments for face and body contouring." }
  ];

  return (
    <section id="services" className="bg-[#0A0806] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="section-label justify-center">OUR SERVICES</div>
          <div className="gold-line mt-2 mb-6" />
          <h2 className="display-title">Six Departments, One Destination</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#C8964A]/10 border border-[#C8964A]/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {services.map((service, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="bg-[#0A0806] p-8 relative overflow-hidden hover:bg-[#1A1210] transition-colors group cursor-pointer"
            >
              <div className="text-[5rem] font-serif text-[#C8964A]/10 leading-none absolute top-4 right-6 pointer-events-none">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl text-[#F2E8DC] font-light relative z-10 mt-12">
                {service.name}
              </h3>
              <p className="text-[#9A8070] text-sm font-light leading-relaxed mt-3 relative z-10">
                {service.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8964A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
