import React from 'react';
import Button from '../UI/Button';
import { countLessons, getInitials } from '../../utils/schedule';
import '../Common/Table.css';

// Таблиця викладачів
// Props:
//   teachers - викладачі для відображення
//   lessons  - усі заняття (для колонки «Занять» і блокування видалення)
//   onDelete - видалити викладача за id
function TeacherTable({ teachers, lessons, onDelete }) {
  if (teachers.length === 0) {
    return (
      <div className="table-empty">
        <p className="table-empty-icon">🔍</p>
        <p className="table-empty-text">Викладачів не знайдено</p>
        <p className="table-empty-hint">Спробуйте змінити запит пошуку</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-th">Викладач</th>
            <th className="table-th">Посада</th>
            <th className="table-th">Кафедра</th>
            <th className="table-th">Занять на тиждень</th>
            <th className="table-th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => {
            const used = countLessons(lessons, 'teacherId', teacher.id);
            return (
              <tr key={teacher.id} className="table-row">
                <td className="table-td">
                  <div className="cell-person">
                    <div className="cell-avatar">{getInitials(teacher.name)}</div>
                    <div>
                      <p className="cell-main">{teacher.name}</p>
                      <p className="cell-secondary">{teacher.email}</p>
                    </div>
                  </div>
                </td>
                <td className="table-td">{teacher.position}</td>
                <td className="table-td">{teacher.department}</td>
                <td className="table-td">{used}</td>
                <td className="table-td">
                  <Button
                    text="Видалити"
                    type="danger"
                    size="sm"
                    disabled={used > 0}
                    title={used > 0
                      ? `Спершу видаліть заняття викладача (${used})`
                      : undefined}
                    aria-label={`Видалити викладача ${teacher.name}`}
                    onClick={() => onDelete(teacher.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-footer">Показано {teachers.length} викладачів</div>
    </div>
  );
}

export default TeacherTable;
