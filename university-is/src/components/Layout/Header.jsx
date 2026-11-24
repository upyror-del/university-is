import React from 'react';
import './Header.css';

// Компонент шапки сторінки
// Props:
//   activePage - поточна активна сторінка ('dashboard' | 'students')
//   onNavigate - функція навігації між сторінками
function Header({ activePage, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: '📊 Дашборд' },
    { id: 'students', label: '🎓 Студенти' }
  ];

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">🏛️</span>
        <div className="header-brand-text">
          <h1 className="header-title">УнівІС</h1>
          <p className="header-subtitle">Інформаційна система університету</p>
        </div>
      </div>

      <nav className="header-nav" aria-label="Основна навігація">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`header-nav-item ${activePage === item.id
              ? 'header-nav-item-active' : ''}`}
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-user">
        <div className="header-user-avatar">АД</div>
        <div className="header-user-info">
          <span className="header-user-name">Адміністратор</span>
          <span className="header-user-role">Системний адмін</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
