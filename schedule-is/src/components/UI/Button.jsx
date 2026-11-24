import React from 'react';
import './Button.css';

// Базовий компонент кнопки (stateless)
// Props:
//   text      - текст кнопки
//   onClick   - обробник кліку
//   type      - вигляд: 'primary' | 'secondary' | 'danger' | 'success'
//   size      - розмір: 'sm' | 'md' | 'lg'
//   disabled  - чи заблокована кнопка
//   fullWidth - чи займає всю ширину
//   htmlType  - HTML-тип кнопки: 'button' | 'submit'
//   children  - вміст замість text
function Button({
  text,
  onClick,
  type = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  htmlType = 'button',
  children,
  ...rest
}) {
  const classNames = [
    'btn',
    `btn-${type}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    disabled ? 'btn-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      type={htmlType}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children || text}
    </button>
  );
}

export default Button;
