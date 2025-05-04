import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeLink, setActiveLink] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Menerapkan darkMode ke semua komponen
  useEffect(() => {
    // Tambahkan class ke body untuk styling global jika dibutuhkan
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar 
        activeLink={activeLink} 
        setActiveLink={setActiveLink} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;