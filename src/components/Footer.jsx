'use client';

import Link from 'next/link';

// --- ICONS ---
const SocialIcon = ({ path }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F0EAD2] hover:text-[#0F3D35] transition-all duration-300">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      {path}
    </svg>
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // ROUNDED TOP FOOTER CONTAINER
    <footer className="w-full bg-[#0F3D35] text-white rounded-t-[60px] pt-20 pb-8 px-6 mt-[-2px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COL 1: LOGO & ABOUT */}
          <div className="col-span-1 md:col-span-1">
             {/* LOGO */}
            <div className="flex flex-col select-none mb-6">
              <Link href="/" className="text-white text-5xl font-logo leading-[0.8]">
                tamjab
              </Link>
              <span className="text-gray-300 text-[10px] font-sans uppercase tracking-[0.2em] ml-1 mt-1 opacity-80">
                Management Consultancy
              </span>
            </div>
            <p className="font-sans text-gray-300 text-sm leading-relaxed mb-6">
              Co-creating lasting impact through leadership, strategy, and human-centered innovation.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {/* LinkedIn */}
              <SocialIcon path={<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />} />
              {/* Twitter/X */}
              <SocialIcon path={<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />} />
              {/* Instagram */}
              <SocialIcon path={<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />} />
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-[#F0EAD2]">Company</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* COL 3: EXPERTISE */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-[#F0EAD2]">Expertise</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li><Link href="#" className="hover:text-white transition">People & Organisation</Link></li>
              <li><Link href="#" className="hover:text-white transition">Digital & Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition">Communications</Link></li>
              <li><Link href="#" className="hover:text-white transition">Training & Capacity</Link></li>
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-[#F0EAD2]">Contact</h4>
            <ul className="space-y-4 font-sans text-gray-300">
              <li>hello@tamjab.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Leadership Avenue,<br />
                Business District, NY 10001
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-gray-400">
            &copy; {currentYear} Tamjab Management Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8 font-sans text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}