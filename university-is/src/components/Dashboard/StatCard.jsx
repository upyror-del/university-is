import React from 'react';
import './StatCard.css';

// Компонент картки статистики
// Props:
//   title  - назва показника
//   value  - значення
//   change - зміна (наприклад, +12%)
//   trend  - напрямок: 'up' | 'down'
//   icon   - іконка
//   color  - колір акценту: 'blue' | 'green' | 'purple' | 'orange'
function StatCard({ title, value, change, trend, icon, color }) {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-card-header">
        <span className="stat-card-icon">{icon}</span>
        <span className={`stat-card-trend ${trend === 'up'
          ? 'trend-up' : 'trend-down'}`}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </span>
      </div>
      <div className="stat-card-body">
        <h2 className="stat-card-value">{value}</h2>
        <p className="stat-card-title">{title}</p>
      </div>
    </div>
  );
}

export default StatCard;
