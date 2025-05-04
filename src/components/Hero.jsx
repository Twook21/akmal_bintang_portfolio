import { FaYoutube, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = ({ darkMode = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "a 3D Design Architecture",
    "a Web Developer",
    "a Graphic Designer",
    "Proficient in Microsoft Office"
  ];
  
  // Simplified typing effect with single useEffect
  useEffect(() => {
    // Function to handle typing logic
    const typeText = () => {
      const currentPhrase = phrases[currentIndex];
      
      // Typing
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        
        // If we've typed the full phrase, start deleting after a pause
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } 
      // Deleting
      else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        
        // If we've deleted everything, move to next phrase
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
          return;
        }
      }
    };
    
    // Set appropriate typing speed
    const typingSpeed = isDeleting ? 75 : 150;
    
    // Set timeout for each typing step
    const timerId = setTimeout(typeText, typingSpeed);
    
    // Cleanup
    return () => clearTimeout(timerId);
  }, [displayText, currentIndex, isDeleting, phrases]);
  
  return (
    <section id="home" className={`pt-24 md:min-h-screen flex items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content Description */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`font-gwendolyn text-2xl md:text-3xl ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} block mb-2 drop-shadow-md`}>I'am</span>
              Akmal Bintang Budiawan
            </h1>
            <p className="text-lg md:text-xl mb-6">
              <span className="font-medium inline-block min-h-8" style={{ minWidth: '250px' }}>
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            <a 
              href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=akmalbintang33@gmail.com"
              className={`primary-btn inline-block ${darkMode ? 'bg-yellow-500 hover:bg-yellow-400' : ''}`}
            >
              Let's talk
            </a>
          </div>
          
          {/* Content Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/img/my image.png" 
              alt="Akmal Bintang Budiawan" 
              className={`w-full max-w-md ${darkMode ? 'filter brightness-95' : ''}`}
            />
          </div>
        </div>
      </div>
      
      {/* Social Media Sidebar */}
      <aside className="fixed right-0 top-0 h-full flex items-center z-40">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-primary'} rounded-l-xl px-3 py-6 shadow-lg`}>
          <ul className="flex flex-col gap-6">
            <li>
              <a 
                href="https://www.youtube.com/channel/UCOAidpHtd1tSUpsQK8eSoMw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-300 transition-colors"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/akmal-bintang-budiawan-910916280/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-300 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/tw0ok_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-300 transition-colors"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Twook21" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-blue-300 transition-colors"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Hero;