import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SearchBar from '../components/Common/SearchBar';
import GroupTable from '../components/Groups/GroupTable';
import GroupForm from '../components/Groups/GroupForm';

// Сторінка груп. Props: groups, lessons, onAdd, onDelete
// Локальний стан: query, showForm
function GroupsPage({ groups, lessons, onAdd, onDelete }) {
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const q = query.trim().toLowerCase();
  const filtered = groups.filter(group =>
    group.name.toLowerCase().includes(q) ||
    group.specialty.toLowerCase().includes(q)
  );

  const handleAdd = (group) => {
    onAdd(group);
    setShowForm(false);
  };

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Групи</h2>
          <p className="page-subtitle">Знайдено {filtered.length} з {groups.length}</p>
        </div>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати групу'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {showForm && (
        <Card title="Нова група">
          <GroupForm
            groups={groups}
            onAdd={handleAdd}
            onCancel={() => setShowForm(false)}
          />
        </Card>
      )}

      <Card padding="sm">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="🔍 Пошук за назвою групи або спеціальністю..."
          label="Пошук груп"
        />
      </Card>

      <Card padding="none">
        <GroupTable groups={filtered} lessons={lessons} onDelete={onDelete} />
      </Card>
    </div>
  );
}

export default GroupsPage;
