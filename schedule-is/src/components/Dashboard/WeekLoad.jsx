import React from 'react';
import './WeekLoad.css';

// Діаграма навантаження по днях тижня (CSS-смуги, без бібліотек)
// Props:
//   data - масив { id, short, name, count }
function WeekLoad({ data }) {
  const max = Math.max(1, ...data.map(item => item.count));

  return (
    <ul className="week-load">
      {data.map(item => (
        <li key={item.id} className="week-load-row">
          <span className="week-load-day" title={item.name}>{item.short}</span>
          <div className="week-load-track">
            <div
              className="week-load-bar"
              style={{ width: `${(item.count / max) * 100}%` }}
            />
          </div>
          <span className="week-load-count">{item.count}</span>
        </li>
      ))}
    </ul>
  );
}

export default WeekLoad;
