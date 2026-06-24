import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import WhyMe from './sections/WhyMe.jsx';
import FeaturedProject from './sections/FeaturedProject.jsx';
import Projects from './sections/Projects.jsx';
import Services from './sections/Services.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WhyMe />
        <FeaturedProject />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
