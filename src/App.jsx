import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import FeaturedProject from './sections/FeaturedProject.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Certification from './sections/Certification.jsx';
import Experience from './sections/Experience.jsx';
import Services from './sections/Services.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import EmsCaseStudy from './sections/EmsCaseStudy.jsx';
import NexvoraCaseStudy from './sections/NexvoraCaseStudy.jsx';
import './styles/global.css';

function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  return saved || 'light';
}

// Minimal hash routing (no router dependency): #/ems opens the case-study page,
// anything else is the single-page portfolio.
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const route = useHashRoute();
  const isEms = route === '#/ems';
  const isNexvora = route === '#/nexvora';
  const isCaseStudy = isEms || isNexvora;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => { if (isCaseStudy) window.scrollTo(0, 0); }, [route, isCaseStudy]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {isCaseStudy ? (
        <main>{isNexvora ? <NexvoraCaseStudy /> : <EmsCaseStudy />}</main>
      ) : (
        <main>
          <Hero />
          <About />
          <FeaturedProject />
          <Projects />
          <Skills />
          <Certification />
          <Experience />
          <Services />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
