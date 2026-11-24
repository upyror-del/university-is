# РозкладІС — Практична робота №7 (варіант «Розклад занять»)

Інформаційна система розкладу занять: групи, викладачі, аудиторії, тижнева сітка з перевіркою конфліктів.

## Запуск

Потрібен Node.js 18+.

```bash
npm install
npm run dev        # режим розробки → http://localhost:5173
npm run build      # production-збірка у dist/
npm run preview    # перегляд збірки
```

## Можливості

- Тижнева сітка розкладу (Пн–Пт × 5 пар) у трьох режимах: за групою, викладачем, аудиторією.
- Додавання заняття з перевіркою конфліктів: група, викладач, аудиторія та місткість аудиторії.
- Швидке додавання кліком по порожній клітинці сітки.
- Розділи «Групи», «Викладачі», «Аудиторії»: пошук, додавання з валідацією, видалення (заблоковане, якщо є заняття).
- Dashboard: показники та діаграма навантаження рахуються зі стану; журнал подій оновлюється після кожної дії.

## Структура

```
src/
├── components/
│   ├── UI/          Button · Input · Select · Card · Badge
│   ├── Layout/      Header · Sidebar · Footer
│   ├── Dashboard/   StatCard · WeekLoad · RecentActivity
│   ├── Schedule/    ScheduleFilter · ScheduleGrid · LessonForm
│   ├── Groups/      GroupTable · GroupForm
│   ├── Teachers/    TeacherTable · TeacherForm
│   ├── Rooms/       RoomTable · RoomForm
│   └── Common/      SearchBar · Table.css · Form.css
├── pages/           DashboardPage · SchedulePage · GroupsPage · TeachersPage · RoomsPage
├── data/            mockData.js · constants.js
├── utils/           schedule.js   (чиста логіка: findConflicts, filterLessons, …)
├── styles/          global.css
├── App.jsx · App.css · index.jsx
```

Опис, ієрархія, props, стан і питання для захисту — `../docs/practical-7-schedule.md`.
