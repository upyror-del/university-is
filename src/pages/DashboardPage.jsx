import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import { statsData, recentActivityData } from '../data/mockData';
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div>
      <h2 className="page-title">Панель управління (Dashboard)</h2>
      <div className="stats-grid">
        {statsData.map((stat) => (
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
      <RecentActivity activities={recentActivityData} />
    </div>
  );
}

export default DashboardPage;
