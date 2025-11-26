import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import Atmosphere from './components/Atmosphere';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Smooth scroll wrapper could be added here, but we'll use native CSS smooth scroll + Framer Motion
const App: React.FC = () => {
  
  useEffect(() => {
    // Add a class to body to ensure background is set
    document.body.classList.add('bg-noir-bg', 'text-noir-text');
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-noir-bg selection:bg-noir-gold selection:text-noir-bg">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <Atmosphere />
        <About />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;