export default function Marquee() {
  const text = "Laser Treatments · Hair Restoration · Skin Consultations · Anti-Aging · Cosmetic Procedures · 6 Departments · Kakkanad Kochi · Dr. Sruthi Bhadran · ";
  
  return (
    <div className="bg-[#C8964A] py-3 overflow-hidden flex whitespace-nowrap group">
      <div className="animate-marquee flex group-hover:[animation-play-state:paused]">
        <span className="text-[#9A8070] uppercase tracking-[0.3em] text-[11px] font-medium px-4">
          {text}
        </span>
        <span className="text-[#9A8070] uppercase tracking-[0.3em] text-[11px] font-medium px-4">
          {text}
        </span>
      </div>
      <div className="animate-marquee flex group-hover:[animation-play-state:paused] absolute top-0">
        <span className="text-[#9A8070] uppercase tracking-[0.3em] text-[11px] font-medium px-4">
          {text}
        </span>
        <span className="text-[#9A8070] uppercase tracking-[0.3em] text-[11px] font-medium px-4">
          {text}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
