export default function Journey() {
  return (
    <section id="journey" className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="relative">
            {/* <div className="absolute -inset-8 bg-white/50 rounded-3xl transform rotate-2 shadow-lg"></div> */}
            <div className="relative p-0 sm:p-2 md:p-4 lg:p-6 rounded-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight tracking-tight">
                Our Journey to <span className="text-primary block sm:inline">Financial Excellence</span>
              </h2>
              
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Founded by seasoned professionals from top-tier consulting firms, FINOVATECH emerged from a shared vision to bridge the gap between traditional financial advisory and modern business intelligence.
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Our founders recognized that businesses needed more than just financial reporting – they needed strategic partners who could transform data into actionable insights and drive meaningful business outcomes.
              </p>
              
              {/* Key Points */}
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Founded by Big 4 alumni with 25+ years combined experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Served 100+ clients across diverse industry sectors</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Technology-first approach to financial consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-4 md:mt-0">
            <div className="absolute -inset-3 sm:-inset-5 lg:-inset-8 bg-primary/10 rounded-3xl transform -rotate-1 sm:-rotate-2"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80"
                alt="Financial consulting team"
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
