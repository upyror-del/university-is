# УнівІС — Практична робота №6

Інформаційна система університету на React.js (компонентна архітектура): Dashboard + управління студентами.

## Запуск

Потрібен Node.js 18+.

```bash
npm install
npm run dev        # режим розробки → http://localhost:5173
npm run build      # production-збірка у dist/
npm run preview    # перегляд збірки
```

## Структура

```
src/
├── components/
│   ├── UI/          Button · Input · Card · Badge
│   ├── Layout/      Header · Sidebar · Footer
│   ├── Dashboard/   StatCard · RecentActivity
│   └── Students/    StudentSearch · StudentTable · StudentForm
├── pages/           DashboardPage · StudentsPage
├── data/            mockData.js
├── styles/          global.css
├── App.jsx · App.css · index.jsx
```

Опис архітектури — `../docs/practical-5-architecture.md`, звіт із реалізації та скріншоти — `../docs/practical-6-implementation.md`.
