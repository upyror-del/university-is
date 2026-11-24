# University IS — Практична робота №5

Проєктування архітектури інформаційної системи в React.js: модульна компонентна архітектура
(Dashboard + модуль управління студентами).

## Запуск

Потрібен **Node.js 18+** (перевірити: `node -v`).

```bash
npm install
npm run dev
```

Відкрийте адресу з терміналу (зазвичай http://localhost:5173).

Інші команди:

```bash
npm run build     # production-збірка у папку dist/
npm run preview   # локальний перегляд збірки
```

## Публікація на GitHub Pages

У проєкті вже налаштовано автоматичний деплой (`.github/workflows/deploy.yml`, `base: './'` у `vite.config.js`).

1. Створіть репозиторій на GitHub і залийте проєкт у гілку `main`:
   ```bash
   git init
   git add .
   git commit -m "University IS"
   git branch -M main
   git remote add origin https://github.com/ВАШ-ЛОГІН/НАЗВА-РЕПОЗИТОРІЮ.git
   git push -u origin main
   ```
2. У репозиторії: **Settings → Pages → Source → GitHub Actions**.
3. Після завершення workflow (вкладка **Actions**) сайт буде доступний за адресою
   `https://ВАШ-ЛОГІН.github.io/НАЗВА-РЕПОЗИТОРІЮ/`.

Запустити деплой вручну можна у вкладці **Actions → Deploy to GitHub Pages → Run workflow**.

## Запуск у GitHub Codespaces

**Code → Codespaces → Create codespace**, у терміналі: `npm install` та `npm run dev`,
потім відкрийте порт 5173 у браузері.

## Структура

```
src/
├── components/
│   ├── UI/          Button, Input, Card, Badge        (stateless, без бізнес-логіки)
│   ├── Layout/      Header, Footer                    (макет і навігація)
│   ├── Dashboard/   StatCard, RecentActivity          (аналітика)
│   └── Students/    StudentTable, StudentForm, StudentSearch
├── pages/           DashboardPage, StudentsPage
├── data/            mockData.js                       (тестові дані)
├── App.jsx          кореневий компонент, глобальний стан
└── main.jsx         точка входу
```

Ієрархія: **App → Layout / Pages → Features → UI**.

## Що показати у звіті (скріншоти)

1. **Dashboard** — 4 картки StatCard + список останніх подій.
2. **Студенти** — пошук за іменем/email і фільтр за групою (наприклад, КН-31).
3. **Форма** — «+ Додати студента» → «Зберегти студента» з порожніми полями (помилки валідації),
   потім додати студента — він з'явиться першим у таблиці зі згенерованим аватаром.

## Стан і потік даних

- `App`: `activePage`, `students` (найвищий спільний батько) + колбеки `handleAdd`, `handleDelete`.
- `StudentsPage`: `searchQuery`, `filterGroup`, `showForm`.
- `StudentForm`: `formData`, `errors`.

Дані ідуть вниз через props, зміни — вгору через колбеки.
