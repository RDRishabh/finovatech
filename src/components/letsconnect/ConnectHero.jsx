export default function ConnectHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.8), rgba(0, 128, 128, 0.8)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
          <span className="text-white text-sm font-medium">Get In Touch</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Let's Start Your
          <br />
          Financial
          <br />
          Transformation
        </h1>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to take your financial strategy to the next level? Connect with our 
          experts today and discover how we can help transform your business.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group">
            Schedule Consultation
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
}
