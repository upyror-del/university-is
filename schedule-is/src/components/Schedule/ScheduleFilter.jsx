import React from 'react';
import Button from '../UI/Button';
import Select from '../UI/Select';
import { VIEW_MODES } from '../../data/constants';
import './ScheduleFilter.css';

// Вибір режиму перегляду розкладу та об'єкта (група / викладач / аудиторія)
// Props:
//   mode           - 'group' | 'teacher' | 'room'
//   onModeChange   - зміна режиму
//   targetId       - id вибраної групи / викладача / аудиторії
//   onTargetChange - зміна вибраного об'єкта
//   groups, teachers, rooms - довідники для випадаючого списку
function ScheduleFilter({
  mode,
  onModeChange,
  targetId,
  onTargetChange,
  groups,
  teachers,
  rooms
}) {
  const optionsByMode = {
    group: groups.map(g => ({ value: g.id, label: g.name })),
    teacher: teachers.map(t => ({ value: t.id, label: t.name })),
    room: rooms.map(r => ({ value: r.id, label: `${r.number} — ${r.building}` }))
  };
  const currentMode = VIEW_MODES.find(m => m.id === mode);

  return (
    <div className="schedule-filter">
      <div className="schedule-filter-modes" role="group" aria-label="Режим перегляду">
        {VIEW_MODES.map(item => (
          <Button
            key={item.id}
            text={item.label}
            size="sm"
            type={mode === item.id ? 'primary' : 'secondary'}
            aria-pressed={mode === item.id}
            onClick={() => onModeChange(item.id)}
          />
        ))}
      </div>

      <div className="schedule-filter-target">
        <Select
          label={currentMode.pick}
          value={targetId}
          onChange={(e) => onTargetChange(e.target.value)}
          options={optionsByMode[mode]}
        />
      </div>
    </div>
  );
}

export default ScheduleFilter;
