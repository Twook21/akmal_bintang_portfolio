import React from 'react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-4 text-center text-white ${
      darkMode ? 'bg-gray-800' : 'bg-primary'
    }`}>
      <div className="container-custom">
        <p>&copy; {currentYear} Akmal Bintang Budiawan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;