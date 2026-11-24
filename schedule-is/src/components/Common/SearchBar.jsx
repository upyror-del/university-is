import React from 'react';
import Input from '../UI/Input';

// Універсальний рядок пошуку для сторінок-списків (групи, викладачі, аудиторії)
// Props:
//   value       - поточний запит
//   onChange    - отримує новий текст запиту
//   placeholder - підказка
//   label       - доступна назва поля (для скрінрідерів)
function SearchBar({ value, onChange, placeholder, label }) {
  return (
    <Input
      placeholder={placeholder}
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
