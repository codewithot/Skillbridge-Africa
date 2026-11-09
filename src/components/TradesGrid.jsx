import React from 'react';
import { ArrowRight } from 'lucide-react';

const TRADES = [
  {
    title: 'Plumbing',
    subtitle: 'Leaks, pipes, installations'
  },
  {
    title: 'Electrical',
    subtitle: 'Wiring, repairs, fittings'
  },
  {
    title: 'Carpentry',
    subtitle: 'Furniture, doors, roofing'
  },
  {
    title: 'Tailoring & fashion',
    subtitle: 'Made-to-measure, alterations'
  },
  {
    title: 'Auto mechanics',
    subtitle: 'Repairs and servicing'
  },
  {
    title: 'Hair & beauty',
    subtitle: 'Stylists, barbers, makeup'
  },
  {
    title: 'Painting & tiling',
    subtitle: 'Interiors and finishing'
  },
  {
    title: 'Welding & fabrication',
    subtitle: 'Gates, frames, metalwork'
  }
];

export default function TradesGrid({ onSelectTrade }) {
  return (
    <section id="trades" className="py-20 bg-[#F4ECE4] border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111A14] tracking-[-0.03em] leading-tight">
            Every trade, one place.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            From fixing a leak to sewing for a wedding, find the right craftsperson near you.
          </p>
        </div>

        {/* 8 Trade Cards Grid (4 columns on lg, 2 columns on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRADES.map((trade, idx) => (
            <div
              key={idx}
              onClick={() => onSelectTrade?.(trade.title)}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 cursor-pointer flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111A14] group-hover:text-[#0D4A30] transition-colors leading-snug">
                  {trade.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  {trade.subtitle}
                </p>
              </div>

              <div className="pl-3 shrink-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-[#0D4A30] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

