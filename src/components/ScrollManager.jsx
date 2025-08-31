import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Handles scrolling to top on route change and smooth scrolling to hash targets with navbar offset
export default function ScrollManager() {
  const location = useLocation();

  // Scroll on route / hash change
  useEffect(() => {
    const NAV_OFFSET = 80; // matches pt-20 (~80px) in <main>

    const scrollToHash = (hash) => {
      if (!hash) return false;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
        return true;
      }
      return false;
    };

    // If there's a hash try to scroll to it (retry a few times in case component not yet mounted)
    if (location.hash) {
      let attempts = 0;
      const maxAttempts = 10;
      const tryScroll = () => {
        attempts += 1;
        if (scrollToHash(location.hash)) return;
        if (attempts < maxAttempts) requestAnimationFrame(tryScroll);
      };
      tryScroll();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Intercept same-page hash anchor clicks to apply offset
  useEffect(() => {
    const NAV_OFFSET = 80;
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (hash.length <= 1) return; // ignore just '#'
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.history.replaceState(null, '', hash); // update hash without jump
        window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
