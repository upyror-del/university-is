import React from 'react';
import './Sidebar.css';

// Бокова панель навігації
// Props:
//   activePage - поточна сторінка
//   onNavigate - перехід на іншу сторінку (отримує id)
//   counts     - кількість записів для лічильників { schedule, groups, teachers, rooms }
function Sidebar({ activePage, onNavigate, counts }) {
  const navItems = [
    { id: 'dashboard', label: '📊 Дашборд' },
    { id: 'schedule', label: '🗓️ Розклад', count: counts.schedule },
    { id: 'groups', label: '👥 Групи', count: counts.groups },
    { id: 'teachers', label: '👨‍🏫 Викладачі', count: counts.teachers },
    { id: 'rooms', label: '🏫 Аудиторії', count: counts.rooms }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Основна навігація">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${activePage === item.id
              ? 'sidebar-item-active' : ''}`}
            aria-current={activePage === item.id ? 'page' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.label}</span>
            {item.count !== undefined && (
              <span className="sidebar-count">{item.count}</span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
