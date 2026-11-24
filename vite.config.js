import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // './' — відносні шляхи до ресурсів, щоб збірка працювала на GitHub Pages
  // під будь-якою назвою репозиторію (https://логін.github.io/назва-репозиторію/)
  base: './',
  plugins: [react()],
});
