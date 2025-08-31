// src/components/ServicesIntro.jsx
export default function ServicesIntro() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-14 lg:gap-16">

          {/* Text content container (left) */}
          <div className="lg:w-3/4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 leading-[1.15] tracking-tight">
              <span className="block">Transforming Finance</span>
              <span className="block">and Reporting with</span>
              <span className="block">
                <span className="text-primary">Expertise</span> &amp;{" "}
                <span className="text-primary">Automation</span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Our team provides comprehensive solutions tailored to your unique business needs. With deep expertise and smart use of technology, we transform financial processes, deliver sharper insights, and enable faster, better decisions.
            </p>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-800">
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0"></span>
                <span>CFO Advisory – Strategic guidance for sustainable growth</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0"></span>
                <span>Management Reporting – Clear, actionable insights for leaders</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0"></span>
                <span>Financial Close – Streamlined, accurate, and efficient processes</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0"></span>
                <span>
                  Data &amp; Analytics Solutions – Smarter capture, automation, and
                  reporting across finance, sales, and operations
                </span>
              </li>
            </ul>
          </div>

          {/* Image container (right, same as AboutUs) */}
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-end lg:h-auto">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-64 sm:h-80 lg:h-full">
              {/* Accent background */}
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary rounded-2xl"></div>
              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial consulting and business analytics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
