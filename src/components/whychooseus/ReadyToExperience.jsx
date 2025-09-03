import { Link } from 'react-router-dom';

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
          <Link
            to="/contact#contact"
            className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Start your journey – open contact form"
          >
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="sr-only">Navigate to contact form</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
