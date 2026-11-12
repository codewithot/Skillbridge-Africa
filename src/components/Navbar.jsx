import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Logo = ({ className = "h-7 w-7" }) => (
  <div className="flex items-center gap-2.5 group cursor-pointer">
    <div className={`relative flex items-center justify-center rounded-full bg-[#0D4A30] text-white shadow-sm ${className}`}>
      {/* Skillbridge African Bridge & Artisan Hands Motif */}
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21C9 13.5 23 13.5 25 21" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="16" cy="11.5" r="3.2" fill="#F7B928" />
        <path d="M12 21H20" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-extrabold text-[19px] tracking-[-0.03em] text-[#131F17]">
        Skillbridge
      </span>
      <span className="text-[9px] font-bold tracking-[0.26em] text-[#0D4A30] uppercase">
        Africa
      </span>
    </div>
  </div>
);

export default function Navbar({ onOpenFindArtisan, onOpenArtisanSignup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-neutral-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-neutral-700 hover:text-[#0D4A30] transition-colors"
            >
              How it works
            </a>
            <a 
              href="#trades" 
              className="text-sm font-medium text-neutral-700 hover:text-[#0D4A30] transition-colors"
            >
              Trades
            </a>
            <a 
              href="#trust-safety" 
              className="text-sm font-medium text-neutral-700 hover:text-[#0D4A30] transition-colors"
            >
              Trust & safety
            </a>
            <a 
              href="#for-artisans" 
              className="text-sm font-medium text-neutral-700 hover:text-[#0D4A30] transition-colors"
            >
              For artisans
            </a>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={onOpenFindArtisan}
              className="bg-[#0D4A30] hover:bg-[#093824] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              Find an artisan
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="text-neutral-700 hover:text-neutral-900 p-2 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
          >
            How it works
          </a>
          <a
            href="#trades"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Trades
          </a>
          <a
            href="#trust-safety"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Trust & safety
          </a>
          <a
            href="#for-artisans"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 hover:bg-neutral-100"
          >
            For artisans
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFindArtisan();
              }}
              className="w-full bg-[#0D4A30] hover:bg-[#093824] text-white text-center font-medium px-5 py-3 rounded-full shadow-sm"
            >
              Find an artisan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
