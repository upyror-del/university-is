import React from 'react';
import './RecentActivity.css';

// Компонент останньої активності
// Props:
//   activities - масив подій { id, action, name, time, type }
function RecentActivity({ activities }) {
  const typeIcons = {
    success: '✅',
    info: 'ℹ️',
    warning: '⚠️',
    danger: '❌'
  };

  return (
    <div className="activity-list">
      {activities.map(activity => (
        <div key={activity.id} className="activity-item">
          <div className={`activity-icon activity-icon-${activity.type}`}>
            {typeIcons[activity.type]}
          </div>
          <div className="activity-content">
            <p className="activity-action">{activity.action}</p>
            <p className="activity-name">{activity.name}</p>
          </div>
          <span className="activity-time">{activity.time}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;
