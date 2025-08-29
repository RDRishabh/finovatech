import { Link, useLocation } from 'react-router-dom';

// src/components/Navbar.jsx
export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors">
          FINOVATECH.
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          <li>
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors duration-300 py-2 px-1 relative group ${
                isActive('/') ? 'text-primary' : ''
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`hover:text-primary transition-colors duration-300 py-2 px-1 relative group ${
                isActive('/about') ? 'text-primary' : ''
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`hover:text-primary transition-colors duration-300 py-2 px-1 relative group ${
                isActive('/services') ? 'text-primary' : ''
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/why-choose-us" 
              className={`hover:text-primary transition-colors duration-300 py-2 px-1 relative group ${
                isActive('/why-choose-us') ? 'text-primary' : ''
              }`}
            >
              Why Choose Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive('/why-choose-us') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={`hidden md:block px-6 py-2.5 rounded-lg font-medium transition-colors duration-300 shadow-sm ${
            isActive('/contact') 
              ? 'bg-primary text-white' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          Let's Connect
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
