import React from 'react';
import './StatCard.css';

// Картка статистики (адаптовано з University IS: замість тренду — пояснювальна примітка)
// Props:
//   title - назва показника
//   value - значення
//   note  - додатковий рядок під назвою
//   icon  - іконка
//   color - колір акценту: 'blue' | 'green' | 'purple' | 'orange'
function StatCard({ title, value, note, icon, color }) {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-card-header">
        <span className="stat-card-icon">{icon}</span>
      </div>
      <div className="stat-card-body">
        <h2 className="stat-card-value">{value}</h2>
        <p className="stat-card-title">{title}</p>
        {note && <p className="stat-card-note">{note}</p>}
      </div>
    </div>
  );
}

export default StatCard;
