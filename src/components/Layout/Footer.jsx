import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="layout-footer">
      <div className="footer-inner">
        <span>&copy; {new Date().getFullYear()} Інформаційна система університету</span>
        <span>Версія 1.0.0 | React Modular Architecture</span>
      </div>
    </footer>
  );
}

export default Footer;
