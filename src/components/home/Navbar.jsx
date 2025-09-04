import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// src/components/Navbar.jsx
export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Why Choose Us', to: '/why-choose-us' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Close on outside click (mobile panel)
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors">
          FINOVATECH.
        </Link> */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors"
          aria-label="Finovatech Home"
        >
          <img
            src="/finovatech_logo_01.png"
            alt="Finovatech Logo"
            className="h-8 w-auto md:h-9 lg:h-10 object-contain select-none"
            draggable="false"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`hover:text-primary transition-colors duration-300 py-2 px-1 relative group ${isActive(item.to) ? 'text-primary' : ''}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
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
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[60]"
            aria-hidden="true"
        ></div>
      )}

      {/* Mobile Slide-in Drawer */}
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        className={`md:hidden fixed top-0 right-0 h-full w-[78%] max-w-sm bg-white shadow-xl z-[70] transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900" onClick={() => setOpen(false)}>
            FINOVATECH.
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1">
          <ul className="flex flex-col px-6 py-6 space-y-4 font-medium text-gray-700">
            {navItems.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block w-full py-2 px-2 rounded-lg transition-colors ${isActive(item.to) ? 'text-primary font-semibold bg-primary/5' : 'hover:text-primary hover:bg-gray-50'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block text-center w-full px-4 py-3 rounded-lg font-medium bg-primary text-white shadow-sm hover:bg-primary/90 transition-colors"
              >
                Let's Connect
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">© {new Date().getFullYear()} Finovatech. All rights reserved.</div>
      </div>
    </nav>
  );
}
