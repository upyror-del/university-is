import React from 'react';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import './StudentTable.css';

function StudentTable({ students, onDelete }) {
  const statusMap = {
    active: { text: 'Активний', type: 'success' },
    academic_leave: { text: 'Академвідпустка', type: 'warning' },
    warning: { text: 'Борг', type: 'danger' }
  };

  if (students.length === 0) {
    return (
      <Card padding="lg">
        <div className="empty-state">
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔍</div>
          <div>Студентів за заданими критеріями не знайдено</div>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="sm">
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Студент</th>
              <th>Група / Спеціальність</th>
              <th>GPA</th>
              <th>Статус</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {students.map((st) => {
              const stStatus = statusMap[st.status] || { text: st.status, type: 'info' };
              return (
                <tr key={st.id}>
                  <td>
                    <div className="student-cell">
                      <div className="student-avatar">{st.avatar}</div>
                      <div>
                        <div className="student-name">{st.name}</div>
                        <div className="student-email">{st.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div><strong>{st.group}</strong> ({st.year} курс)</div>
                    <div className="student-email">{st.specialty}</div>
                  </td>
                  <td>
                    <strong>{Number(st.gpa).toFixed(1)}</strong>
                  </td>
                  <td>
                    <Badge text={stStatus.text} type={stStatus.type} />
                  </td>
                  <td>
                    <Button
                      text="Видалити"
                      type="danger"
                      size="sm"
                      onClick={() => onDelete(st.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default StudentTable;
