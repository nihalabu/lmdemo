import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0A0806] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="section-label">BOOK A VISIT</div>
          <div className="gold-line mt-2 mb-6" />
          <h2 className="display-title">Begin Your Transformation</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[40%_1fr] gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.p variants={fadeUp} className="text-[#9A8070] font-light leading-relaxed mb-8">
              Every great result begins with a single consultation. Reach out to us at either of our locations.
            </motion.p>

            <motion.div variants={fadeUp} className="border-l-2 border-[#C8964A] pl-4 py-3 bg-[#1A1210] mb-4 group">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-[#C8964A]" />
                <span className="font-medium text-[#F2E8DC]">Kochi</span>
              </div>
              <div className="text-sm text-[#9A8070] font-light">The Cosmetic Concierge</div>
              <div className="text-sm text-[#C8964A] mt-1">8113027027</div>
              <div className="text-xs text-[#9A8070] font-light mt-1">Kakkanad, Kochi</div>
            </motion.div>

            <motion.div variants={fadeUp} className="border-l-2 border-[#C8964A] pl-4 py-3 bg-[#1A1210] group">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-[#C8964A]" />
                <span className="font-medium text-[#F2E8DC]">Kollam</span>
              </div>
              <div className="text-sm text-[#9A8070] font-light">The Cosmetic Clinic</div>
              <div className="text-sm text-[#C8964A] mt-1">8089909301</div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[#9A8070] text-sm mt-8">
              We respond within 24 hours.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-[#1A1210] p-8 border border-[#C8964A]/20 relative min-h-[500px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  className="w-full"
                >
                  {/* Notice we use div instead of form to avoid actual submission/refresh */}
                  <div className="flex flex-col gap-6 w-full">
                    <input type="text" placeholder="Full Name *" className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] placeholder-[#9A8070]/50 focus:border-[#C8964A] outline-none transition-colors text-sm" />
                    <input type="tel" placeholder="Phone Number *" className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] placeholder-[#9A8070]/50 focus:border-[#C8964A] outline-none transition-colors text-sm" />
                    <input type="email" placeholder="Email Address" className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] placeholder-[#9A8070]/50 focus:border-[#C8964A] outline-none transition-colors text-sm" />
                    <select className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] outline-none transition-colors text-sm appearance-none cursor-pointer">
                      <option value="" disabled selected className="text-[#9A8070]/50">Service</option>
                      <option value="skin" className="bg-[#1A1210]">Skin Treatments</option>
                      <option value="laser" className="bg-[#1A1210]">Laser Therapy</option>
                      <option value="hair" className="bg-[#1A1210]">Hair Restoration</option>
                      <option value="aging" className="bg-[#1A1210]">Anti-Aging</option>
                      <option value="consultation" className="bg-[#1A1210]">Cosmetic Consultation</option>
                      <option value="aesthetic" className="bg-[#1A1210]">Aesthetic Procedures</option>
                    </select>
                    <input type="date" className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] placeholder-[#9A8070]/50 focus:border-[#C8964A] outline-none transition-colors text-sm [color-scheme:dark]" />
                    <textarea rows={4} placeholder="Message" className="border-b border-[#C8964A]/20 bg-transparent py-3 w-full text-[#F2E8DC] placeholder-[#9A8070]/50 focus:border-[#C8964A] outline-none transition-colors text-sm resize-none"></textarea>
                    <motion.button
                      onClick={handleSubmit}
                      className="bg-[#C8964A] text-[#0A0806] py-4 w-full font-medium uppercase tracking-[0.15em] text-sm mt-6 hover:bg-[#E8C070]"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                    >
                      Confirm Appointment
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center justify-center text-center w-full"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C8964A] flex items-center justify-center mb-6">
                    <Check className="text-[#C8964A] text-4xl" size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F2E8DC] mb-4">Request Received</h3>
                  <p className="text-[#F2E8DC] text-lg font-light text-center leading-relaxed">
                    Your appointment request has been received.<br />
                    We will contact you within 24 hours.
                  </p>
                  <p className="text-[#9A8070] text-sm mt-8 italic font-serif">
                    — LM Laege Mathrru
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
