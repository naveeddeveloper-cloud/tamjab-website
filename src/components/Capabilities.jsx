'use client';

import { motion } from 'framer-motion';

export default function Capabilities() {
  // The SVG path definition for the wave
  // Starts left, dips down (valley), goes up (peak), dips down (valley), goes right.
  const wavePath = "M0,150 C250,150 300,280 480,280 S 750,40 960,40 S 1190,280 1440,280";

  return (
    <section className="w-full bg-white py-24 overflow-hidden relative">
      <div className="max-w-svw mx-auto px-6 relative">
        
        {/* --- SECTION TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-5xl md:text-6xl text-center mb-12 md:mb-20"
        >
          Building Capabilities That Last
        </motion.h2>


        {/* =========================================================
            MOBILE LAYOUT (Vertical Stack - Visible on small screens)
           ========================================================= */}
        <div className="flex flex-col gap-10 md:hidden">
          <MobileCard 
            title="Training and Capacity Building"
            desc="Leadership skills, communication capabilities and organisational maturity programmes."
          />
          <MobileCard 
            title="Cross-Cultural Collaboration"
            desc="Connect organisations across regions. Bridge cultural differences with multi-regional coordination."
          />
          <MobileCard 
            title="Social Impact Support for NGOs and INGOs"
            desc="CSR and ESG alignment. Community programme strategy. Impact storytelling and reporting."
          />
        </div>


        {/* =========================================================
            DESKTOP LAYOUT (The Animated Wave - Visible on md+)
           ========================================================= */}
        <div className="hidden md:block relative h-[450px] w-full">
          
          {/* --- SVG WAVE BACKGROUND --- */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 350" fill="none">
            {/* 1. The Thick Light Green Track */}
            <path 
              d={wavePath} 
              stroke="#E8F0EE" 
              strokeWidth="60" 
              strokeLinecap="round"
              fill="none"
            />
            
            {/* 2. The Dotted Dark Line (Animated) */}
            <motion.path 
              d={wavePath} 
              stroke="#0F3D35" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* --- ITEM 1: TOP LEFT (Valley) --- */}
          {/* Located above the first dip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute left-[15%] top-[10%] w-[320px] text-center flex flex-col items-center"
          >
            {/* Text Content */}
            <div className="mb-4">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-2">
                Training and <br/> Capacity Building
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Leadership skills, communication capabilities and organisational maturity programmes.
              </p>
            </div>
            {/* Arrow UP from wave */}
            <Arrow direction="up" height={60} />
          </motion.div>


          {/* --- ITEM 2: BOTTOM CENTER (Peak/Middle) --- */}
          {/* Located below the middle rise (Note: In your image, the middle text is BELOW the wave) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute left-[44%] bottom-[0%] w-[320px] text-center flex flex-col items-center"
          >
            {/* Arrow DOWN from wave */}
            <Arrow direction="down" height={60} />
            {/* Text Content */}
            <div className="mt-2 ">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-2">
                Cross-Cultural <br/> Collaboration
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Connect organisations across regions. Bridge cultural differences with multi-regional coordination.
              </p>
            </div>
          </motion.div>


          {/* --- ITEM 3: TOP RIGHT (Valley) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute right-[2%] top-[4%] w-[320px] text-center flex flex-col items-center"
          >
            {/* Text Content */}
            <div className="mb-4">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-2">
                Social Impact Support <br/> for NGOs and INGOs
              </h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                CSR and ESG alignment. Community programme strategy. Impact storytelling and reporting.
              </p>
            </div>
            {/* Arrow UP from wave */}
            <Arrow direction="up" height={60} />
          </motion.div>

        </div>

      <hr className='mt-24 md:mt-52 bg-[#0F3D35] w-[80%] md:w-auto md:mx-56 mx-auto border-2 text-[#0F3D35]' />

      </div> 
    </section>
  );
}

// --- SUB-COMPONENTS ---

// Simple Arrow Component
function Arrow({ direction, height }) {
  return (
    <div className="flex flex-col items-center text-[#0F3D35]">
      {direction === 'up' ? (
        <>
          {/* Arrow Head Pointing Up */}
          {/* <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#0F3D35]" /> */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 12h20L12 2z" />
          </svg>
          {/* Line */}
          <div className="w-[1px] bg-[#0F3D35]" style={{ height: `${height}px` }}></div>
        </>
      ) : (
        <>
          {/* Line */}
          <div className="w-[1px] bg-[#0F3D35]" style={{ height: `${height}px` }}></div>
          {/* Arrow Head Pointing Down */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22L22 12H2L12 22z" />
          </svg>
        </>
      )}
    </div>
  );
}

// Mobile Card Component
function MobileCard({ title, desc }) {
  return (
    <div className="bg-[#F9F8F4] p-8 rounded-xl border border-gray-200 text-center">
      <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-3">
        {title}
      </h3>
      <p className="font-sans text-gray-600">
        {desc}
      </p>
    </div>
  );
}