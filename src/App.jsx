import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/StudentsPage';
import { studentsData } from './data/mockData';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [students, setStudents] = useState(studentsData);

  const handleAdd = (newStudent) => {
    setStudents((prev) => [newStudent, ...prev]);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        {activePage === 'dashboard' ? (
          <DashboardPage />
        ) : (
          <StudentsPage
            students={students}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
