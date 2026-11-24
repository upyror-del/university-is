import React from 'react';
import './Footer.css';

// Компонент підвалу сторінки (без props)
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} УнівІС — Інформаційна система університету
        </p>
        <p className="footer-version">
          Версія 1.0.0 | React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;
