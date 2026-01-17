'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Capabilities() {
  // SVG Path: Valley (Low) -> Peak (High) -> Valley (Low)
  // This path creates the specific sine wave shape from your image
  const wavePath = "M0,150 C250,150 300,280 480,280 S 750,40 960,40 S 1190,280 1440,280";

  return (
    <section className="w-full bg-[#F7F7F7] py-24 overflow-hidden relative">
      
      {/* --- BACKGROUND PATTERN IMAGE --- */}
      {/* Ensure you have 'pattern.png' in your public folder */}
      <div className="absolute inset-0 z-0  pointer-events-none">
         <Image 
           src="/pattern.jpeg" 
           alt="Background Pattern" 
           fill 
           className="object-contain"
         />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* --- SECTION TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-5xl md:text-[4.5rem] text-center mb-16 md:mb-24"
        >
          Building Capabilities That Last
        </motion.h2>


        {/* =========================================================
            MOBILE LAYOUT (Vertical Stack)
           ========================================================= */}
        <div className="flex flex-col gap-8 md:hidden relative z-20">
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
            DESKTOP LAYOUT (Animated Wave)
           ========================================================= */}
        <div className="hidden md:block relative h-[500px] w-full">
          
    
          {/* --- ITEM 1: LEFT (Valley) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            // Aligned with the first 'dip' of the SVG
            className="absolute left-[13%] top-[0%] w-[320px] flex flex-col items-center text-center"
          >
            <div className="mb-2">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-3">
                Training and <br/> Capacity Building
              </h3>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Leadership skills, communication capabilities and organisational maturity programmes.
              </p>
            </div>
            <Arrow direction="up" height={80} />
          </motion.div>


          {/* --- ITEM 2: CENTER (Peak) --- */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            // Aligned with the 'hump' of the SVG
            className="absolute left-[50%] -translate-x-1/2 top-[0%] w-[320px] flex flex-col items-center text-center"
          >
            <div className="mt-[160px]"> {/* Push down below the hump */}
               <Arrow direction="down" height={80} />
               <div className="mt-2">
                  <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-3">
                    Cross-Cultural <br/> Collaboration
                  </h3>
                  <p className="font-sans text-gray-600 text-base leading-relaxed">
                    Connect organisations across regions. Bridge cultural differences with multi-regional coordination.
                  </p>
               </div>
            </div>
          </motion.div>


          {/* --- ITEM 3: RIGHT (Valley) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.5 }}
            // Aligned with the second 'dip'
            className="absolute right-[7%] top-[10%] w-[320px] flex flex-col items-center text-center"
          >
            <div className="mb-2">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl leading-tight mb-3">
                Social Impact Support <br/> for NGOs and INGOs
              </h3>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                CSR and ESG alignment. Community programme strategy. Impact storytelling and reporting.
              </p>
            </div>
            <Arrow direction="up" height={80} />
          </motion.div>

        </div>

        <hr className='mt-24 md:mt-10 bg-[#0F3D35] w-[80%] md:w-auto md:mx-56 mx-auto border-2 text-[#0F3D35] opacity-20' />

      </div> 
    </section>
  );
}

// --- SUB-COMPONENTS ---

function Arrow({ direction, height }) {
  return (
    <div className="flex flex-col items-center text-[#0F3D35]">
      {direction === 'up' ? (
        <>
          {/* Arrow Head UP */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mb-[-2px]">
              <path d="M12 2L2 12h20L12 2z" />
          </svg>
          {/* Line */}
          <div className="w-[2px] bg-[#0F3D35]" style={{ height: `${height}px` }}></div>
        </>
      ) : (
        <>
          {/* Line */}
          <div className="w-[2px] bg-[#0F3D35]" style={{ height: `${height}px` }}></div>
          {/* Arrow Head DOWN */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mt-[-2px]">
              <path d="M12 22L22 12H2L12 22z" />
          </svg>
        </>
      )}
    </div>
  );
}

function MobileCard({ title, desc }) {
  return (
    <div className="bg-[#F9F8F4] p-8 rounded-xl border border-gray-200 text-center shadow-sm">
      <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-3">
        {title}
      </h3>
      <p className="font-sans text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}