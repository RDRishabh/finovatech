export default function ReadyToExperience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
          Ready to Experience the
          <br />
          <span className="text-primary">Difference?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the growing number of companies that trust FINOVATECH to transform their financial operations 
          and drive strategic growth.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group">
            Start Your Journey
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 text-sm">Years Combined Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 text-sm">Fortune Companies Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 text-sm">Industries Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3-5x</div>
            <div className="text-gray-600 text-sm">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
