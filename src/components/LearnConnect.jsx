'use client';

import { motion } from 'framer-motion';

const items = [
  {
    title: "Blog:",
    desc: "Insights on leadership, strategy, organisational culture and communication. Practical tools for leaders.",
  },
  {
    title: "Events:",
    desc: "Learning sessions, workshops and executive roundtables. Build stronger, aligned organisations.",
  },
  {
    title: "Insights:",
    desc: "Interviews, case reflections and sector observations. Understand complex environments faster.",
  },
];

// --- CUSTOM CHAIN LINK ICON ---
const LinkIcon = () => (
  <div className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow-sm z-20">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F3D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </div>
);

export default function LearnConnect() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-5xl md:text-[4.5rem] text-center mb-20 md:mb-28"
        >
          Learn and Connect With Us
        </motion.h2>

        {/* --- CARDS GRID --- */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0 relative">
          
          {items.map((item, index) => (
            <div key={index} className="flex-1 relative group">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full bg-gradient-to-b from-[#F3F0E7] to-white mx-4 border border-[#E8E4D5] rounded-[20px] p-8 md:p-10 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-sans font-bold text-[#0F3D35] text-3xl mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-[#4A5568] text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>

              {/* 
                 CONNECTOR ICON (Visible only between items)
                 - Desktop: Absolute right aligned, centered vertically.
                 - Mobile: Hidden (or rotate 90deg and put bottom if preferred, usually hidden for clean stack).
              */}
              {index !== items.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                   <LinkIcon />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* --- BOTTOM BUTTONS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="bg-[#153F39] hover:bg-[#0e2b27] text-white px-8 py-4 rounded-[4px] font-sans font-medium text-lg shadow-md transition-all">
            Start Your Journey
          </button>
          <button className="bg-white border border-gray-300 text-[#153F39] hover:bg-gray-50 px-8 py-4 rounded-[4px] font-sans font-medium text-lg shadow-sm transition-all">
            Explore Insights
          </button>
        </motion.div>

      </div>
    </section>
  );
}