export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 151, 167, 0.9), rgba(0, 151, 167, 0.8)),
          url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Analytics Dashboard Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/90"></div>
      
      {/* Dashboard Elements (hidden on small screens) */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-48 h-32 border border-white/20">
          <div className="text-white/60 text-sm mb-2">Page Views</div>
          <div className="text-white text-2xl font-bold">223</div>
        </div>
        <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-48 h-32 border border-white/20">
          <div className="text-white/60 text-sm mb-2">Total Impressions</div>
          <div className="text-white text-2xl font-bold">17.6K</div>
        </div>
        <div className="absolute bottom-20 left-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-48 h-32 border border-white/20">
          <div className="text-white/60 text-sm mb-2">Average CTR</div>
          <div className="text-white text-2xl font-bold">25.2</div>
        </div>
        <div className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 w-48 h-32 border border-white/20">
          <div className="text-white/60 text-sm mb-2">Average Position</div>
          <div className="text-white text-2xl font-bold">4.8</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-white px-6 pt-28 md:pt-0">
        <div className="inline-block mb-6 md:mb-8 px-6 md:px-8 py-2.5 md:py-3 bg-white/15 backdrop-blur-md rounded-full text-xs md:text-sm font-medium border border-white/30 shadow-2xl">
          <span className="text-white/90">Who We Are</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
          About <span className="block sm:inline">FINOVATECH</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
          We are a team of accomplished finance and analytics veterans with roots in Big 4 firms, dedicated to transforming how businesses approach financial strategy and performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#journey"
            className="inline-flex justify-center items-center w-full sm:w-auto px-7 sm:px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold shadow-2xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
          >
            Our Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
}
