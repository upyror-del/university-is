import React from 'react';
import './Card.css';

// Компонент-обгортка для карток (stateless)
// Props:
//   title     - заголовок картки
//   children  - вміст картки
//   padding   - внутрішні відступи: 'none' | 'sm' | 'md' | 'lg'
//   className - додаткові класи
function Card({ title, children, padding = 'md', className = '' }) {
  return (
    <div className={`card card-padding-${padding} ${className}`}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
