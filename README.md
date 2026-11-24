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

У корені також є `start.bat` для запуску застосунків у Windows.

## Запуск на Windows

1. Встановіть **Node.js 18 або новіший** з [nodejs.org](https://nodejs.org/) (до комплекту входить npm).
2. Завантажте репозиторій як ZIP і розпакуйте його.
3. Двічі клацніть `start.bat` у розпакованій папці.
4. У меню виберіть **УнівІС**, **РозкладІС** або **обидва**. Якщо залежності ще не встановлені, скрипт встановить їх автоматично.

УнівІС буде доступний на http://localhost:5173/, РозкладІС — на http://localhost:5174/. Вікна командного рядка зручніше не закривати під час роботи: закрийте їх, щоб зупинити сервери.

### Запуск вручну через npm

Потрібні Node.js 18+ та npm. У терміналі перейдіть до папки потрібного застосунку:

```powershell
cd university-is   # або: cd schedule-is
npm install
npm run dev
```

Для одночасного запуску в окремих терміналах використовуйте порти `5173` для `university-is` і `5174` для `schedule-is`:

```powershell
# Окремий термінал для УнівІС
cd university-is
npm run dev -- --host 127.0.0.1 --port 5173

# Інший термінал для РозкладІС
cd schedule-is
npm run dev -- --host 127.0.0.1 --port 5174
```

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
