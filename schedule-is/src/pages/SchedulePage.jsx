import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import ScheduleFilter from '../components/Schedule/ScheduleFilter';
import ScheduleGrid from '../components/Schedule/ScheduleGrid';
import LessonForm from '../components/Schedule/LessonForm';
import { filterLessons, getViewKey, describeLesson } from '../utils/schedule';

// Сторінка розкладу: фільтр + тижнева сітка + форма додавання заняття
// Props (з App): groups, teachers, rooms, lessons, onAddLesson, onDeleteLesson
// Локальний стан: mode, targetId, showForm, preset, notice
function SchedulePage({
  groups,
  teachers,
  rooms,
  lessons,
  onAddLesson,
  onDeleteLesson
}) {
  const [mode, setMode] = useState('group');
  const [targetId, setTargetId] = useState(groups[0] ? groups[0].id : '');
  const [showForm, setShowForm] = useState(false);
  const [preset, setPreset] = useState({});
  const [notice, setNotice] = useState('');

  const lists = { group: groups, teacher: teachers, room: rooms };
  const list = lists[mode];

  // Якщо вибраний об'єкт зник зі списку — беремо перший наявний
  const currentTarget = list.some(item => item.id === targetId)
    ? targetId
    : (list[0] ? list[0].id : '');

  const visibleLessons = filterLessons(lessons, mode, currentTarget);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTargetId(lists[newMode][0] ? lists[newMode][0].id : '');
    setNotice('');
  };

  // Відкрити форму, підставивши поточний вибір (і день/пару, якщо клікнули по клітинці)
  const openForm = (extra = {}) => {
    setPreset({ [getViewKey(mode)]: currentTarget, ...extra });
    setNotice('');
    setShowForm(true);
  };

  const handleAdd = (lesson) => {
    onAddLesson(lesson);
    setShowForm(false);
    setNotice(`Заняття додано: ${describeLesson(lesson, groups)}`);
  };

  return (
    <div className="section-stack">
      <div className="page-header">
        <div>
          <h2 className="page-title">Розклад занять</h2>
          <p className="page-subtitle">
            Усього занять у системі: {lessons.length}
          </p>
        </div>
        <Button
          text={showForm ? 'Закрити форму' : '+ Додати заняття'}
          type={showForm ? 'secondary' : 'primary'}
          onClick={() => (showForm ? setShowForm(false) : openForm())}
        />
      </div>

      {notice && <div className="notice" role="status">{notice}</div>}

      {showForm && (
        <Card title="Нове заняття">
          <LessonForm
            key={`${preset.day || 0}-${preset.slot || 0}-${currentTarget}-${mode}`}
            groups={groups}
            teachers={teachers}
            rooms={rooms}
            lessons={lessons}
            preset={preset}
            onAdd={handleAdd}
            onCancel={() => setShowForm(false)}
          />
        </Card>
      )}

      <Card padding="sm">
        <ScheduleFilter
          mode={mode}
          onModeChange={handleModeChange}
          targetId={currentTarget}
          onTargetChange={setTargetId}
          groups={groups}
          teachers={teachers}
          rooms={rooms}
        />
      </Card>

      <Card padding="none">
        <ScheduleGrid
          lessons={visibleLessons}
          mode={mode}
          groups={groups}
          teachers={teachers}
          rooms={rooms}
          onDelete={onDeleteLesson}
          onCellClick={(day, slot) => openForm({ day, slot })}
        />
      </Card>
    </div>
  );
}

export default SchedulePage;
