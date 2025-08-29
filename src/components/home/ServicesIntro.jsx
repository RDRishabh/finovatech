// src/components/ServicesIntro.jsx
export default function ServicesIntro() {
  return (
    <section id="services" className="py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image with layered design */}
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

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Expert <span className="text-primary">Financial<br />Consulting</span> services to<br />
              secure your <span className="text-primary">Future</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experienced financial consultants provides comprehensive
              solutions tailored to your unique business needs. We combine deep
              industry expertise with innovative strategies to help you achieve
              sustainable growth and financial success.
            </p>

            {/* List with teal bullet points */}
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Comprehensive financial analysis and planning
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Strategic investment advisory services
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Risk management and mitigation strategies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
