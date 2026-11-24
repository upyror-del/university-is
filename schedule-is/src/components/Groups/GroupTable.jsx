import React from 'react';
import Button from '../UI/Button';
import { countLessons } from '../../utils/schedule';
import '../Common/Table.css';

// Таблиця груп
// Props:
//   groups   - групи для відображення
//   lessons  - усі заняття (для колонки «Занять» і блокування видалення)
//   onDelete - видалити групу за id
function GroupTable({ groups, lessons, onDelete }) {
  if (groups.length === 0) {
    return (
      <div className="table-empty">
        <p className="table-empty-icon">🔍</p>
        <p className="table-empty-text">Груп не знайдено</p>
        <p className="table-empty-hint">Спробуйте змінити запит пошуку</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-th">Група</th>
            <th className="table-th">Спеціальність</th>
            <th className="table-th">Курс</th>
            <th className="table-th">Студентів</th>
            <th className="table-th">Занять на тиждень</th>
            <th className="table-th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => {
            const used = countLessons(lessons, 'groupId', group.id);
            return (
              <tr key={group.id} className="table-row">
                <td className="table-td"><span className="cell-chip">{group.name}</span></td>
                <td className="table-td">{group.specialty}</td>
                <td className="table-td">{group.year} курс</td>
                <td className="table-td">{group.studentsCount}</td>
                <td className="table-td">{used}</td>
                <td className="table-td">
                  <Button
                    text="Видалити"
                    type="danger"
                    size="sm"
                    disabled={used > 0}
                    title={used > 0
                      ? `Спершу видаліть заняття групи (${used})`
                      : undefined}
                    aria-label={`Видалити групу ${group.name}`}
                    onClick={() => onDelete(group.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-footer">Показано {groups.length} груп</div>
    </div>
  );
}

export default GroupTable;
