import React from 'react';
import './Header.css';

function Header({ activePage, onNavigate }) {
  return (
    <header className="layout-header">
      <div className="header-inner">
        <div className="header-logo" onClick={() => onNavigate('dashboard')}>
          <span className="logo-icon">🏛️</span>
          <span>University IS</span>
        </div>

        <nav className="header-nav">
          <button
            className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`nav-link ${activePage === 'students' ? 'active' : ''}`}
            onClick={() => onNavigate('students')}
          >
            Студенти
          </button>
        </nav>

        <div className="header-user">
          <div className="user-avatar">АД</div>
          <span className="user-name">Адміністратор</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
