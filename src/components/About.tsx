import { motion } from 'framer-motion';
import { Sparkles, Zap, Stethoscope, TrendingUp } from 'lucide-react';
import aboutImg from '../assets/about.jpeg';

export default function About() {
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
    <section id="about" className="bg-[#0F0C0A] py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="h-[560px] overflow-hidden" style={{ borderRadius: '50% 50% 0 0 / 60% 60% 0 0' }}>
            <img src={aboutImg} alt="Clinic Interior" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0C0A] to-transparent pointer-events-none" />
          </div>
          
          <motion.div 
            className="absolute -bottom-6 right-6 bg-[#1A1210] border border-[#C8964A]/20 px-6 py-4"
            variants={fadeUp}
          >
            <div className="text-3xl text-[#C8964A] font-serif">6 Departments</div>
            <div className="text-[10px] uppercase tracking-widest text-[#9A8070] mt-1">All Under One Roof</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={fadeUp} className="section-label">ABOUT THE CLINIC</motion.div>
          <motion.div variants={fadeUp} className="gold-line mt-2 mb-6" />
          
          <motion.h2 variants={fadeUp} className="display-title mb-6">
            A Concept Combining Beauty and Healthcare
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-[#9A8070] font-light leading-relaxed mb-8">
            LM – Laege Mathrru is a 6 department all under one roof cosmetic destination catering to all your skin and hair concerns. Founded by Dr. Sruthi Bhadran, the clinic brings together advanced technology and personalised care in Kakkanad, Kochi.
          </motion.p>

          <motion.div variants={fadeUp} className="border-l-2 border-[#C8964A] pl-4 py-3 bg-[#1A1210] mt-6 mb-10">
            <div className="font-serif text-xl text-[#F2E8DC]">Dr. Sruthi Bhadran</div>
            <div className="text-[10px] uppercase tracking-wider text-[#9A8070] mt-1">Founder & Chief Dermatologist</div>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-2 gap-4">
            {[
              { icon: Sparkles, title: "Personalised Care", desc: "Treatment plans tailored to your unique skin type." },
              { icon: Zap, title: "Advanced Technology", desc: "Latest equipment for precision results." },
              { icon: Stethoscope, title: "Expert Consultation", desc: "Detailed skin analysis before every treatment." },
              { icon: TrendingUp, title: "Visible Results", desc: "Clinically proven outcomes our clients trust." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="border border-[#C8964A]/15 p-4 hover:border-[#C8964A]/40 transition-colors group"
              >
                <pillar.icon size={18} className="text-[#C8964A] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-[#F2E8DC] mb-1">{pillar.title}</div>
                <div className="text-xs text-[#9A8070] font-light">{pillar.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
