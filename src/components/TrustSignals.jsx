import React from 'react';

const SIGNALS = [
  {
    dotColor: 'bg-[#EAB308]',
    dotRing: 'ring-[#EAB308]/20',
    title: 'Reviews you can rely on',
    description: 'Ratings and reviews come from real users of the platform, so you see how the work actually went.'
  },
  {
    dotColor: 'bg-[#10B981]',
    dotRing: 'ring-[#10B981]/20',
    title: 'Close to you',
    description: 'Find artisans near your location and skip the hunt for referrals.'
  },
  {
    dotColor: 'bg-[#F97316]',
    dotRing: 'ring-[#F97316]/20',
    title: 'We keep watch',
    description: 'Complaints are taken seriously. We can suspend and investigate an artisan to protect the next customer.'
  },
  {
    dotColor: 'bg-[#8B5CF6]',
    dotRing: 'ring-[#8B5CF6]/20',
    title: 'Star your favourites',
    description: 'Save the artisans you trust and come back to them whenever you need them.'
  }
];

export default function TrustSignals() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111A14] tracking-[-0.03em] leading-tight">
            Hiring a stranger shouldn’t feel <br className="hidden sm:inline" />
            like a gamble.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Skillbridge puts the signals you need in front of you before you make the call.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNALS.map((signal, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-neutral-200/60 transition-all duration-200 hover:shadow-sm hover:border-neutral-300 flex flex-col justify-between"
            >
              <div>
                {/* Colored Signal Dot */}
                <div className="flex items-center mb-6">
                  <span className={`w-3.5 h-3.5 rounded-full ${signal.dotColor} ring-4 ${signal.dotRing}`}></span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111A14] tracking-tight mb-2.5">
                  {signal.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

