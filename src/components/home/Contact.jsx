export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-50 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 text-gray-900 leading-tight tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-1">
            Ready to transform your financial operations? Contact us today and let's explore how we can help your business thrive.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 lg:mb-16">
          {/* Phone Card */}
          <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-2">Speak directly with our experts</p>
            <p className="text-primary font-semibold text-sm sm:text-base">+91 98765 43210</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-2">Send us your inquiries</p>
            <p className="text-primary font-semibold text-sm sm:text-base">info@finovatech.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Left Side - Contact Info */}
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-2xl transform rotate-1 sm:rotate-2"></div>
            <div className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6 leading-snug">
                Let's Start a <span className="text-primary">Conversation</span>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                We're here to help you achieve your financial goals. Whether you need consulting, automation, or strategic planning, our team is ready to assist.
              </p>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Response Time</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Free Consultation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Initial assessment at no cost</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Implementation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Fast project delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-2xl transform -rotate-1 sm:-rotate-2"></div>
            <form className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6" onSubmit={(e)=>e.preventDefault()} aria-label="Contact form">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Doe" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="john.doe@company.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors text-sm sm:text-base" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Your Company Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="message">How can we help you?</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project or requirements..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors resize-none text-sm sm:text-base"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base flex items-center justify-center">
                <span>Send Message</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
