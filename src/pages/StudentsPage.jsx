import React, { useState } from 'react';
import Button from '../components/UI/Button';
import StudentForm from '../components/Students/StudentForm';
import StudentSearch from '../components/Students/StudentSearch';
import StudentTable from '../components/Students/StudentTable';
import { groupsData, specialtiesData } from '../data/mockData';
import './StudentsPage.css';

function StudentsPage({ students, onAdd, onDelete }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredStudents = students.filter((st) => {
    const matchesSearch =
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = !filterGroup || st.group === filterGroup;
    return matchesSearch && matchesGroup;
  });

  const handleAddStudent = (newStudent) => {
    onAdd(newStudent);
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-header-row">
        <h2 className="page-title">Управління студентами ({filteredStudents.length})</h2>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати студента'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {showForm && (
        <StudentForm
          onAdd={handleAddStudent}
          onCancel={() => setShowForm(false)}
          groups={groupsData}
          specialties={specialtiesData}
        />
      )}

      <StudentSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterGroup={filterGroup}
        onFilterChange={setFilterGroup}
        groups={groupsData}
      />

      <StudentTable students={filteredStudents} onDelete={onDelete} />
    </div>
  );
}

export default StudentsPage;
