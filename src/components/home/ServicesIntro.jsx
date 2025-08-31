// src/components/ServicesIntro.jsx
export default function ServicesIntro() {
  return (
    <section id="services" className="py-20 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Image with layered design */}
          <div className="lg:basis-[42%] flex justify-center lg:justify-start lg:self-center">
            <div className="relative w-[500px] max-w-full h-[450px]">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial consulting and business analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:flex-1 max-w-[620px]">
            <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-[1.1] tracking-tight">
              Transforming Finance and Reporting<br />
              with <span className="text-primary">Expertise</span> and <span className="text-primary">Automation</span>
            </h2>
            <p className="text-base text-gray-700 mb-10 leading-relaxed">
              Our team of experts provide comprehensive solutions tailored to your unique business needs. With deep expertise and smart use of technology, we transform financial processes, deliver sharper insights, and enable faster, better decisions.CFO advisory services
            </p>
            <ul className="space-y-4 text-base text-gray-800">
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span>CFO Advisory – Strategic guidance for sustainable growth</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span>Management Reporting – Clear, actionable insights for leaders</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span>Financial Close – Streamlined, accurate, and efficient processes</span>
              </li>
              <li className="flex items-start">
                <span className="mt-2 mr-3 w-2 h-2 rounded-full bg-primary inline-block"></span>
                <span>Data &amp; Analytics Solutions – Smarter capture, automation, and reporting across finance, sales, and operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
