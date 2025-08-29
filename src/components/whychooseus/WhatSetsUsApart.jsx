export default function WhatSetsUsApart() {
  return (
    <section className="py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Sets Us <span className="text-primary">Apart</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the unique advantages that make FINOVATECH your ideal partner for financial 
            transformation and strategic growth.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="space-y-16">
          
          {/* Big 4 Pedigree */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Big 4 Pedigree</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team brings decades of experience from top-tier consulting firms 
                including Deloitte, PwC, KPMG, and EY.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 50 years of combined experience across Big 4 firms, our professionals 
                have worked with Fortune 500 companies, private equity firms, and emerging 
                growth companies. We bring institutional-grade expertise to every engagement.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                  alt="Big 4 Pedigree"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Technology-Forward Approach */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Technology Dashboard"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technology-Forward Approach</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                We leverage cutting-edge technology and automation to deliver faster, 
                more accurate, and scalable financial solutions.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Our proprietary technology stack includes advanced analytics platforms, 
                automated reporting tools, and cloud-based collaboration systems that ensure 
                real-time insights and seamless client experiences.
              </p>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Industry Expertise</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Deep knowledge across Technology, Healthcare, Manufacturing, 
                Financial Services, and Private Equity sectors.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                We understand the unique challenges and opportunities in each industry, 
                bringing sector-specific insights that drive better outcomes. Our team has 
                worked across 15+ industries with specialized knowledge in emerging markets.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="Industry Analytics Dashboard"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Results-Driven Methodology */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Results Methodology"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Results-Driven Methodology</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our proven framework ensures measurable outcomes and sustainable 
                value creation for every client engagement.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                We employ a systematic approach that combines diagnostic assessment, 
                strategic planning, implementation support, and performance monitoring to 
                deliver tangible business improvements.
              </p>
            </div>
          </div>

          {/* White-Glove Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">White-Glove Service</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Personalized attention and dedicated support with a hands-on, strategic 
                mindset focused on your success.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Each client receives a dedicated engagement team led by a senior partner. We 
                provide 24/7 support during critical periods and maintain ongoing relationships to 
                ensure long-term success.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="White Glove Service"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Value-Driven ROI */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-2"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224154-26032fbc4d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Value ROI"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Value-Driven ROI</h3>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our solutions are designed to maximize return on investment through 
                strategic cost optimization and revenue enhancement.
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                On average, our clients see 3-5x ROI within 12 months through improved 
                financial processes, enhanced decision-making capabilities, and strategic growth 
                initiatives.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
