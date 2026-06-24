import { useEffect } from 'react';
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

export default function App() {
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <>
      <Navbar />
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
