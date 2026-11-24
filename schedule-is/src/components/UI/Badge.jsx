import React from 'react';
import './Badge.css';

// Компонент значка/мітки (stateless)
// Props:
//   text - текст значка
//   type - тип: 'success' | 'warning' | 'danger' | 'info'
function Badge({ text, type = 'info' }) {
  return (
    <span className={`badge badge-${type}`}>
      {text}
    </span>
  );
}

export default Badge;
