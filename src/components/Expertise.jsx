'use client';

import { motion } from 'framer-motion';

// --- CUSTOM ICONS (Matching the thin-line style) ---
const IconPeople = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconEco = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="12" y1="19" x2="12" y2="21" />
    <path d="M20 21a2 2 0 0 0 2-2v-2" />
    <path d="M4 21a2 2 0 0 1-2-2v-2" />
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
  </svg>
);

const IconChat = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="13" y2="13" />
  </svg>
);

const expertiseItems = [
  {
    title: "People and Organisation",
    desc: "Leadership, culture and organisational structure. Teams collaborate with clarity and purpose.",
    icon: <IconPeople />,
  },
  {
    title: "Digital and Sustainability",
    desc: "Digital adoption, sustainable transformation and responsible growth for long-term performance.",
    icon: <IconEco />,
  },
  {
    title: "Communications",
    desc: "Communication systems that strengthen leadership and elevate external reputation.",
    icon: <IconChat />,
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-[#F9F8F4] py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* --- TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-5xl md:text-6xl text-center mb-24"
        >
          Our Expertise in Action
        </motion.h2>

        {/* --- CARDS STACK --- */}
        <div className="w-full flex flex-col items-center gap-12 relative">
          
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative w-full md:w-[600px]"
            >
              {/* 
                 VERTICAL DOTTED LINES
                 Only show lines connecting top-to-middle and middle-to-bottom.
                 Hide for the last item.
              */}
              {index !== expertiseItems.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-[200px] flex justify-between px-16 -z-0">
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                </div>
              )}

              {/* 
                 ICON CIRCLE (Positioned on top border)
                 bg-[#F9F8F4] matches the section background to hide the border behind it.
              */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#F9F8F4] border border-[#d1d5db] flex items-center justify-center text-[#555] z-10">
                {item.icon}
              </div>

              {/* CARD CONTENT */}
              <div className="bg-white border border-[#d1d5db] rounded-xl pt-16 pb-10 px-8 text-center shadow-sm relative z-0">
                <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed text-[16px]">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}