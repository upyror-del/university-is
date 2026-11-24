@echo off
setlocal
chcp 65001 >nul

set "ROOT=%~dp0"
goto check_node

:check_node
where node >nul 2>nul
if errorlevel 1 goto node_missing
node -e "if (Number(process.versions.node.split('.')[0]) < 18) process.exit(1)"
if errorlevel 1 goto old_node
where npm >nul 2>nul
if errorlevel 1 goto npm_missing
goto menu

:menu
cls
echo ============================================
echo   Локальний запуск застосунків
echo ============================================
echo.
echo 1. УнівІС
echo 2. РозкладІС
echo 3. Обидва проєкти
echo Q. Вихід
echo.
choice /C 123Q /N /M "Виберіть варіант (1-3, Q): "
if errorlevel 4 goto :eof
if errorlevel 3 goto launch_both
if errorlevel 2 goto launch_schedule
goto launch_university

:launch_university
call :ensure_dependencies "university-is"
if errorlevel 1 goto install_error
start "UnivIS" /D "%ROOT%university-is" cmd /k "npm run dev -- --host 127.0.0.1 --port 5173 --strictPort"
echo.
echo УнівІС: http://localhost:5173/
goto launched

:launch_schedule
call :ensure_dependencies "schedule-is"
if errorlevel 1 goto install_error
start "RozkladIS" /D "%ROOT%schedule-is" cmd /k "npm run dev -- --host 127.0.0.1 --port 5174 --strictPort"
echo.
echo РозкладІС: http://localhost:5174/
goto launched

:launch_both
call :ensure_dependencies "university-is"
if errorlevel 1 goto install_error
call :ensure_dependencies "schedule-is"
if errorlevel 1 goto install_error
start "UnivIS" /D "%ROOT%university-is" cmd /k "npm run dev -- --host 127.0.0.1 --port 5173 --strictPort"
start "RozkladIS" /D "%ROOT%schedule-is" cmd /k "npm run dev -- --host 127.0.0.1 --port 5174 --strictPort"
echo.
echo УнівІС: http://localhost:5173/
echo РозкладІС: http://localhost:5174/
goto launched

:ensure_dependencies
if exist "%ROOT%%~1\node_modules\.bin\vite.cmd" exit /b 0

echo Встановлення залежностей: %~1...
pushd "%ROOT%%~1"
if errorlevel 1 exit /b 1
call npm install
set "INSTALL_RESULT=%ERRORLEVEL%"
popd
if not "%INSTALL_RESULT%"=="0" exit /b 1
exit /b 0

:install_error
echo.
echo Не вдалося встановити залежності. Перевірте підключення до інтернету.
pause
goto :eof

:node_missing
echo.
echo Не знайдено Node.js. Встановіть Node.js 18 або новіший: https://nodejs.org/
pause
goto :eof

:old_node
echo.
echo Потрібен Node.js 18 або новіший. Оновіть Node.js: https://nodejs.org/
pause
goto :eof

:npm_missing
echo.
echo Не знайдено npm. Перевстановіть Node.js 18 або новіший з https://nodejs.org/
pause
goto :eof

:launched
echo.
echo Закрийте вікна застосунків, щоб зупинити локальні сервери.
pause
