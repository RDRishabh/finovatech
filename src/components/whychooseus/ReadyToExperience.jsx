export default function ReadyToExperience() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight tracking-tight">
          <span className="block">Ready to Experience the</span>
          <span className="block text-primary">Difference?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-1">
          Join the growing number of companies that trust FINOVATECH to transform their financial operations and drive strategic growth.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base" aria-label="Start your journey with Finovatech services">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="sr-only">Navigate to contact or services section</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 leading-none">25+</div>
            <div className="text-gray-600 text-xs sm:text-sm leading-snug">Years Combined Experience</div>
          </div>
          <div className="px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 leading-none">500+</div>
            <div className="text-gray-600 text-xs sm:text-sm leading-snug">Fortune Companies Served</div>
          </div>
          <div className="px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 leading-none">15+</div>
            <div className="text-gray-600 text-xs sm:text-sm leading-snug">Industries Covered</div>
          </div>
          <div className="px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 leading-none">3-5x</div>
            <div className="text-gray-600 text-xs sm:text-sm leading-snug">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
