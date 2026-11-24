import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import { ROOM_TYPES, DAYS, SLOTS } from '../../data/constants';
import { countLessons } from '../../utils/schedule';
import '../Common/Table.css';

// Таблиця аудиторій
// Props:
//   rooms    - аудиторії для відображення
//   lessons  - усі заняття (для зайнятості та блокування видалення)
//   onDelete - видалити аудиторію за id
function RoomTable({ rooms, lessons, onDelete }) {
  const totalPairs = DAYS.length * SLOTS.length; // пар на тиждень в одній аудиторії

  if (rooms.length === 0) {
    return (
      <div className="table-empty">
        <p className="table-empty-icon">🔍</p>
        <p className="table-empty-text">Аудиторій не знайдено</p>
        <p className="table-empty-hint">Спробуйте змінити запит пошуку</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-th">Аудиторія</th>
            <th className="table-th">Місць</th>
            <th className="table-th">Тип</th>
            <th className="table-th">Зайнятість</th>
            <th className="table-th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => {
            const used = countLessons(lessons, 'roomId', room.id);
            return (
              <tr key={room.id} className="table-row">
                <td className="table-td">
                  <p className="cell-main">{room.number}</p>
                  <p className="cell-secondary">{room.building}</p>
                </td>
                <td className="table-td">{room.capacity}</td>
                <td className="table-td">
                  <Badge text={ROOM_TYPES[room.type]} type="info" />
                </td>
                <td className="table-td">{used} з {totalPairs} пар</td>
                <td className="table-td">
                  <Button
                    text="Видалити"
                    type="danger"
                    size="sm"
                    disabled={used > 0}
                    title={used > 0
                      ? `Спершу видаліть заняття в аудиторії (${used})`
                      : undefined}
                    aria-label={`Видалити аудиторію ${room.number}`}
                    onClick={() => onDelete(room.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-footer">Показано {rooms.length} аудиторій</div>
    </div>
  );
}

export default RoomTable;
