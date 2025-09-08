import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  // Newsletter subscription state
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [message, setMessage] = useState('');

  // TODO: Replace with your deployed Google Apps Script Web App URL or API gateway that writes to Google Sheets
  const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbx3VsY7qCuLJMlf4mmMYLr0CrrTULgfrfY8xQ0ZN2AJoZ50HpavAoPblimeO4d8TOsH/exec";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (loading) return;
    setStatus(null);
    setMessage('');

    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(emailTrimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    if (!GOOGLE_SHEET_ENDPOINT) {
      setStatus('error');
      setMessage('Subscription service not configured.');
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
          email: emailTrimmed,
          source: 'footer_newsletter',
          timestamp: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error('Network response was not ok');
      // Optional: parse response if Apps Script returns JSON
      setStatus('success');
      setMessage('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Subscription failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 lg:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid gap-10 md:gap-8 mb-12 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Logo + About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">FINOVATECH</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              Your trusted partner in strategic finance, FP&A excellence, automation, and portfolio management. 
              Unlocking financial clarity and performance for sustainable growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.994 1.488-1.994.219 0 .662.219.662.974 0 .593-.219 1.488-.359 2.323-.219.937.469 1.697 1.406 1.697 1.687 0 2.984-1.781 2.984-4.354 0-2.276-1.634-3.866-3.975-3.866-2.71 0-4.299 2.031-4.299 4.134 0 .219.083.446.186.607a.266.266 0 01.062.317c-.083.219-.271.878-.307.997-.047.177-.177.217-.402.134-1.332-.607-2.17-2.51-2.17-4.044 0-3.002 2.186-5.756 6.305-5.756 3.313 0 5.89 2.365 5.89 5.516 0 3.293-2.077 5.94-4.964 5.94-.969 0-1.881-.507-2.191-1.115 0 0-.507 1.943-.63 2.419-.228.878-.845 1.974-1.26 2.646.951.291 1.959.445 3.005.445C18.624 24.013 24 18.624 24 11.987 24 5.367 18.624.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 flex items-center">
              <div className="w-2 h-6 bg-primary rounded mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 flex items-center">
              <div className="w-2 h-6 bg-primary rounded mr-3"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <div className="flex flex-col">
                    <a href="tel:+919873383046" className="text-gray-300 hover:text-primary">+91 98733 83046</a>
                    <a href="tel:+919873515717" className="text-gray-300 hover:text-primary mt-1">+91 98735 15717</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <p className="text-gray-300">info@finovatech.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  {/* Newsletter Section removed as requested */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} FINOVATECH. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs md:text-sm">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
