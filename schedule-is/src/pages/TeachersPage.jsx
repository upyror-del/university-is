import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SearchBar from '../components/Common/SearchBar';
import TeacherTable from '../components/Teachers/TeacherTable';
import TeacherForm from '../components/Teachers/TeacherForm';

// Сторінка викладачів. Props: teachers, lessons, onAdd, onDelete
// Локальний стан: query, showForm
function TeachersPage({ teachers, lessons, onAdd, onDelete }) {
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const q = query.trim().toLowerCase();
  const filtered = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(q) ||
    teacher.department.toLowerCase().includes(q)
  );

  const handleAdd = (teacher) => {
    onAdd(teacher);
    setShowForm(false);
  };

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Викладачі</h2>
          <p className="page-subtitle">Знайдено {filtered.length} з {teachers.length}</p>
        </div>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати викладача'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {showForm && (
        <Card title="Новий викладач">
          <TeacherForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
        </Card>
      )}

      <Card padding="sm">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="🔍 Пошук за ПІБ або кафедрою..."
          label="Пошук викладачів"
        />
      </Card>

      <Card padding="none">
        <TeacherTable teachers={filtered} lessons={lessons} onDelete={onDelete} />
      </Card>
    </div>
  );
}

export default TeachersPage;
