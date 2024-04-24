import React, { useState, useEffect } from 'react';
import '../css/Navbar.css'; // Import the Navbar CSS

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    let navbarClasses = ['navbar'];
    if (scrolled) {
      navbarClasses.push('scrolled');
    }


    return (
        <nav className={navbarClasses.join(' ')}>
        <div className="navbar-logo">
        <a href="/">
          <img src="/images/Logo.png" alt="Clean Power" />
          </a> 
        </div>
        <div className="navbar-links">
          <a href="/" style={{fontWeight: 'bold'}}>Home</a>
          <a href="/faq">FAQ</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;