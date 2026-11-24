import React from 'react';
import './Footer.css';

// Підвал сторінки (без props)
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} РозкладІС — Інформаційна система розкладу занять
        </p>
        <p className="footer-version">
          Версія 1.0.0 | React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;
