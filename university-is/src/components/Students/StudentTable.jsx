import React from 'react';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import './StudentTable.css';

// Компонент таблиці студентів
// Props:
//   students - масив студентів для відображення
//   onDelete - функція видалення студента (отримує id)
function StudentTable({ students, onDelete }) {
  // Визначення статусу студента
  const getStatusBadge = (status) => {
    return status === 'active'
      ? <Badge text="Активний" type="success" />
      : <Badge text="Неактивний" type="danger" />;
  };

  // Визначення кольору GPA
  const getGpaColor = (gpa) => {
    if (gpa >= 4.5) return 'gpa-excellent';
    if (gpa >= 4.0) return 'gpa-good';
    if (gpa >= 3.5) return 'gpa-average';
    return 'gpa-low';
  };

  // Якщо студентів немає — порожній стан
  if (students.length === 0) {
    return (
      <div className="table-empty">
        <p className="table-empty-icon">🔍</p>
        <p className="table-empty-text">Студентів не знайдено</p>
        <p className="table-empty-hint">
          Спробуйте змінити параметри пошуку
        </p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-th">Студент</th>
            <th className="table-th">Група</th>
            <th className="table-th">Спеціальність</th>
            <th className="table-th">Курс</th>
            <th className="table-th">GPA</th>
            <th className="table-th">Статус</th>
            <th className="table-th">Дії</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="table-row">
              <td className="table-td">
                <div className="student-info">
                  <div className="student-avatar">{student.avatar}</div>
                  <div className="student-details">
                    <p className="student-name">{student.name}</p>
                    <p className="student-email">{student.email}</p>
                  </div>
                </div>
              </td>
              <td className="table-td">
                <span className="student-group">{student.group}</span>
              </td>
              <td className="table-td">
                <span className="student-specialty">{student.specialty}</span>
              </td>
              <td className="table-td">
                <span className="student-year">{student.year} курс</span>
              </td>
              <td className="table-td">
                <span className={`student-gpa ${getGpaColor(student.gpa)}`}>
                  {Number(student.gpa).toFixed(1)}
                </span>
              </td>
              <td className="table-td">
                {getStatusBadge(student.status)}
              </td>
              <td className="table-td">
                <Button
                  text="Видалити"
                  type="danger"
                  size="sm"
                  aria-label={`Видалити студента ${student.name}`}
                  onClick={() => onDelete(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        Показано {students.length} студентів
      </div>
    </div>
  );
}

export default StudentTable;
