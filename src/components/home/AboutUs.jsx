import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image container with creative styling */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Primary square background - positioned behind and offset */}
              <div className="absolute -bottom-4 -left-4 w-80 h-56 bg-primary rounded-2xl"></div>
              
              {/* Main image container - in front */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial consulting and business analytics"
                  className="w-80 h-56 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content container */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              About <span className="text-primary">Us</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're a boutique advisory team, laser-focused on transactions, finance, and investment strategy —
            </p>
            
            <div className="border-l-4 border-primary pl-8 mb-8 bg-gray-50 py-6 rounded-r-lg">
              <h3 className="text-3xl font-bold italic text-gray-800 leading-tight">
                "Designed to unlock real <span className="text-primary">Growth"</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We partner with ambitious businesses to craft smart, custom strategies that 
              lead to clear, measurable results. We deliver high-impact financial advising 
              tailored to support your business at every stage.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              From strategic advisory to day-to-day financial operations, we help you stay 
              ahead with clarity, control, and foresight. We don't just consult. We roll up 
              our sleeves, dig in, and help you make bold moves with confidence.
            </p>
            
            {/* Call to action button */}
            <div className="mt-10">
              <a 
                href="#services" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
