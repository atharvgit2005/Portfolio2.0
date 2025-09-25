import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onToggleTheme, theme }) => {
  // State to track if navbar should have background (when scrolled)
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll events and update navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  // Navigation items (in-page sections on home route)
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle smooth scrolling to sections
  const handleNavClick = (e, href) => {
    e.preventDefault();
    // If not on home, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/${href}`; // fallback: reload to home with hash
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="brand"
        >
          Atharv Paharia
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
          {/* Resume separate page */}
          <Link to="/resume" className="nav-link">Resume</Link>
          {/* Theme toggle */}
          <button
            className="btn btn-outline"
            style={{ padding: '8px 12px', marginLeft: 12 }}
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`container mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="mobile-link"
          >
            {item.name}
          </a>
        ))}
        <Link to="/resume" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
        <button
          className="btn btn-outline"
          style={{ width: '100%', marginTop: 8 }}
          onClick={() => { onToggleTheme && onToggleTheme(); setIsMobileMenuOpen(false); }}
        >
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
