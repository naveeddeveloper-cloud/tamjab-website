'use client';

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto mt-8"> 
        
        {/* --- MAIN CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-b from-[#F3F0E7] to-white/50 shadow-md rounded-[30px] px-8 py-12 md:p-16 border border-[#E8E4D5]"
        >
          
          {/* --- FLOATING HEADER (Who We Are) --- */}
          {/* Centered horizontally, pulled up 50% to sit on the border */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0F3D35] text-white px-16 py-5 rounded-2xl shadow-lg whitespace-nowrap z-10">
            <h2 className="font-logo text-4xl md:text-5xl tracking-wide">Who We Are</h2>
          </div>

          {/* --- CONTENT GRID --- */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 relative">
            
            {/* VERTICAL DIVIDER LINE (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:block absolute top-2 bottom-2 left-1/2 w-[1px] bg-[#9ca3af] -translate-x-1/2 opacity-50"></div>

            {/* --- LEFT COLUMN --- */}
            <div className="md:pr-14 flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl md:text-[1.75rem] leading-tight">
                Our Foundation: Trust <br className="hidden md:block" />
                & Purpose
              </h3>
              
              <div className="font-sans text-[#2D3748] text-lg leading-relaxed space-y-6">
                <p>
                  At Tamjab, we believe leadership is deeply human. We foster 
                  environments where trust flourishes and a shared purpose unites 
                  every team member.
                </p>
                <p>
                  Our collaboration is more than just working together; it’s about co 
                  creating lasting impact and change.
                </p>
              </div>
            </div>

            {/* --- RIGHT COLUMN --- */}
            <div className="md:pl-14 mt-10 md:mt-0 flex flex-col gap-6">
              <h3 className="font-sans font-bold text-[#0F3D35] text-2xl md:text-[1.75rem] leading-tight">
                Diverse Perspectives, <br className="hidden md:block" />
                Deep Expertise
              </h3>

              <div className="font-sans text-[#2D3748] text-lg leading-relaxed space-y-6">
                <p>
                  Our team brings together a rich tapestry of experiences across 
                  consulting, leadership, operations, communication, research, 
                  and social impact.
                </p>
                <p>
                  This blend of practical wisdom and analytical rigor allows us to form 
                  balanced, insightful partnerships with you.
                </p>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}