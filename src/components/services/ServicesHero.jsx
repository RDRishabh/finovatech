export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Analytics Dashboard */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.85), rgba(0, 128, 128, 0.85)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      {/* Analytics Dashboard Overlay */}
      <div className="absolute inset-0 opacity-20">
        {/* Mock Dashboard Elements */}
        <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-white text-xs mb-2">USERS: LAST 7 DAYS USING MEDIAN</div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-teal-400/30 rounded"></div>
            <div>
              <div className="text-white text-lg font-bold">574</div>
              <div className="text-white/70 text-xs">Active Users</div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-white text-xs mb-2">Our Expertise</div>
          <div className="space-y-2">
            <div className="text-white text-xs">Portfolio Risk Monitor (LLMs): 100.0%</div>
            <div className="text-white text-xs">Session Length (LLMs): 87min</div>
          </div>
        </div>

        <div className="absolute bottom-32 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-teal-300 text-xl font-bold">0.7%</div>
              <div className="text-white/70 text-xs">Bounce Rate</div>
            </div>
            <div>
              <div className="text-teal-300 text-xl font-bold">2.7</div>
              <div className="text-white/70 text-xs">Mpvs</div>
            </div>
            <div>
              <div className="text-teal-300 text-xl font-bold">40.6</div>
              <div className="text-white/70 text-xs">Sessions</div>
            </div>
            <div>
              <div className="text-teal-300 text-xl font-bold">17min</div>
              <div className="text-white/70 text-xs">Duration</div>
            </div>
          </div>
        </div>

        {/* Chart Lines */}
        <div className="absolute bottom-20 right-20 w-64 h-32">
          <svg className="w-full h-full" viewBox="0 0 256 128">
            <path
              d="M0,100 Q64,80 128,85 T256,70"
              stroke="rgba(45, 212, 191, 0.6)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,110 Q64,90 128,95 T256,80"
              stroke="rgba(45, 212, 191, 0.4)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Comprehensive
          <br />
          Financial Services
        </h1>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          From strategic planning to operational excellence, we deliver high-impact 
          financial solutions tailored to support your business at every stage of growth.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group">
            Explore Services
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </section>
  );
}
