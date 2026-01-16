'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-brand-green px-4 md:px-12 py-5 shadow-sm relative z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="flex flex-col select-none z-50">
          <Link href="/" onClick={closeMenu} className="text-white text-5xl font-logo font-medium tracking-tight leading-[0.85]">
            tamjab
          </Link>
          <span className="text-gray-300 text-[10px] font-sans uppercase tracking-[0.25em] ml-1 mt-1 opacity-80">
            Management Consultancy
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center space-x-12">
          {['Home', 'About', 'Portfolio', 'Testimonials'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-white text-lg font-sans font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* --- DESKTOP BUTTON --- */}
        <div className="hidden md:block">
          <div className="w-36 h-12 bg-brand-cream rounded-[4px] shadow-sm hover:brightness-110 cursor-pointer transition-all">
            {/* Empty button as requested */}
          </div>
        </div>

        {/* --- MOBILE MENU TOGGLE BUTTON --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white z-50 focus:outline-none"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger (Menu) Icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-green border-t border-white/10 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {['Home', 'About', 'Portfolio', 'Testimonials'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  onClick={closeMenu}
                  className="text-white text-xl font-sans font-light tracking-wide hover:text-brand-cream transition-colors"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Button */}
              <div 
                onClick={closeMenu}
                className="w-36 h-12 bg-brand-cream rounded-[4px] shadow-sm hover:brightness-110 cursor-pointer transition-all mt-4"
              >
                {/* Empty button maintained */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}