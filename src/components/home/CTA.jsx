// src/components/CTA.jsx
export default function CTA() {
  return (
    <section className="py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Background accent */}
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary rounded-3xl opacity-20"></div>
          
          {/* Main CTA container */}
          <div className="relative bg-primary text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  Ready to transform your financial operations?
                </h2>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  Partner with us to craft smart, custom strategies that lead to clear, measurable results and 
                  sustainable business growth.
                </p>
              </div>

              {/* CTA Button */}
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Schedule a Consultation
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
