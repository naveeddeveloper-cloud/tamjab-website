'use client';

import { motion } from 'framer-motion';

// --- ICONS (Custom SVGs to match the line-art style) ---
const IconHands = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" opacity="0.1" /> 
    {/* Abstract representation of hands joining */}
    <path d="M7 11v-4a2 2 0 0 1 4 0v4" />
    <path d="M17 11v-4a2 2 0 0 0 -4 0v4" />
    <path d="M7 11h10" />
    <path d="M7 11v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-6" />
  </svg>
);

const IconTarget = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M22 2l-6 6" />
  </svg>
);

const IconChart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="14" width="4" height="7" rx="1" />
    <rect x="10" y="10" width="4" height="11" rx="1" />
    <rect x="17" y="6" width="4" height="15" rx="1" />
    <path d="M3 10l5 -5l4 4l7 -7" />
    <path d="M19 2v4h-4" />
  </svg>
);

const cards = [
  {
    title: "Joint Innovation",
    text: "We don’t just deliver transformations we co-create them, working hand-in-hand with your team to integrate diverse perspectives and foster shared ownership.",
    icon: <IconHands />,
  },
  {
    title: "Tailored Impact",
    text: "We craft tailored solutions rooted in your unique reality, powered by multidisciplinary expertise, ensuring every strategy is relevant, actionable, and impactful.",
    icon: <IconTarget />,
  },
  {
    title: "Carried Forward",
    text: "Through genuine collaboration, from vision to execution, we unlock meaningful progress and empower your team to confidently carry it forward long after our engagement.",
    icon: <IconChart />,
  },
];

export default function Approach() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- SECTION TITLE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-logo text-[#0F3D35] text-6xl md:text-7xl">
            Our Approach
          </h2>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }} // Smooth lift on hover
              className="relative group"
            >
              {/* 
                 The "Tab" Shadow Effect on the left
                 (The darker bar sticking out from behind)
              */}
              <div className="absolute top-6 -left-3 w-full h-[85%] bg-[#A39261] rounded-2xl -z-10  transition-all" />

              {/* Main Card Container */}
              <div className="h-full bg-gradient-to-b from-[#F3F0E7] to-white border border-[#dcd9ce] rounded-[30px] p-8 md:p-10 flex flex-col items-start shadow-md transition-all ">
                
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border border-gray-400/50 flex items-center justify-center text-[#0F3D35] mb-8 bg-transparent">
                   {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-4 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[#2D3748] text-[16px] leading-relaxed">
                  {card.text}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}