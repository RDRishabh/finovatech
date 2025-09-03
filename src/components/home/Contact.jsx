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

        {/* Contact Form Section (cards removed, info merged to left panel) */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-4 lg:mt-2">
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
              {/* Direct Contact Methods */}
              <div className="space-y-5 sm:space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Speak directly with our experts</p>
                    <a href="tel:+919876543210" className="text-primary font-semibold text-sm sm:text-base hover:underline">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Send us your inquiries</p>
                    <a href="mailto:info@finovatech.com" className="text-primary font-semibold text-sm sm:text-base hover:underline">info@finovatech.com</a>
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
