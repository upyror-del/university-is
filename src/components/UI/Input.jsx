import React from 'react';
import './Input.css';

function Input({
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  name,
  step,
  min,
  max
}) {
  const inputId = name ? `field-${name}` : undefined;

  return (
    <div className="ui-input-group">
      {label && <label className="ui-label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        className={`ui-input ${error ? 'ui-input-error' : ''}`}
      />
      {error && <span className="ui-error-msg">{error}</span>}
    </div>
  );
}

export default Input;
