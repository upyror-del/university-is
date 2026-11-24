// Чисті функції логіки розкладу (без React — їх легко тестувати окремо)
import { DAYS, SLOTS, VIEW_MODES } from '../data/constants';

// Унікальний рядковий id: prefix + час + випадкова частина
export const uid = (prefix) =>
  `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

// Ініціали з ПІБ: «Коваленко Ірина Петрівна» -> «КІ»
export const getInitials = (name) =>
  name.trim().split(/\s+/).map(part => part[0]).join('').toUpperCase().slice(0, 2);

// «Коваленко Ірина Петрівна» -> «Коваленко І. П.»
export const shortName = (name) => {
  const [last, ...rest] = name.trim().split(/\s+/);
  return [last, ...rest.map(part => `${part[0]}.`)].join(' ');
};

export const getViewKey = (mode) => VIEW_MODES.find(m => m.id === mode).key;

// Заняття для вибраного об'єкта перегляду (групи / викладача / аудиторії)
export const filterLessons = (lessons, mode, targetId) => {
  const key = getViewKey(mode);
  return lessons.filter(lesson => lesson[key] === targetId);
};

// Скільки занять пов'язано із сутністю (для колонки «Занять» і блокування видалення)
export const countLessons = (lessons, key, id) =>
  lessons.filter(lesson => lesson[key] === id).length;

// «Пн, 2 пара (10:10–11:30)»
export const describeTime = (day, slot) => {
  const d = DAYS.find(item => item.id === day);
  const s = SLOTS.find(item => item.id === slot);
  return `${d.short}, ${slot} пара (${s.start}–${s.end})`;
};

// Короткий опис заняття для журналу подій: «Бази даних — КН-31, Вт, 1 пара»
export const describeLesson = (lesson, groups) => {
  const group = groups.find(g => g.id === lesson.groupId);
  const day = DAYS.find(d => d.id === lesson.day);
  return `${lesson.subject} — ${group ? group.name : '?'}, ${day.short}, ${lesson.slot} пара`;
};

// Кількість занять по днях тижня (для діаграми навантаження)
export const lessonsPerDay = (lessons) =>
  DAYS.map(day => ({
    ...day,
    count: lessons.filter(lesson => lesson.day === day.id).length
  }));

// Відсоток заповнення аудиторного фонду (усі пари всіх аудиторій за тиждень)
export const occupancyPercent = (lessonsCount, roomsCount) => {
  const total = roomsCount * DAYS.length * SLOTS.length;
  return total ? Math.round((lessonsCount / total) * 100) : 0;
};

// ГОЛОВНА ЛОГІКА ПРЕДМЕТНОЇ ОБЛАСТІ: перевірка конфліктів.
// Повертає масив повідомлень; порожній масив — заняття можна додавати.
// Правила:
//   1) група не може мати дві пари одночасно;
//   2) викладач не може вести дві пари одночасно;
//   3) аудиторія не може бути зайнята двома заняттями одночасно;
//   4) аудиторія має вміщати всю групу.
export const findConflicts = (lessons, candidate, { groups, teachers, rooms }) => {
  const conflicts = [];
  const sameTime = lessons.filter(
    lesson => lesson.day === candidate.day && lesson.slot === candidate.slot
  );

  const group = groups.find(g => g.id === candidate.groupId);
  const teacher = teachers.find(t => t.id === candidate.teacherId);
  const room = rooms.find(r => r.id === candidate.roomId);

  const busyGroup = sameTime.find(l => l.groupId === candidate.groupId);
  if (busyGroup) {
    conflicts.push(
      `Група ${group.name} у цей час уже має заняття «${busyGroup.subject}»`
    );
  }

  const busyTeacher = sameTime.find(l => l.teacherId === candidate.teacherId);
  if (busyTeacher) {
    const otherGroup = groups.find(g => g.id === busyTeacher.groupId);
    conflicts.push(
      `Викладач ${shortName(teacher.name)} у цей час веде «${busyTeacher.subject}» (${otherGroup ? otherGroup.name : '?'})`
    );
  }

  const busyRoom = sameTime.find(l => l.roomId === candidate.roomId);
  if (busyRoom) {
    const otherGroup = groups.find(g => g.id === busyRoom.groupId);
    conflicts.push(
      `Аудиторія ${room.number} у цей час зайнята: «${busyRoom.subject}» (${otherGroup ? otherGroup.name : '?'})`
    );
  }

  if (room && group && room.capacity < group.studentsCount) {
    conflicts.push(
      `Аудиторія ${room.number} замала: ${room.capacity} місць, а в групі ${group.name} — ${group.studentsCount} студентів`
    );
  }

  return conflicts;
};
