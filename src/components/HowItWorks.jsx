import React from 'react';

const STEPS = [
  {
    stepNumber: 'STEP 1',
    title: 'Search',
    description: 'Tell us the trade you need and where you are.'
  },
  {
    stepNumber: 'STEP 2',
    title: 'Compare',
    description: 'Browse profiles, star ratings and reviews from other customers.'
  },
  {
    stepNumber: 'STEP 3',
    title: 'Book',
    description: 'Choose your artisan and agree on the job.'
  },
  {
    stepNumber: 'STEP 4',
    title: 'Review',
    description: 'Rate the work so the next person knows what to expect.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111A14] tracking-[-0.03em] leading-tight">
            From “I need someone” to job <br className="hidden sm:inline" />
            done, in four steps.
          </h2>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Green indicator bar on top */}
              <div className="w-full h-1 bg-[#0D4A30] rounded-full mb-6"></div>

              {/* Step counter */}
              <span className="text-xs font-extrabold tracking-wider text-neutral-400 uppercase">
                {step.stepNumber}
              </span>

              {/* Step title */}
              <h3 className="text-2xl font-bold text-[#111A14] mt-2 mb-2 tracking-tight">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

