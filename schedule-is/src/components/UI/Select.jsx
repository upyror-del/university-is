import React, { useId } from 'react';
import './Select.css';

// Базовий компонент випадаючого списку (stateless)
// Props:
//   label       - підпис поля
//   value       - вибране значення
//   onChange    - обробник зміни
//   options     - масив { value, label }
//   placeholder - текст порожнього пункту (якщо не заданий — порожнього пункту немає)
//   error       - текст помилки
//   required    - показує *
//   ...rest     - решта атрибутів select (name, disabled, aria-label)
function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required = false,
  ...rest
}) {
  const selectId = useId();

  return (
    <div className="select-wrapper">
      {label && (
        <label className="select-label" htmlFor={selectId}>
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`select-field ${error ? 'select-error' : ''}`}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="select-error-message">{error}</span>}
    </div>
  );
}

export default Select;
