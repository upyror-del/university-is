import React from 'react';
import Card from '../UI/Card';
import './RecentActivity.css';

function RecentActivity({ activities }) {
  return (
    <Card title="Останні події системи" padding="md">
      <ul className="activity-list">
        {activities.map((item) => (
          <li key={item.id} className="activity-item">
            <span className={`activity-dot dot-${item.type}`}></span>
            <div className="activity-content">
              <div className="activity-action">{item.action}</div>
              <div className="activity-meta">{item.name}</div>
            </div>
            <span className="activity-time">{item.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RecentActivity;
