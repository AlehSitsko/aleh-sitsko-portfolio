import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { LINKS } from '../data/links';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#projects',   label: 'Projects'   },
  { href: '#services',   label: 'Services'   },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact'    },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar-inner container">
        <a href="#" className="navbar-brand" onClick={close}>
          <div className="brand-dot" aria-hidden="true" />
          Aleh Sitsko
        </a>

        <nav className="navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="btn btn-ghost btn-sm icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost btn-sm icon-btn" aria-label="GitHub profile">
            <GithubIcon size={16} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost btn-sm icon-btn" aria-label="LinkedIn profile">
            <LinkedinIcon size={16} />
          </a>
          <a href={LINKS.email} className="btn btn-outline btn-sm">
            <Mail size={14} />
            Contact
          </a>
        </div>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="mobile-overlay" onClick={close} aria-hidden="true" />
          <nav className="mobile-menu" role="dialog" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="mobile-link" onClick={close}>{label}</a>
            ))}
            <div className="mobile-divider" />
            <div className="mobile-actions">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" onClick={close}>
                <GithubIcon size={15} /> GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" onClick={close}>
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a href={LINKS.email} className="btn btn-primary" onClick={close}>
                <Mail size={15} /> Contact Me
              </a>
              <button className="btn btn-ghost theme-mobile-btn" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
