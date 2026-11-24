import React from 'react';
import './Sidebar.css';

// Бокова панель зі швидкою статистикою (рахується з поточного стану students)
// Props:
//   students - масив студентів (з App)
//   groups   - список груп
function Sidebar({ students, groups }) {
  const total = students.length;
  const active = students.filter(s => s.status === 'active').length;
  const avgGpa = total
    ? (students.reduce((sum, s) => sum + Number(s.gpa), 0) / total).toFixed(2)
    : '—';

  const groupCounts = groups
    .map(group => ({
      group,
      count: students.filter(s => s.group === group).length
    }))
    .filter(item => item.count > 0);

  return (
    <aside className="sidebar" aria-label="Швидка статистика">
      <section className="sidebar-section">
        <h2 className="sidebar-title">Швидка статистика</h2>
        <ul className="sidebar-list">
          <li><span>Студентів</span><strong>{total}</strong></li>
          <li><span>Активних</span><strong>{active}</strong></li>
          <li><span>Середній GPA</span><strong>{avgGpa}</strong></li>
        </ul>
      </section>

      <section className="sidebar-section">
        <h2 className="sidebar-title">Студентів за групами</h2>
        <ul className="sidebar-list">
          {groupCounts.map(item => (
            <li key={item.group}>
              <span>{item.group}</span>
              <strong>{item.count}</strong>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
