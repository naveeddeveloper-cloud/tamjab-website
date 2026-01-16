'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Listen Deeply:",
    desc: "We understand your context and challenges thoroughly",
  },
  {
    id: "02",
    title: "Ask Right Questions:",
    desc: "We uncover what matters most for your organisation.",
  },
  {
    id: "03",
    title: "Bring Structure:",
    desc: "We create clarity from complexity with proven frameworks.",
  },
  {
    id: "04",
    title: "Build Solutions:",
    desc: "We co-create lasting solutions that empower your team.",
  },
  {
    id: "05",
    title: "Move Together:",
    desc: "We work with your team, not around it.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 relative">
        
        {/* --- TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#0F3D35] text-5xl md:text-[4.5rem] tracking-tight text-center mb-20 md:mb-32"
        >
          How We Work With You
        </motion.h2>

        {/* --- DESKTOP CURVED LINE (Hidden on mobile) --- */}
        <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[200px] h-[85%] hidden md:block -z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 200 1000" preserveAspectRatio="none">
             {/* 
                The "Snake" Path:
                Starts top center, curves gently left/right through the vertical space.
                Using a dashed stroke.
             */}
             <motion.path 
               d="M 100 0 
                  C 100 0, 40 100, 100 200 
                  C 160 300, 100 400, 100 400
                  C 100 400, 40 500, 100 600
                  C 160 700, 100 800, 100 800
                  C 100 800, 40 900, 100 1000"
               fill="none"
               stroke="#0F3D35"
               strokeWidth="2"
               strokeDasharray="6 6"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 2.5, ease: "linear" }}
             />
          </svg>
        </div>

        {/* --- MOBILE STRAIGHT LINE (Visible on mobile) --- */}
        <div className="absolute top-[120px] left-8 bottom-20 w-[2px] bg-transparent border-l-2 border-dotted border-[#0F3D35] md:hidden -z-0"></div>


        {/* --- STEPS CONTAINER --- */}
        <div className="flex flex-col gap-12 md:gap-0">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0; // 2nd, 4th item (Right side)
            
            return (
              <div key={index} className={`flex items-center md:justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. THE CARD (Width 45%) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full md:w-[42%] pl-20 md:pl-0"
                >
                  <div className="relative bg-gradient-to-b from-[#F3F0E7] to-white border border-[#E8E4D5] rounded-[20px] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                    
                    {/* The "Pointer" triangle (Only on Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#F3F0E7] border-t border-r border-[#E8E4D5] 
                      ${isEven 
                        ? 'left-[-11px] -rotate-[135deg] border-b border-l border-t-0 border-r-0' // Right Card -> Point Left
                        : 'right-[-11px] rotate-45' // Left Card -> Point Right
                      }
                    `}></div>

                    <h3 className="font-sans font-bold text-[#0F3D35] text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[#4A5568] text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* 2. THE CIRCLE NUMBER (Center) */}
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                   className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#153F39] text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10"
                >
                  {step.id}
                </motion.div>

                {/* 3. SPACER (Width 45%) - Keeps grid balanced */}
                <div className="hidden md:block w-[42%]"></div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}