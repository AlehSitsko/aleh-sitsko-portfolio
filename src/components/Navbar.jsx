import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#projects',   label: 'Projects' },
  { href: '#services',   label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme !== 'light');

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo-dot" />
          Aleh Sitsko
        </a>

        <nav className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="navbar-link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
          <a
            href="mailto:sitskoaleh@gmail.com"
            className="btn btn-primary navbar-cta"
            onClick={handleNavClick}
          >
            Hire Me
          </a>
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
