import React from 'react';

const PROCESS_STEPS = [
  {
    number: '1',
    title: 'Complaint received',
    description: 'A customer reports a problem with an artisan.'
  },
  {
    number: '2',
    title: 'Profile suspended',
    description: 'The artisan pauses new bookings while we look into it.'
  },
  {
    number: '3',
    title: 'Investigation',
    description: "Our team reviews the complaint and the artisan's record."
  },
  {
    number: '4',
    title: 'Decision',
    description: 'The artisan is reinstated or removed from the platform.'
  }
];

export default function TrustAndSafety() {
  return (
    <section id="trust-safety" className="py-20 lg:py-28 bg-[#0B442B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#E7C789] uppercase">
              Trust & Safety
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-[-0.03em] leading-[1.1]">
              We keep watch, so you <br className="hidden sm:inline" />
              don’t have to.
            </h2>

            <p className="text-[#C6E2D0] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              Skillbridge audits the artisans on the platform. When customers raise a complaint, we can suspend the artisan’s profile and investigate before they take on more jobs.
            </p>
          </div>

          {/* Right Column: 4-Step Process Cards */}
          <div className="lg:col-span-6 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#0e4f33]/70 border border-[#1d6b47]/70 rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition duration-200 hover:bg-[#0e4f33]"
              >
                {/* Orange Circle Number */}
                <div className="w-8 h-8 rounded-full bg-[#EA580C] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A8CDBC] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

