export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 151, 167, 0.85), rgba(0, 151, 167, 0.75)),
          url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/90"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="hidden sm:block absolute top-20 left-20 w-64 h-64 border border-white/20 rotate-45 rounded-lg"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-48 h-48 border border-white/15 -rotate-12 rounded-lg"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rotate-12 rounded-lg"></div>
        <div className="hidden lg:block absolute bottom-1/3 right-1/3 w-40 h-40 bg-white/5 -rotate-6 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-white px-6 pt-28 sm:pt-32 md:pt-0">
        <div className="inline-block mb-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-white/15 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium border border-white/30 shadow-2xl">
          <span className="text-white/90">Best Financial Consultant</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
          Your Partner in
          <span className="block mt-2 sm:mt-3 text-white">Business Intelligence</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
          Expert financial consulting services to secure your future with tailored
          <span className="hidden sm:inline"> strategies and comprehensive</span>
          <span className="sm:hidden"> strategies &amp; comprehensive</span> solutions for your business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto">
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center w-full sm:w-auto px-7 sm:px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold shadow-2xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
          >
            Let's Connect
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#about" 
            className="inline-flex justify-center items-center w-full sm:w-auto px-7 sm:px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10"></div>
    </section>
  );
}
