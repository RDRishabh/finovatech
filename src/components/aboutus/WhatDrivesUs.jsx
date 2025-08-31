export default function WhatDrivesUs() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-gray-900 leading-tight tracking-tight">
            What <span className="text-primary">Drives Us</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-1">
            Our core values and principles that guide every client engagement and strategic decision we make.
          </p>
        </div>

        {/* Cards Grid */}
  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Our Mission */}
          <div className="relative group">
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div 
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center transform transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            >
              <div className="absolute top-5 sm:top-6 left-5 sm:left-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Our Mission</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  To empower businesses with strategic financial insights and innovative 
                  solutions that drive sustainable growth and maximize value creation.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="relative group">
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div 
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center transform transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            >
              <div className="absolute top-5 sm:top-6 left-5 sm:left-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Our Team</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Experienced finance professionals from Big 4 firms bringing deep 
                  expertise across diverse industry sectors and functional areas.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="relative group">
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div 
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center transform transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80')`
              }}
            >
              <div className="absolute top-5 sm:top-6 left-5 sm:left-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Our Values</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Integrity, innovation, and excellence guide every client engagement, 
                  ensuring transparent communication and measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="relative group">
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div 
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center transform transition-transform duration-300 group-hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')`
              }}
            >
              <div className="absolute top-5 sm:top-6 left-5 sm:left-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Our Approach</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Technology-forward methodology combined with hands-on strategic 
                  thinking to deliver customized solutions for each client's unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
