import React from 'react';
import './Card.css';

function Card({ title, children, padding = 'md', className = '' }) {
  return (
    <div className={`ui-card ui-card-p-${padding} ${className}`}>
      {title && <h3 className="ui-card-title">{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
