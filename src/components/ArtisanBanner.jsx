import React from 'react';

export default function ArtisanBanner({ onOpenArtisanSignup }) {
  return (
    <section id="for-artisans" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12221B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[-0.03em] leading-tight">
              Are you an artisan? Your craft deserves a profile.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Show your work, collect reviews from the people you serve, and get found by customers near you.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenArtisanSignup}
              className="bg-[#F7B928] hover:bg-[#E2A519] text-[#12221B] font-extrabold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Create your profile
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

