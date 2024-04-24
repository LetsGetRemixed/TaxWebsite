
import React from 'react';
import '../css/landingcss.css';
const Header = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      };
    
      return (
        <header className="header-section" style={{ 
            backgroundImage: 'url(/images/cover.jpeg)' 
          }}>
          <div className="header-content">
            <h1>Financial Consulting, with a Personal Touch</h1>
            <button onClick={scrollToContact} className="contact-button">
              GET IN TOUCH
            </button>
          </div>
        </header>
      );
    };

  export default Header;