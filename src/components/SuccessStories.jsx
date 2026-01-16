'use client';

import { motion } from 'framer-motion';

const stories = [
  {
    id: "01",
    title: "Fintech Transformation",
    desc: "Redesigned operational workflow & aligned leadership roles. Result: faster decision-making & improved customer experience.",
  },
  {
    id: "02",
    title: "GIZ Collaboration Project",
    desc: "Clarified strategy and strengthened reporting systems. Improved project visibility and partnerships.",
  },
  {
    id: "03",
    title: "Leadership Development",
    desc: "Delivered training to project teams gained clarity, confidence and new collaboration methods.",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-logo text-[#0F3D35] text-5xl md:text-[4rem] leading-[1.1]">
            Success Stories: <br />
            Results We Help Unlock
          </h2>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative mt-8" // Margin top to make room for the floating number
            >
              {/* 
                 NUMBER BADGE (Floating on Top) 
                 Centered horizontally, pulled up vertically (-top-10)
              */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center z-10">
                <span className="font-sans font-bold text-[#0F3D35] text-2xl">
                  {story.id}
                </span>
              </div>

              {/* CARD CONTAINER */}
              <div className="h-full bg-gradient-to-b from-[#F3F0E7] to-white rounded-[30px] border border-[#E8E4D5] pt-16 pb-10 px-8 text-center md:text-left flex flex-col items-center md:items-start transition-shadow hover:shadow-lg">
                
                {/* Content */}
                <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-4 leading-tight">
                  {story.title}
                </h3>
                
                <p className="font-sans text-[#4A5568] leading-relaxed text-[16px]">
                  {story.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <hr className='mt-24 md:mt-52 bg-[#0F3D35] w-[80%] md:w-auto md:mx-56 mx-auto border-2 text-[#0F3D35]' />

    </section>
    
  );
}