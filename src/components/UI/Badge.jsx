import React from 'react';
import './Badge.css';

function Badge({ text, type = 'info' }) {
  return <span className={`ui-badge ui-badge-${type}`}>{text}</span>;
}

export default Badge;
