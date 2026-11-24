import React from 'react';
import './StatCard.css';

function StatCard({ title, value, change, trend, icon, color }) {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <span className="stat-icon" style={{ backgroundColor: `${color}18`, color }}>
          {icon}
        </span>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
        {trend === 'up' ? '▲' : '▼'} {change} за місяць
      </div>
    </div>
  );
}

export default StatCard;
