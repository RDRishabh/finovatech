// src/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 text-gray-900 leading-[1.1] tracking-tight">
            Why choose <span className="text-primary block sm:inline">FINOVATECH</span>
          </h2>
          {/* Primary underline */}
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-5 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-1">
            We blend hands-on expertise, strategic thinking, and technology enablement to solve core finance challenges.
          </p>
        </div>

        {/* Features Grid - Stable Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Large Card - Left Side */}
          <div className="lg:w-1/3">
            <div className="relative h-80 sm:h-88 md:h-96">
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                <div className="relative h-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Finance and analytics veterans"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"></div>
                  {/* Content */}
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                      An accomplished team of finance and analytics veterans with roots in Big 4 firms
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Stack of Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            
            {/* Top Right Card - Wide */}
            <div className="relative h-44 sm:h-48">
              <div className="absolute -bottom-3 -left-3 sm:-bottom-3 sm:-left-3 w-full h-full bg-primary rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                <div className="relative h-full">
                  <img
                    src="/white-glove.jpg"
                    alt="White-glove service and strategic mindset"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30"></div>
                  {/* Content */}
                  <div className="absolute bottom-4 left-5 sm:left-6 right-5 sm:right-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug">
                      White-glove service with a hands-on, strategic mindset and value-driven approach maximizing ROI
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Bottom Left Small Card */}
              <div className="md:w-1/2">
                <div className="relative h-36 sm:h-40">
                  <div className="absolute -bottom-3 -left-3 w-full h-full bg-primary rounded-2xl"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                    <div className="relative h-full">
                      <img
                        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Technology-forward approach"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/25"></div>
                      {/* Content */}
                      <div className="absolute bottom-3 sm:bottom-4 left-4 right-4">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                          A technology-forward approach to finance
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Small Card */}
              <div className="md:w-1/2">
                <div className="relative h-36 sm:h-40">
                  <div className="absolute -bottom-3 -left-3 w-full h-full bg-primary rounded-2xl"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                    <div className="relative h-full">
                      <img
                        src="/deep-financial-expertise.jpg"
                        alt="Deep financial expertise"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/25"></div>
                      {/* Content */}
                      <div className="absolute bottom-3 sm:bottom-4 left-4 right-4">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                          Deep financial expertise across diverse industry sectors
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
