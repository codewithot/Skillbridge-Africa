import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PhoneMockups from './PhoneMockups';

const POPULAR_TAGS = [
  'Plumber',
  'Electrician',
  'Tailor',
  'Carpenter',
  'Mechanic',
  'Hairstylist'
];

export default function Hero({ onSearchSubmit, onBookArtisan }) {
  const [tradeNeed, setTradeNeed] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearchSubmit?.({ trade: tradeNeed || 'Plumber', location: location || 'Lagos' });
  };

  const handleTagClick = (tag) => {
    setTradeNeed(tag);
    onSearchSubmit?.({ trade: tag, location: location || 'Lagos' });
  };

  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline / Subtitle */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#7A6A3B] uppercase">
                Artisans Across Africa
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#111A14] tracking-[-0.035em] leading-[1.05]">
              Skilled hands, one <br className="hidden sm:inline" />
              search away.
            </h1>

            {/* Description */}
            <p className="text-neutral-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Find trusted artisans near you, backed by real reviews from real customers. Plumbers, tailors, electricians, mechanics and more.
            </p>

            {/* Search Box / Card */}
            <form 
              onSubmit={handleSearch}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] p-3 sm:p-4 max-w-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                {/* Field 1: WHAT DO YOU NEED? */}
                <div className="pt-1 sm:pt-0 sm:pr-3">
                  <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1">
                    What do you need?
                  </label>
                  <input
                    type="text"
                    value={tradeNeed}
                    onChange={(e) => setTradeNeed(e.target.value)}
                    placeholder="e.g. Plumber"
                    className="w-full text-sm sm:text-base font-semibold text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
                  />
                </div>

                {/* Field 2: WHERE? */}
                <div className="pt-3 sm:pt-0 sm:pl-4">
                  <label className="block text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1">
                    Where?
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Your area or city"
                    className="w-full text-sm sm:text-base font-semibold text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4 pt-1">
                <button
                  type="submit"
                  className="w-full bg-[#0D4A30] hover:bg-[#083622] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition duration-200 shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Find artisans</span>
                </button>
              </div>
            </form>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-neutral-600">
              <span className="text-xs text-neutral-500 font-medium mr-1">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="rounded-full border border-neutral-200/90 bg-white hover:border-[#0D4A30] hover:text-[#0D4A30] text-xs text-neutral-700 px-3 py-1 font-medium transition cursor-pointer shadow-2xs"
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

          {/* Right Hero Mobile Mockup Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <PhoneMockups onBookArtisan={onBookArtisan} />
          </div>

        </div>
      </div>
    </section>
  );
}
