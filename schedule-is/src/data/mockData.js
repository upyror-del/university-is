// Тестові дані для інформаційної системи розкладу занять.
// Усі id — рядки (g — група, t — викладач, r — аудиторія, l — заняття, a — подія).

export const groupsData = [
  { id: 'g1', name: 'КН-11', specialty: 'Комп’ютерні науки', year: 1, studentsCount: 28 },
  { id: 'g2', name: 'КН-21', specialty: 'Комп’ютерні науки', year: 2, studentsCount: 26 },
  { id: 'g3', name: 'КН-31', specialty: 'Комп’ютерні науки', year: 3, studentsCount: 24 },
  { id: 'g4', name: 'ІС-21', specialty: 'Інформаційні системи', year: 2, studentsCount: 22 },
  { id: 'g5', name: 'ПЗ-31', specialty: 'Програмна інженерія', year: 3, studentsCount: 20 }
];

export const teachersData = [
  { id: 't1', name: 'Коваленко Ірина Петрівна', position: 'Доцент', department: 'Кафедра програмної інженерії', email: 'i.kovalenko@university.edu' },
  { id: 't2', name: 'Мельник Андрій Олегович', position: 'Старший викладач', department: 'Кафедра комп’ютерних наук', email: 'a.melnyk@university.edu' },
  { id: 't3', name: 'Шевченко Тарас Іванович', position: 'Доцент', department: 'Кафедра інформаційних систем', email: 't.shevchenko@university.edu' },
  { id: 't4', name: 'Бондар Наталія Василівна', position: 'Професор', department: 'Кафедра математики', email: 'n.bondar@university.edu' },
  { id: 't5', name: 'Гриценко Олег Миколайович', position: 'Асистент', department: 'Кафедра комп’ютерних наук', email: 'o.hrytsenko@university.edu' },
  { id: 't6', name: 'Кравчук Олена Сергіївна', position: 'Доцент', department: 'Кафедра іноземних мов', email: 'o.kravchuk@university.edu' }
];

export const roomsData = [
  { id: 'r1', number: '101', building: 'Головний корпус', capacity: 120, type: 'lecture' },
  { id: 'r2', number: '102', building: 'Головний корпус', capacity: 60, type: 'lecture' },
  { id: 'r3', number: '205', building: 'Головний корпус', capacity: 30, type: 'classroom' },
  { id: 'r4', number: '301', building: 'Корпус 2 (ІТ)', capacity: 30, type: 'computer' },
  { id: 'r5', number: '302', building: 'Корпус 2 (ІТ)', capacity: 28, type: 'computer' },
  { id: 'r6', number: '310', building: 'Корпус 2 (ІТ)', capacity: 24, type: 'lab' }
];

// day: 1..5 (Пн..Пт), slot: 1..5 (номер пари)
export const lessonsData = [
  { id: 'l1',  subject: 'Алгоритми та структури даних', type: 'lecture',  groupId: 'g1', teacherId: 't2', roomId: 'r1', day: 1, slot: 1 },
  { id: 'l2',  subject: 'Алгоритми та структури даних', type: 'lab',      groupId: 'g1', teacherId: 't5', roomId: 'r4', day: 1, slot: 2 },
  { id: 'l3',  subject: 'Математичний аналіз',          type: 'lecture',  groupId: 'g1', teacherId: 't4', roomId: 'r1', day: 1, slot: 3 },
  { id: 'l4',  subject: 'Алгоритми та структури даних', type: 'lecture',  groupId: 'g2', teacherId: 't2', roomId: 'r1', day: 1, slot: 2 },
  { id: 'l5',  subject: 'Бази даних',                   type: 'lecture',  groupId: 'g3', teacherId: 't3', roomId: 'r2', day: 2, slot: 1 },
  { id: 'l6',  subject: 'Бази даних',                   type: 'lab',      groupId: 'g3', teacherId: 't3', roomId: 'r5', day: 2, slot: 2 },
  { id: 'l7',  subject: 'Веб-технології',               type: 'practice', groupId: 'g3', teacherId: 't1', roomId: 'r4', day: 2, slot: 3 },
  { id: 'l8',  subject: 'Дискретна математика',         type: 'lecture',  groupId: 'g1', teacherId: 't4', roomId: 'r2', day: 2, slot: 4 },
  { id: 'l9',  subject: 'Англійська мова',              type: 'practice', groupId: 'g3', teacherId: 't6', roomId: 'r3', day: 3, slot: 1 },
  { id: 'l10', subject: 'Англійська мова',              type: 'practice', groupId: 'g4', teacherId: 't6', roomId: 'r3', day: 3, slot: 2 },
  { id: 'l11', subject: 'Проєктування інформаційних систем', type: 'lecture', groupId: 'g4', teacherId: 't3', roomId: 'r2', day: 3, slot: 3 },
  { id: 'l12', subject: 'Дискретна математика',         type: 'practice', groupId: 'g1', teacherId: 't4', roomId: 'r3', day: 3, slot: 4 },
  { id: 'l13', subject: 'Проєктування інформаційних систем', type: 'lab', groupId: 'g4', teacherId: 't3', roomId: 'r5', day: 4, slot: 1 },
  { id: 'l14', subject: 'Операційні системи',           type: 'lecture',  groupId: 'g5', teacherId: 't5', roomId: 'r2', day: 4, slot: 2 },
  { id: 'l15', subject: 'Операційні системи',           type: 'lab',      groupId: 'g5', teacherId: 't5', roomId: 'r6', day: 4, slot: 3 },
  { id: 'l16', subject: 'Веб-технології',               type: 'lab',      groupId: 'g2', teacherId: 't1', roomId: 'r4', day: 5, slot: 1 },
  { id: 'l17', subject: 'Математичний аналіз',          type: 'practice', groupId: 'g2', teacherId: 't4', roomId: 'r3', day: 5, slot: 2 },
  { id: 'l18', subject: 'Комп’ютерні мережі',           type: 'lecture',  groupId: 'g3', teacherId: 't2', roomId: 'r2', day: 5, slot: 3 }
];

export const recentActivityData = [
  { id: 'a1', action: 'Заняття додано до розкладу', name: 'Бази даних — КН-31, Вт, 1 пара', time: '5 хвилин тому', type: 'success' },
  { id: 'a2', action: 'Аудиторію змінено', name: 'Веб-технології — КН-31: 205 → 301', time: '25 хвилин тому', type: 'info' },
  { id: 'a3', action: 'Виявлено конфлікт розкладу', name: 'Викладач Мельник А. О., Пн, 2 пара', time: '1 годину тому', type: 'danger' },
  { id: 'a4', action: 'Додано нову групу', name: 'ПЗ-31', time: '2 години тому', type: 'success' },
  { id: 'a5', action: 'Заняття скасовано', name: 'Англійська мова — ІС-21, Ср, 2 пара', time: '3 години тому', type: 'warning' }
];
