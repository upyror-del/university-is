import React from 'react';
import Badge from '../UI/Badge';
import { DAYS, SLOTS, LESSON_TYPES } from '../../data/constants';
import { shortName } from '../../utils/schedule';
import './ScheduleGrid.css';

// Тижнева сітка розкладу: рядки — пари, стовпці — дні тижня
// Props:
//   lessons     - заняття вибраного об'єкта (вже відфільтровані)
//   mode        - режим перегляду: що саме показувати в рядку під назвою предмета
//   groups, teachers, rooms - довідники для підстановки назв
//   onDelete    - видалити заняття за id
//   onCellClick - клік по порожній клітинці (day, slot) — відкриває форму
function ScheduleGrid({
  lessons,
  mode,
  groups,
  teachers,
  rooms,
  onDelete,
  onCellClick
}) {
  // Другий рядок картки залежить від режиму: показуємо те, чого немає у фільтрі
  const getMeta = (lesson) => {
    const group = groups.find(g => g.id === lesson.groupId);
    const teacher = teachers.find(t => t.id === lesson.teacherId);
    const room = rooms.find(r => r.id === lesson.roomId);
    const teacherName = teacher ? shortName(teacher.name) : '?';
    const roomNumber = room ? `ауд. ${room.number}` : 'ауд. ?';
    const groupName = group ? group.name : '?';

    if (mode === 'group') return `${teacherName} · ${roomNumber}`;
    if (mode === 'teacher') return `${groupName} · ${roomNumber}`;
    return `${groupName} · ${teacherName}`;
  };

  return (
    <div className="schedule-wrapper">
      <table className="schedule-table">
        <thead>
          <tr>
            <th className="schedule-th schedule-th-time" scope="col">Пара</th>
            {DAYS.map(day => (
              <th key={day.id} className="schedule-th" scope="col">{day.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SLOTS.map(slot => (
            <tr key={slot.id}>
              <th className="schedule-time" scope="row">
                <span className="schedule-time-num">{slot.id} пара</span>
                <span className="schedule-time-range">{slot.start}–{slot.end}</span>
              </th>

              {DAYS.map(day => {
                const cellLessons = lessons.filter(
                  l => l.day === day.id && l.slot === slot.id
                );

                return (
                  <td key={day.id} className="schedule-cell">
                    {cellLessons.length === 0 ? (
                      <button
                        className="cell-add"
                        aria-label={`Додати заняття: ${day.name}, ${slot.id} пара`}
                        onClick={() => onCellClick(day.id, slot.id)}
                      >
                        +
                      </button>
                    ) : (
                      cellLessons.map(lesson => (
                        <div
                          key={lesson.id}
                          className={`lesson-card lesson-card-${lesson.type}`}
                        >
                          <button
                            className="lesson-delete"
                            aria-label={`Видалити заняття ${lesson.subject}`}
                            onClick={() => onDelete(lesson.id)}
                          >
                            ×
                          </button>
                          <p className="lesson-subject">{lesson.subject}</p>
                          <Badge
                            text={LESSON_TYPES[lesson.type].label}
                            type={LESSON_TYPES[lesson.type].badge}
                          />
                          <p className="lesson-meta">{getMeta(lesson)}</p>
                        </div>
                      ))
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleGrid;
