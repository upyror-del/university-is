import React from 'react';
import Card from '../UI/Card';
import './StudentSearch.css';

function StudentSearch({ searchQuery, onSearchChange, filterGroup, onFilterChange, groups }) {
  return (
    <Card padding="sm" className="search-bar-card">
      <div className="search-controls">
        <input
          type="text"
          aria-label="Пошук студентів"
          className="ui-input"
          placeholder="Пошук за іменем або email..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select
          aria-label="Фільтр за групою"
          className="ui-input select-group"
          value={filterGroup}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">Усі групи</option>
          {groups.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>
    </Card>
  );
}

export default StudentSearch;
