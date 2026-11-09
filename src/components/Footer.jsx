import React from 'react';
import { Logo } from './Navbar';

export default function Footer({ onOpenArtisanSignup }) {
  return (
    <footer className="bg-[#F4ECE4] border-t border-neutral-200/70 py-12 text-sm text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a 
              href="#how-it-works" 
              className="text-neutral-700 hover:text-[#0D4A30] font-medium transition"
            >
              How it works
            </a>
            <a 
              href="#trades" 
              className="text-neutral-700 hover:text-[#0D4A30] font-medium transition"
            >
              Trades
            </a>
            <a 
              href="#trust-safety" 
              className="text-neutral-700 hover:text-[#0D4A30] font-medium transition"
            >
              Trust & safety
            </a>
            <a 
              href="#for-artisans" 
              onClick={(e) => {
                e.preventDefault();
                onOpenArtisanSignup?.();
              }}
              className="text-neutral-700 hover:text-[#0D4A30] font-medium transition"
            >
              For artisans
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-500 font-medium">
            © 2026 Skillbridge Africa
          </div>

        </div>
      </div>
    </footer>
  );
}

