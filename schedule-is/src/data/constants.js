// Довідники системи розкладу

export const SEMESTER_LABEL = '2026/2027 · 1 семестр';

// Дні тижня (навчальний тиждень)
export const DAYS = [
  { id: 1, short: 'Пн', name: 'Понеділок' },
  { id: 2, short: 'Вт', name: 'Вівторок' },
  { id: 3, short: 'Ср', name: 'Середа' },
  { id: 4, short: 'Чт', name: 'Четвер' },
  { id: 5, short: 'Пт', name: 'П’ятниця' }
];

// Пари (часові слоти)
export const SLOTS = [
  { id: 1, start: '08:30', end: '09:50' },
  { id: 2, start: '10:10', end: '11:30' },
  { id: 3, start: '11:50', end: '13:10' },
  { id: 4, start: '13:30', end: '14:50' },
  { id: 5, start: '15:05', end: '16:25' }
];

// Типи занять: підпис + тип Badge
export const LESSON_TYPES = {
  lecture: { label: 'Лекція', badge: 'info' },
  practice: { label: 'Практична', badge: 'success' },
  lab: { label: 'Лабораторна', badge: 'warning' }
};

// Типи аудиторій
export const ROOM_TYPES = {
  lecture: 'Лекційна',
  classroom: 'Звичайна',
  computer: 'Комп’ютерний клас',
  lab: 'Лабораторія'
};

export const POSITIONS = ['Асистент', 'Старший викладач', 'Доцент', 'Професор'];

// Режими перегляду розкладу: за групою / викладачем / аудиторією
// key — поле заняття, за яким фільтруємо
export const VIEW_MODES = [
  { id: 'group', label: 'За групою', key: 'groupId', pick: 'Група' },
  { id: 'teacher', label: 'За викладачем', key: 'teacherId', pick: 'Викладач' },
  { id: 'room', label: 'За аудиторією', key: 'roomId', pick: 'Аудиторія' }
];
