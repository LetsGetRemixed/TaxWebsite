import React from 'react';
import '../css/Footer.css'; // Make sure to import the Footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Clean Power Pro's</span>
        <div className="footer-rights">
          <p>Copyright © 2024 Clean Power Pro's - All Rights Reserved.</p>
          <p>Website Created by: Colby Person</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;