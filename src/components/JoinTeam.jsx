'use client';

import { motion } from 'framer-motion';

export default function JoinTeam() {
  return (
    <section className="w-full bg-[#0F3D35] py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- MAIN TITLE --- */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-logo text-[#EBE7D5] text-5xl md:text-[5rem] text-center mb-20 md:mb-28"
        >
          Join Our Team
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT: TEXT CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Headline with Line */}
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-sans font-bold text-2xl md:text-3xl whitespace-nowrap">
                Join Our Purpose-Driven Team
              </h3>
              <div className="h-[1px] bg-white/40 w-full rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-gray-200 font-light">
              <p>
                At Tamjab, we're building a team of passionate professionals dedicated 
                to making a meaningful social impact. We welcome individuals driven by 
                strong leadership, strategic systems thinking, and effective communication skills.
              </p>
              <p>
                Our collaborative environment thrives on curiosity, discipline, and an 
                unwavering commitment to people and positive change.
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT: OPPORTUNITIES CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#C6C0A9] rounded-[40px] p-10 md:p-14 shadow-xl"
          >
            <h4 className="font-sans font-bold text-white text-2xl mb-8">
              Current Opportunities Include:
            </h4>
            
            <ul className="space-y-4 font-sans text-white text-lg md:text-xl font-medium">
              {[
                "Consulting and research roles",
                "Communications and training specialists",
                "Operations and program support staff"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}