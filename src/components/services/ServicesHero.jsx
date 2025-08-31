export default function ServicesHero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.85), rgba(0, 128, 128, 0.85)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
          <span className="block">Comprehensive</span>
          <span className="block">Financial Services</span>
        </h1>

        {/* Description */}
        <p className="text-white/90 text-sm sm:text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-1">
          From strategic planning to operational excellence, we deliver high-impact 
          financial solutions tailored to support your business at every stage of growth.
        </p>

        {/* 4 CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("strategic-finance")}
            className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Strategic Finance & FP&A
          </button>
          <button
            onClick={() => scrollToSection("management-reporting")}
            className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Management Reporting
          </button>
          <button
            onClick={() => scrollToSection("bi-analytics")}
            className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
          >
            BI & Analytics
          </button>
          <button
            onClick={() => scrollToSection("private-equity")}
            className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Private Equity Services
          </button>
        </div>
      </div>
    </section>
  );
}
