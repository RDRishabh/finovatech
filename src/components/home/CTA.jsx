// src/components/CTA.jsx
export default function CTA() {
  return (
    <section className="py-14 lg:py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Background accent */}
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full bg-primary rounded-3xl opacity-20"></div>

          {/* Main CTA container */}
          <div className="relative bg-primary text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
              {/* Content */}
              <div className="w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
                  Ready to transform your financial operations?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Partner with us to craft smart, custom strategies that lead to clear, measurable results and sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
