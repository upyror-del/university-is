# Проєктування інформаційних систем у React.js — практичні №5, №6, №7

Три практичні роботи — це **один наскрізний проєкт** у три етапи:

| № | Етап | Що здається | Де в репозиторії |
|---|---|---|---|
| 5 | Проєктування архітектури ІС університету | схема ієрархії компонентів, структура папок, опис props і state, відповіді на 6 контрольних запитань | [`docs/practical-5-architecture.md`](docs/practical-5-architecture.md) |
| 6 | Реалізація цієї ІС (УнівІС) | працюючий код + скріншоти Dashboard, таблиці студентів, пошуку, форми додавання | [`university-is/`](university-is) · [`docs/practical-6-implementation.md`](docs/practical-6-implementation.md) |
| 7 | Індивідуальний проєкт — варіант **«Розклад занять»** (групи, викладачі, аудиторії) | той самий шаблон, адаптований під свою предметну область | [`schedule-is/`](schedule-is) · [`docs/practical-7-schedule.md`](docs/practical-7-schedule.md) |

```
.
├── docs/                    звіти (№5, №6, №7) і скріншоти
├── university-is/           практична №6 — React + Vite
├── schedule-is/             практична №7 — React + Vite
├── site/index.html          сторінка-зміст для GitHub Pages
└── .github/workflows/       автодеплой на GitHub Pages
```

## Запуск локально

Потрібен **Node.js 18+**. Кожен застосунок самодостатній:

```bash
cd university-is      # або: cd schedule-is
npm install
npm run dev
```

Відкрийте адресу з термінала (зазвичай http://localhost:5173).

## Публікація на GitHub Pages

Workflow `.github/workflows/deploy.yml` збирає обидва застосунки й публікує їх одним сайтом.

1. Створіть репозиторій на GitHub і залийте проєкт у гілку `main`:
   ```bash
   git init
   git add .
   git commit -m "Практичні №5-7"
   git branch -M main
   git remote add origin https://github.com/ВАШ-ЛОГІН/НАЗВА-РЕПОЗИТОРІЮ.git
   git push -u origin main
   ```
2. У репозиторії: **Settings → Pages → Source → GitHub Actions**.
3. Після завершення workflow (вкладка **Actions**) сайт буде за адресою `https://ВАШ-ЛОГІН.github.io/НАЗВА-РЕПОЗИТОРІЮ/`:
   - `…/university-is/` — практична №6;
   - `…/schedule/` — практична №7.

Запустити деплой вручну: **Actions → Deploy to GitHub Pages → Run workflow**.

## GitHub Codespaces

**Code → Codespaces → Create codespace**, у терміналі:

```bash
cd schedule-is && npm install && npm run dev
```

Потім відкрийте порт 5173 у браузері.
