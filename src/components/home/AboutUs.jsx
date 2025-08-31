import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
  <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-14 lg:gap-16">

          {/* Image container with creative styling */}
          <div className="lg:w-1/4 w-full flex justify-center lg:justify-start lg:h-auto">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-64 sm:h-80 lg:h-full">
              {/* Accent background */}
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary rounded-2xl"></div>
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial consulting and business analytics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text content container */}
          <div className="lg:w-3/4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold italic mb-5 sm:mb-6 text-gray-900 leading-tight tracking-tight">
              About <span className="text-primary not-italic">Us</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We're a boutique advisory team, laser-focused on transactions, finance, and investment strategy —
            </p>
            <p className="text-xl sm:text-2xl font-extrabold leading-snug mb-6 text-gray-900">
              “Designed to unlock real <span className="text-primary">Growth”</span>
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We partner with ambitious businesses to craft smart, custom strategies that lead to clear, measurable results. We deliver high-impact financial solutions tailored to support your business at every stage. From strategic advisory to day-to-day financial operations, we help you stay ahead with clarity, control, and foresight. We don’t just consult. We roll up our sleeves, dig in, and help you make bold moves with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
