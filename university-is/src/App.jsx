import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/StudentsPage';
import { studentsData, groupsData } from './data/mockData';
import './App.css';

// Кореневий компонент: глобальний стан + композиція сторінки
function App() {
  // Глобальний стан живе в App — найвищому спільному батьку
  const [activePage, setActivePage] = useState('dashboard');
  const [students, setStudents] = useState(studentsData);

  const handleAdd = (student) => {
    setStudents(prev => [...prev, student]);
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="app">
      <Header activePage={activePage} onNavigate={setActivePage} />

      <div className="app-body">
        <Sidebar students={students} groups={groupsData} />

        <main className="app-main">
          {/* Умовний рендеринг сторінки */}
          {activePage === 'dashboard'
            ? <DashboardPage />
            : (
              <StudentsPage
                students={students}
                onAdd={handleAdd}
                onDelete={handleDelete}
              />
            )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
