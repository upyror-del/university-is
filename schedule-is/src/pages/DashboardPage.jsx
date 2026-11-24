import React from 'react';
import Card from '../components/UI/Card';
import StatCard from '../components/Dashboard/StatCard';
import RecentActivity from '../components/Dashboard/RecentActivity';
import WeekLoad from '../components/Dashboard/WeekLoad';
import { lessonsPerDay, occupancyPercent } from '../utils/schedule';

// Dashboard: показники рахуються з поточного стану системи
// Props: groups, teachers, rooms, lessons, activities
function DashboardPage({ groups, teachers, rooms, lessons, activities }) {
  const totalStudents = groups.reduce((sum, g) => sum + g.studentsCount, 0);
  const activeTeachers = new Set(lessons.map(l => l.teacherId)).size;
  const totalSeats = rooms.reduce((sum, r) => sum + r.capacity, 0);

  const stats = [
    { id: 1, title: 'Груп', value: groups.length, note: `${totalStudents} студентів`, icon: '👥', color: 'blue' },
    { id: 2, title: 'Викладачів', value: teachers.length, note: `${activeTeachers} ведуть заняття`, icon: '👨‍🏫', color: 'green' },
    { id: 3, title: 'Аудиторій', value: rooms.length, note: `${totalSeats} місць`, icon: '🏫', color: 'purple' },
    { id: 4, title: 'Занять на тиждень', value: lessons.length, note: `Аудиторний фонд зайнято на ${occupancyPercent(lessons.length, rooms.length)}%`, icon: '🗓️', color: 'orange' }
  ];

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Дашборд</h2>
          <p className="page-subtitle">Стан розкладу на поточний семестр</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map(stat => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            note={stat.note}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="dashboard-grid">
        <Card title="Навантаження за днями тижня">
          <WeekLoad data={lessonsPerDay(lessons)} />
        </Card>
        <Card title="Останні події">
          <RecentActivity activities={activities} />
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
