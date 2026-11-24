import React from 'react';
import Input from '../UI/Input';
import './StudentSearch.css';

// Компонент пошуку та фільтрації студентів
// Props:
//   searchQuery    - поточний пошуковий запит
//   onSearchChange - обробник зміни пошуку
//   filterGroup    - поточна група для фільтрації
//   onFilterChange - обробник зміни фільтра
//   groups         - список доступних груп
function StudentSearch({
  searchQuery,
  onSearchChange,
  filterGroup,
  onFilterChange,
  groups
}) {
  return (
    <div className="student-search">
      <div className="student-search-input">
        <Input
          placeholder="🔍 Пошук за ім'ям або email..."
          aria-label="Пошук студентів"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="student-search-filter">
        <select
          className="student-search-select"
          aria-label="Фільтр за групою"
          value={filterGroup}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">Всі групи</option>
          {groups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StudentSearch;
