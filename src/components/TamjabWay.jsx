'use client';

import { motion } from 'framer-motion';

export default function TamjabWay() {
  return (
    <section className="w-full bg-white py-16 md:py-32 px-4 overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* --- TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-4xl sm:text-5xl md:text-[4.5rem] mb-12 md:mb-20 text-center leading-tight"
        >
          The Tamjab Way
        </motion.h2>

        {/* --- STACKED CARDS CONTAINER --- */}
        {/* Added px-4 md:px-0 to ensure badges don't get cut off on mobile edges */}
        <div className="flex flex-col items-center w-full max-w-3xl relative space-y-8 md:space-y-[20px] px-2 md:px-0"> 

          {/* === CARD 01 (Dark Green, Tilted Left, Badge Left) === */}
          <motion.div 
            // Reduced initial rotation for mobile to prevent animation glitching
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }} 
            whileHover={{ rotate: 0, scale: 1.02 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full bg-[#153F39] rounded-xl p-8 md:p-12 text-center shadow-lg z-30"
          >
            {/* Badge 01 - Responsive Size & Position */}
            <div className="absolute -top-4 -left-3 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-[#F3F0E7] to-white rounded-full border border-gray-300 flex items-center justify-center text-[#153F39] font-bold text-lg md:text-xl shadow-md">
              01
            </div>
            
            <h3 className="text-white font-sans font-bold text-2xl md:text-3xl mb-3">Clarity First</h3>
            <p className="text-gray-200 font-sans text-base md:text-lg leading-relaxed">
              Connecting strategy,<br className="hidden md:block"/> culture, and leadership.
            </p>
          </motion.div>


          {/* === CARD 02 (Cream, Tilted Right, Badge Right) === */}
          <motion.div 
            initial={{ opacity: 0, x: 30, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }} 
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full bg-gradient-to-b from-[#F3F0E7] to-white rounded-xl p-8 md:p-12 text-center shadow-lg z-20"
          >
            {/* Badge 02 - Responsive Size & Position */}
            <div className="absolute -top-4 -right-3 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-[#153F39] rounded-full border border-white flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md">
              02
            </div>

            <h3 className="text-[#153F39] font-sans font-bold text-2xl md:text-3xl mb-3">People Next</h3>
            <p className="text-[#4A5568] font-sans text-base md:text-lg leading-relaxed">
              Human-centered work drives<br className="hidden md:block"/> measurable progress.
            </p>
          </motion.div>


          {/* === CARD 03 (Dark Green, Tilted Left, Badge Left) === */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1.5 }} 
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full bg-[#153F39] rounded-xl p-8 md:p-12 text-center shadow-lg z-10"
          >
            {/* Badge 03 - Responsive Size & Position */}
            <div className="absolute -top-4 -left-3 md:-top-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-[#F3F0E7] to-white rounded-full border border-gray-300 flex items-center justify-center text-[#153F39] font-bold text-lg md:text-xl shadow-md">
              03
            </div>

            <h3 className="text-white font-sans font-bold text-2xl md:text-3xl mb-3">Execution Always</h3>
            <p className="text-gray-200 font-sans text-base md:text-lg leading-relaxed">
              Building lasting solutions<br className="hidden md:block"/> with your team.
            </p>
          </motion.div>

        </div>

        {/* --- BUTTONS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
        >
          <button className="bg-[#153F39] hover:bg-[#0e2b27] text-white px-8 py-4 rounded-[4px] font-sans font-medium text-lg shadow-lg transition-all w-full sm:w-auto">
            Start Your Journey
          </button>
          <button className="bg-white border border-gray-300 text-[#153F39] hover:bg-gray-50 px-8 py-4 rounded-[4px] font-sans font-medium text-lg shadow-sm transition-all w-full sm:w-auto">
            Explore Insights
          </button>
        </motion.div>

      </div>
      
      {/* --- RESPONSIVE DIVIDER LINE --- */}
      {/* Changed absolute margins to percentage width and auto margins for centering */}
      <hr className='mt-24 md:mt-52 bg-[#0F3D35] w-[80%] md:w-auto md:mx-56 mx-auto border-2 text-[#0F3D35]' />

    </section>
  );
}