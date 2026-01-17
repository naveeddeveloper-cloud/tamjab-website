'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:h-[90vh] md:min-h-[700px] bg-[#F9F8F4] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden shadow-sm flex flex-col">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient: White top fading to Gold/Sand bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F9F8F4] to-[#D5CDB1] z-0" />
      
      {/* 2. Dot Pattern Image Overlay */}
      {/* This uses your dots.png as a repeating pattern */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-multiply pointer-events-none">
        <div 
          className="w-full h-full"
          style={{ 
            backgroundImage: "url('/dots.png')", 
            backgroundRepeat: "repeat", 
            backgroundSize: "auto" // Adjust this (e.g., '50px') if dots are too big/small
          }} 
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:block">
        
        {/* --- LEFT: Typography --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 pt-32 md:pt-24 pb-10 md:pb-0 relative z-20"
        >
          {/* Main Headline */}
          <h1 className="font-logo text-[#0F3D35] text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-[0.95] md:leading-[0.9] tracking-tight font-medium text-center md:text-left">
            Every <span className="text-[#A39261] italic font-normal">great leader</span> <br />
            reaches a point <br />
            where the old way <br />
            stops working.
          </h1>

          {/* Body Text */}
          <div className="mt-8 md:mt-10 max-w-xl space-y-6 text-[#2D3748] text-base md:text-lg leading-relaxed font-sans text-center md:text-left mx-auto md:mx-0">
            <p>
              At <span className="font-bold text-[#0F3D35]">Tamjab</span>, we don’t just deliver transformations we co-create
              them. We craft tailored solutions rooted in your reality, <span className="font-bold text-[#0F3D35]">powered
              by multidisciplinary expertise</span>, and shaped through genuine collaboration.
            </p>
            <p>
              From vision to <span className="font-bold text-[#0F3D35]">execution</span>, we work hand in hand to unlock
              meaningful progress and empower you to carry it forward.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#0F3D35] hover:bg-[#092520] text-white px-8 py-4 rounded-[4px] font-sans font-medium text-lg transition-colors duration-300 w-full sm:w-auto">
              Discover Our Expertise
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#0F3D35] border border-gray-200 px-8 py-4 rounded-[4px] font-sans font-medium text-lg shadow-sm transition-colors duration-300 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT: Image --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[400px] mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 md:h-[100%] md:w-[70%] z-10"
        >
          {/* Image Container */}
          <div className="relative w-full h-full">
            <Image 
              src="/girl.png" 
              alt="Leadership Portrait" 
              fill
              className="object-contain object-bottom md:object-right-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}