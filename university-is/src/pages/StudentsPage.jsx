import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import StudentSearch from '../components/Students/StudentSearch';
import StudentTable from '../components/Students/StudentTable';
import StudentForm from '../components/Students/StudentForm';
import { groupsData, specialtiesData } from '../data/mockData';

// Сторінка управління студентами
// Props (з App):
//   students - масив студентів (глобальний стан)
//   onAdd    - додати студента
//   onDelete - видалити студента за id
// Локальний стан: searchQuery, filterGroup, showForm
function StudentsPage({ students, onAdd, onDelete }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Фільтрація: пошук за ім'ям/email + вибрана група
  const query = searchQuery.trim().toLowerCase();
  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query);
    const matchesGroup = !filterGroup || student.group === filterGroup;
    return matchesSearch && matchesGroup;
  });

  const handleAdd = (student) => {
    onAdd(student);
    setShowForm(false);
  };

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Студенти</h2>
          <p className="page-subtitle">
            Знайдено {filteredStudents.length} з {students.length}
          </p>
        </div>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати студента'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {showForm && (
        <Card title="Новий студент">
          <StudentForm
            onAdd={handleAdd}
            onCancel={() => setShowForm(false)}
            groups={groupsData}
            specialties={specialtiesData}
          />
        </Card>
      )}

      <Card padding="sm">
        <StudentSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterGroup={filterGroup}
          onFilterChange={setFilterGroup}
          groups={groupsData}
        />
      </Card>

      <Card padding="none">
        <StudentTable students={filteredStudents} onDelete={onDelete} />
      </Card>
    </div>
  );
}

export default StudentsPage;
