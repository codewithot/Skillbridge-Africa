import React from 'react';

export default function FinalCta({ onOpenFindArtisan }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] text-center border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111A14] tracking-[-0.03em] leading-tight mb-8">
          Find the right hands for your <br className="hidden sm:inline" />
          next job.
        </h2>
        
        <div>
          <button
            onClick={onOpenFindArtisan}
            className="bg-[#0D4A30] hover:bg-[#083622] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
          >
            Find an artisan
          </button>
        </div>
      </div>
    </section>
  );
}

