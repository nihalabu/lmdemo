import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import gallery1 from '../assets/gallery-1.jpeg';
import gallery2 from '../assets/gallery-2.jpeg';
import gallery3 from '../assets/gallery-3.jpeg';
import gallery4 from '../assets/gallery-4.jpeg';
import gallery5 from '../assets/gallery-5.jpeg';
import gallery6 from '../assets/gallery-6.jpeg';

interface GalleryImage {
  src: string;
  label: string;
}

const images: GalleryImage[] = [
  { src: gallery1, label: 'Skin Consultation' },
  { src: gallery2, label: 'Radiant Results' },
  { src: gallery3, label: 'Our Clinic' },
  { src: gallery4, label: 'Expert Care' },
  { src: gallery5, label: 'Patient Journey' },
  { src: gallery6, label: 'Laser Therapy' },
];

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 28, scale: 1.05 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ─── Single image card ─── */
function GalleryCard({
  src,
  label,
  className = '',
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={imageReveal}
      className={`relative overflow-hidden border border-[#C8964A]/10 group
        hover:border-[#C8964A]/50 transition-colors duration-500 ${className}`}
    >
      {/* Image */}
      <motion.img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center
          bg-gradient-to-t from-[#0A0806]/80 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          pointer-events-none"
      >
        <span
          className="text-[#C8964A] text-[10px] uppercase tracking-[0.3em]
            translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Mobile swipe hint ─── */
function SwipeHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none
        flex items-center gap-1 text-[#C8964A]/60 md:hidden"
      initial={{ opacity: 0, x: -6 }}
      animate={
        visible
          ? { opacity: [0, 1, 1, 0], x: [-6, 0, 0, 6] }
          : { opacity: 0 }
      }
      transition={
        visible
          ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0.4 }
      }
    >
      <span className="text-[9px] uppercase tracking-widest">Swipe</span>
      <ChevronRight size={14} />
    </motion.div>
  );
}

/* ─── Main Gallery component ─── */
export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-[#0F0C0A] py-32 px-6"
    >
      {/* ── Animated gold line across top ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-[#C8964A] origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="section-label justify-center">OUR WORK</div>
          <div className="gold-line mt-2 mb-6" />
          <h2 className="display-title">Results That Speak</h2>
          <p className="text-[#9A8070] text-[10px] uppercase tracking-widest mt-2">
            500+ Patients Treated · Kochi &amp; Kollam
          </p>
        </motion.div>

        {/* ── Desktop bento grid (hidden on mobile) ── */}
        <motion.div
          className="hidden md:grid gap-[8px]"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Row 1 */}
          <GalleryCard
            src={images[0].src}
            label={images[0].label}
            className="col-span-2 aspect-[16/10]"
          />
          <GalleryCard
            src={images[1].src}
            label={images[1].label}
            className="col-span-1 aspect-[4/5]"
          />

          {/* Row 2 */}
          <GalleryCard
            src={images[2].src}
            label={images[2].label}
            className="col-span-1 aspect-[4/5]"
          />
          <GalleryCard
            src={images[3].src}
            label={images[3].label}
            className="col-span-2 aspect-[16/10]"
          />

          {/* Row 3 — equal split */}
          <div className="col-span-3 grid grid-cols-2 gap-[8px]">
            <GalleryCard
              src={images[4].src}
              label={images[4].label}
              className="aspect-[16/10]"
            />
            <GalleryCard
              src={images[5].src}
              label={images[5].label}
              className="aspect-[16/10]"
            />
          </div>
        </motion.div>

        {/* ── Mobile horizontal scroll (hidden on desktop) ── */}
        <div className="relative md:hidden">
          <SwipeHint />

          <motion.div
            className="flex gap-3 overflow-x-auto pb-4
              [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch]
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {images.map((img, i) => (
              <GalleryCard
                key={i}
                src={img.src}
                label={img.label}
                className="flex-shrink-0 w-[80vw] aspect-[4/5] [scroll-snap-align:start]"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
