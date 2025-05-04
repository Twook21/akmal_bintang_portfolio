import { useState, useEffect } from 'react';
import { IoHomeOutline, IoPersonOutline, IoAlbumsOutline, IoPaperPlaneOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import './Navbar.css';

const Navbar = ({ activeLink, setActiveLink, darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  // Check if screen width is mobile
  useEffect(() => {
    const checkMobile = () => {
      setMobileView(window.innerWidth <= 1080);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mendeteksi section yang aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset untuk header
      
      // Mendapatkan semua section dengan ID yang sesuai dengan navLinks
      const sections = navLinks.map(link => {
        const section = document.getElementById(link.id);
        return { id: link.id, offsetTop: section ? section.offsetTop : 0, offsetHeight: section ? section.offsetHeight : 0 };
      });
      
      // Menentukan section yang aktif berdasarkan posisi scroll
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          if (activeLink !== section.id) {
            setActiveLink(section.id);
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger saat pertama kali komponen di-mount untuk set active link awal
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink, setActiveLink]);

  // Handle active link
  const handleSetActive = (link) => {
    setActiveLink(link);
    
    // Scroll ke section yang sesuai
    const section = document.getElementById(link);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // offset untuk header
        behavior: 'smooth'
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home', icon: <IoHomeOutline /> },
    { id: 'about', label: 'About', icon: <IoPersonOutline /> },
    { id: 'portofolio', label: 'Portfolio', icon: <IoAlbumsOutline /> },
    { id: 'contact', label: 'Contact', icon: <IoPaperPlaneOutline /> },
  ];

  // Calculating indicator position more accurately for mobile
  const getIndicatorPosition = () => {
    const index = navLinks.findIndex(link => link.id === activeLink);
    // Jika tidak ditemukan (misalnya saat awal loading), default ke 'home'
    const activeIndex = index !== -1 ? index : 0;
    
    // Menghitung posisi tengah dari setiap item
    // Untuk 4 item di 100% width container, posisinya akan 12.5%, 37.5%, 62.5%, 87.5%
    const positions = [12.5, 37.5, 62.5, 87.5];
    return `${positions[activeIndex]}%`;
  };

  // Render mobile dan desktop navbar secara terpisah
  if (mobileView) {
    // Mobile Navbar
    return (
      <>
        {/* Tombol DarkMode terpisah di pojok kanan atas */}
        <button 
          className="mobile-dark-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
        </button>
        
        {/* Mobile Navbar di bawah */}
        <header className="navbar mobile">
          <nav className="mobile-nav">
            <div className="mobile-nav-container">
              <ul>
                {navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={activeLink === link.id ? 'active' : ''}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSetActive(link.id);
                      }}
                    >
                      <span className="icon">
                        {link.icon}
                      </span>
                      <span className="text">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
                <div 
                  className="indicator"
                  style={{ left: getIndicatorPosition() }}
                ></div>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
  
  // Desktop Navbar
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-custom">
        <div className="logo">
          <h1>Mal's Portfolio</h1>
        </div>
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActive(link.id);
                  }}
                  className={activeLink === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Dark Mode Toggle for Desktop */}
            <li>
              <button 
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="dark-mode-toggle"
              >
                {darkMode ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;