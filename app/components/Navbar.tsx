'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#6B1212] text-white text-xs py-2 px-4 flex justify-between items-center">
        <span className="tracking-widest uppercase font-medium">
          • Live Network · 217 Verified Blood Banks · 24×7 Dispatch
        </span>
        <span className="font-semibold tracking-wide">Emergency: +91 1800 123 456</span>
      </div>

      {/* Main nav */}
      <nav className="bg-[#F2EDE8] border-b border-[#E0D9D1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#8B1A1A] rounded-md flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#1A1A1A] text-lg leading-none">BloodLink</div>
              <div className="text-[#8B1A1A] text-[10px] tracking-widest uppercase">Emergency Supply</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Features', 'Find Blood', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors ${
                  item === 'Home'
                    ? 'text-[#8B1A1A] border-b-2 border-[#8B1A1A] pb-0.5'
                    : 'text-[#1A1A1A] hover:text-[#8B1A1A]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-[#1A1A1A] hover:text-[#8B1A1A]">Sign in</a>
            <a href="#" className="bg-[#1A1A1A] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#333]">Register</a>
            <a href="#" className="bg-[#8B1A1A] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#6B1212] flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              Emergency Request
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            {['Home', 'About', 'Features', 'Find Blood', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-[#1A1A1A] hover:text-[#8B1A1A]">{item}</a>
            ))}
            <a href="#" className="bg-[#8B1A1A] text-white text-sm font-medium px-4 py-2 rounded-md text-center">Emergency Request</a>
          </div>
        )}
      </nav>
    </>
  );
}
