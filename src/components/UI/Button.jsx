import React from 'react';
import './Button.css';

function Button({
  text,
  onClick,
  type = 'primary',
  size = 'md',
  disabled = false,
  htmlType = 'button'
}) {
  const classNames = [
    'btn',
    `btn-${type}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      type={htmlType}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
