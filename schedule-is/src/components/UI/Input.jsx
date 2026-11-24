import React, { useId } from 'react';
import './Input.css';

// Базовий компонент поля введення
// Props:
//   label       - підпис поля
//   type        - тип input
//   value       - поточне значення
//   onChange    - обробник зміни
//   placeholder - підказка
//   error       - текст помилки
//   required    - обов'язкове поле (показує *)
//   disabled    - чи заблоковане поле
//   name        - ім'я поля
//   ...rest     - решта атрибутів input (step, min, max, aria-label)
function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  name,
  ...rest
}) {
  // унікальний id, щоб підпис <label> був прив'язаний до поля
  const inputId = useId();

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`input-field ${error ? 'input-error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        name={name}
        {...rest}
      />
      {error && (
        <span className="input-error-message">{error}</span>
      )}
    </div>
  );
}

export default Input;
