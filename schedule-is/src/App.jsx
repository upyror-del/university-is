import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import GroupsPage from './pages/GroupsPage';
import TeachersPage from './pages/TeachersPage';
import RoomsPage from './pages/RoomsPage';
import {
  groupsData,
  teachersData,
  roomsData,
  lessonsData,
  recentActivityData
} from './data/mockData';
import { uid, describeLesson, shortName } from './utils/schedule';
import './App.css';

// Кореневий компонент: увесь глобальний стан системи + композиція сторінки
function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [groups, setGroups] = useState(groupsData);
  const [teachers, setTeachers] = useState(teachersData);
  const [rooms, setRooms] = useState(roomsData);
  const [lessons, setLessons] = useState(lessonsData);
  const [activities, setActivities] = useState(recentActivityData);

  // Запис у журнал подій (остання подія — зверху, зберігаємо 8 останніх)
  const logActivity = (action, name, type = 'info') => {
    setActivities(prev => [
      { id: uid('a'), action, name, time: 'щойно', type },
      ...prev
    ].slice(0, 8));
  };

  // ----- Заняття -----
  const handleAddLesson = (lesson) => {
    setLessons(prev => [...prev, lesson]);
    logActivity('Заняття додано до розкладу', describeLesson(lesson, groups), 'success');
  };

  const handleDeleteLesson = (id) => {
    const lesson = lessons.find(l => l.id === id);
    setLessons(prev => prev.filter(l => l.id !== id));
    if (lesson) {
      logActivity('Заняття скасовано', describeLesson(lesson, groups), 'warning');
    }
  };

  // ----- Групи -----
  const handleAddGroup = (group) => {
    setGroups(prev => [...prev, group]);
    logActivity('Додано нову групу', group.name, 'success');
  };

  const handleDeleteGroup = (id) => {
    if (lessons.some(l => l.groupId === id)) return; // захист: у групи є заняття
    const group = groups.find(g => g.id === id);
    setGroups(prev => prev.filter(g => g.id !== id));
    if (group) logActivity('Групу видалено', group.name, 'danger');
  };

  // ----- Викладачі -----
  const handleAddTeacher = (teacher) => {
    setTeachers(prev => [...prev, teacher]);
    logActivity('Додано викладача', shortName(teacher.name), 'success');
  };

  const handleDeleteTeacher = (id) => {
    if (lessons.some(l => l.teacherId === id)) return;
    const teacher = teachers.find(t => t.id === id);
    setTeachers(prev => prev.filter(t => t.id !== id));
    if (teacher) logActivity('Викладача видалено', shortName(teacher.name), 'danger');
  };

  // ----- Аудиторії -----
  const handleAddRoom = (room) => {
    setRooms(prev => [...prev, room]);
    logActivity('Додано аудиторію', `${room.number}, ${room.building}`, 'success');
  };

  const handleDeleteRoom = (id) => {
    if (lessons.some(l => l.roomId === id)) return;
    const room = rooms.find(r => r.id === id);
    setRooms(prev => prev.filter(r => r.id !== id));
    if (room) logActivity('Аудиторію видалено', `${room.number}, ${room.building}`, 'danger');
  };

  // Умовний рендеринг сторінки за activePage
  const renderPage = () => {
    switch (activePage) {
      case 'schedule':
        return (
          <SchedulePage
            groups={groups}
            teachers={teachers}
            rooms={rooms}
            lessons={lessons}
            onAddLesson={handleAddLesson}
            onDeleteLesson={handleDeleteLesson}
          />
        );
      case 'groups':
        return (
          <GroupsPage
            groups={groups}
            lessons={lessons}
            onAdd={handleAddGroup}
            onDelete={handleDeleteGroup}
          />
        );
      case 'teachers':
        return (
          <TeachersPage
            teachers={teachers}
            lessons={lessons}
            onAdd={handleAddTeacher}
            onDelete={handleDeleteTeacher}
          />
        );
      case 'rooms':
        return (
          <RoomsPage
            rooms={rooms}
            lessons={lessons}
            onAdd={handleAddRoom}
            onDelete={handleDeleteRoom}
          />
        );
      default:
        return (
          <DashboardPage
            groups={groups}
            teachers={teachers}
            rooms={rooms}
            lessons={lessons}
            activities={activities}
          />
        );
    }
  };

  return (
    <div className="app">
      <Header />

      <div className="app-body">
        <Sidebar
          activePage={activePage}
          onNavigate={setActivePage}
          counts={{
            schedule: lessons.length,
            groups: groups.length,
            teachers: teachers.length,
            rooms: rooms.length
          }}
        />
        <main className="app-main">{renderPage()}</main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
