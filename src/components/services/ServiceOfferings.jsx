export default function ServiceOfferings() {
  return (
    <section className="py-16 md:py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-gray-900 leading-tight tracking-tight">
            Our Service <span className="text-primary">Offerings</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-1">
            We bring hands-on expertise and strategic thinking to every financial challenge, delivering solutions that drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-stretch">
          
          {/* Strategic Finance & FP&A */}
          <div id="strategic-finance" className="relative group h-full scroll-mt-24">
            <div className="pointer-events-none absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl shadow-lg shadow-primary/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-[560px]">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">Strategic Finance & FP&A</h3>
            </div>
            
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Turn financial data into strategic advantage.
            </p>
            
            <p className="text-gray-600 mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              We partner with your leadership to deliver forward-looking financial planning, 
              robust budgeting models, forecasting, and scenario analysis that align with 
              your business goals. Whether you're scaling, pivoting, or seeking improved 
              capital efficiency, we build the financial frameworks that support sustainable growth.
            </p>

            <div className="">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Capabilities:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Financial Modeling
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Financial Close Process Automation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Streamlining and Optimization of Finance Function
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Cost Optimization
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Spend Analytics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Financial Due Diligence Readiness
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Financial Due Diligence Services
                </li>
              </ul>
            </div>
            </div>
          </div>

          {/* Management Reporting */}
          <div id="management-reporting" className="relative group h-full scroll-mt-24">
            <div className="pointer-events-none absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl shadow-lg shadow-primary/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-[560px]">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">Management Reporting</h3>
            </div>
            
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Make data-driven decisions with confidence.
            </p>
            
            <p className="text-gray-600 mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              We design and implement tailored management reporting frameworks that 
              provide clear, actionable insights to executives and operational teams. 
              Our reports combine financial accuracy with business relevance to support 
              strategic and day-to-day decision-making.
            </p>

            <div className="">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Capabilities:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Executive dashboards, MIS and board reporting packs
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Trend analysis and insights
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Customized monthly reporting
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Sales & Customer Reporting
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Custom KPIs
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Financial Roadmap
                </li>
              </ul>
            </div>
            </div>
          </div>

          {/* Business Intelligence & Analytics */}
          <div id="bi-analytics" className="relative group h-full scroll-mt-24">
            <div className="pointer-events-none absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl shadow-lg shadow-primary/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-[560px]">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">Business Intelligence & Analytics</h3>
            </div>
            
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Transform data into decision-ready insights.
            </p>
            
            <p className="text-gray-600 mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              We create dynamic dashboards and self-service analytics using tools like 
              Power BI, Tableau, and Looker to enable real-time performance visibility 
              across your financial and operational data. Our BI solutions are tailored 
              to the metrics that matter most to your business.
            </p>

            <div className="">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Capabilities:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Dynamic Dashboards
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Performance Benchmarking
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Embedded Analytics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Customer retention analysis
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Trend & KPI Monitoring
                </li>
              </ul>
            </div>
            </div>
          </div>

          {/* Private Equity Services */}
          <div id="private-equity" className="relative group h-full scroll-mt-24">
            <div className="pointer-events-none absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-2xl shadow-lg shadow-primary/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-[560px]">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">Private Equity Services</h3>
            </div>
            
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Drive transparency and performance across your portfolio.
            </p>
            
            <p className="text-gray-600 mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              We support private equity firms and portfolio companies with custom 
              reporting, performance analysis, and portfolio oversight at the 
              fund-level. From tracking to fund reporting, we provide the insights 
              that empower better capital allocation and LP communication.
            </p>

            <div className="">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Capabilities:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Portfolio Management
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Due Diligence readiness
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Sell Side and Buy Side Financial Due Diligence
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Benchmarking and performance tracking
                </li>
              </ul>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
