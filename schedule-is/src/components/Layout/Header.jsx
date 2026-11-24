import React from 'react';
import { SEMESTER_LABEL } from '../../data/constants';
import './Header.css';

// Шапка сторінки: назва системи, поточний семестр, користувач (без props)
function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">🗓️</span>
        <div className="header-brand-text">
          <h1 className="header-title">РозкладІС</h1>
          <p className="header-subtitle">Інформаційна система розкладу занять</p>
        </div>
      </div>

      <div className="header-semester">
        <span className="header-semester-label">Поточний семестр</span>
        <strong className="header-semester-value">{SEMESTER_LABEL}</strong>
      </div>

      <div className="header-user">
        <div className="header-user-avatar">ДР</div>
        <div className="header-user-info">
          <span className="header-user-name">Диспетчер розкладу</span>
          <span className="header-user-role">Навчальний відділ</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
