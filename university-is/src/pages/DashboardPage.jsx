import React from 'react';
import Card from '../components/UI/Card';
import StatCard from '../components/Dashboard/StatCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import { statsData, recentActivityData } from '../data/mockData';

// Сторінка Dashboard: 4 картки статистики + останні події
function DashboardPage() {
  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Дашборд</h2>
          <p className="page-subtitle">Загальна інформація про систему</p>
        </div>
      </div>

      <div className="stats-grid">
        {statsData.map(stat => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <Card title="Останні події">
        <RecentActivity activities={recentActivityData} />
      </Card>
    </div>
  );
}

export default DashboardPage;
