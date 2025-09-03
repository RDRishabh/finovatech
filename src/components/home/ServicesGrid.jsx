// src/components/ServicesGrid.jsx
import { Link } from 'react-router-dom';

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
            What we <span className="text-primary">can offer you</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-1">
            Comprehensive financial services designed to meet your business and personal financial needs with expert guidance and innovative solutions.
          </p>
        </div>

        {/* Services Grid */}
  <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1 - Strategic Finance & FP&A */}
          <Link
            to="/services#strategic-finance"
            className="relative group block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
            aria-label="Navigate to Strategic Finance & FP&A service section"
          >
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
              <div className="relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Strategic Finance and FP&A"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Strategic Finance & FP&A</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Turn financial data into strategic advantage.</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 - Management Reporting */}
          <Link
            to="/services#management-reporting"
            className="relative group block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
            aria-label="Navigate to Management Reporting service section"
          >
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
              <div className="relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="Management Reporting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Management Reporting</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Make data-driven decisions with confidence.</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 - Business Intelligence & Analytics */}
          <Link
            to="/services#bi-analytics"
            className="relative group block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
            aria-label="Navigate to Business Intelligence & Analytics service section"
          >
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
              <div className="relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=2070&q=80"
                  alt="Business Intelligence and Analytics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Business Intelligence & Analytics</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Transform data into decision-ready insights.</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 - Private Equity */}
          <Link
            to="/services#private-equity"
            className="relative group block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
            aria-label="Navigate to Private Equity service section"
          >
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
              <div className="relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Private Equity Portfolio Management"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Private Equity – Reporting, Analysis & Portfolio Management</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Drive transparency and performance across your portfolio.</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
