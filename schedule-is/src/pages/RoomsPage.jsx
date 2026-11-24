import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SearchBar from '../components/Common/SearchBar';
import RoomTable from '../components/Rooms/RoomTable';
import RoomForm from '../components/Rooms/RoomForm';

// Сторінка аудиторій. Props: rooms, lessons, onAdd, onDelete
// Локальний стан: query, showForm
function RoomsPage({ rooms, lessons, onAdd, onDelete }) {
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const q = query.trim().toLowerCase();
  const filtered = rooms.filter(room =>
    room.number.toLowerCase().includes(q) ||
    room.building.toLowerCase().includes(q)
  );

  const handleAdd = (room) => {
    onAdd(room);
    setShowForm(false);
  };

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Аудиторії</h2>
          <p className="page-subtitle">Знайдено {filtered.length} з {rooms.length}</p>
        </div>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати аудиторію'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {showForm && (
        <Card title="Нова аудиторія">
          <RoomForm rooms={rooms} onAdd={handleAdd} onCancel={() => setShowForm(false)} />
        </Card>
      )}

      <Card padding="sm">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="🔍 Пошук за номером аудиторії або корпусом..."
          label="Пошук аудиторій"
        />
      </Card>

      <Card padding="none">
        <RoomTable rooms={filtered} lessons={lessons} onDelete={onDelete} />
      </Card>
    </div>
  );
}

export default RoomsPage;
