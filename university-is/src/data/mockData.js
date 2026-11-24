// Тестові дані для інформаційної системи університету
export const studentsData = [
  {
    id: 1,
    name: 'Іван Петренко',
    email: 'ivan.petrenko@university.edu',
    group: 'КН-31',
    specialty: "Комп'ютерні науки",
    year: 3,
    gpa: 4.5,
    status: 'active',
    enrollmentDate: '2022-09-01',
    avatar: 'ІП'
  },
  {
    id: 2,
    name: 'Марія Коваленко',
    email: 'maria.kovalenko@university.edu',
    group: 'КН-31',
    specialty: "Комп'ютерні науки",
    year: 3,
    gpa: 4.8,
    status: 'active',
    enrollmentDate: '2022-09-01',
    avatar: 'МК'
  },
  {
    id: 3,
    name: 'Олексій Мельник',
    email: 'oleksiy.melnyk@university.edu',
    group: 'ІС-21',
    specialty: 'Інформаційні системи',
    year: 2,
    gpa: 3.9,
    status: 'active',
    enrollmentDate: '2023-09-01',
    avatar: 'ОМ'
  },
  {
    id: 4,
    name: 'Анна Бондаренко',
    email: 'anna.bondarenko@university.edu',
    group: 'КН-41',
    specialty: "Комп'ютерні науки",
    year: 4,
    gpa: 4.2,
    status: 'active',
    enrollmentDate: '2021-09-01',
    avatar: 'АБ'
  },
  {
    id: 5,
    name: 'Дмитро Шевченко',
    email: 'dmytro.shevchenko@university.edu',
    group: 'ІС-21',
    specialty: 'Інформаційні системи',
    year: 2,
    gpa: 3.5,
    status: 'inactive',
    enrollmentDate: '2023-09-01',
    avatar: 'ДШ'
  },
  {
    id: 6,
    name: 'Олена Кравченко',
    email: 'olena.kravchenko@university.edu',
    group: 'КН-11',
    specialty: "Комп'ютерні науки",
    year: 1,
    gpa: 4.0,
    status: 'active',
    enrollmentDate: '2024-09-01',
    avatar: 'ОК'
  }
];

export const statsData = [
  { id: 1, title: 'Всього студентів', value: '1,234', change: '+12%', trend: 'up', icon: '🎓', color: 'blue' },
  { id: 2, title: 'Активних курсів', value: '48', change: '+3', trend: 'up', icon: '📚', color: 'green' },
  { id: 3, title: 'Викладачів', value: '89', change: '+2%', trend: 'up', icon: '👨‍🏫', color: 'purple' },
  { id: 4, title: 'Середній GPA', value: '4.1', change: '-0.1', trend: 'down', icon: '📊', color: 'orange' }
];

export const recentActivityData = [
  { id: 1, action: 'Новий студент зарахований', name: 'Василь Гриценко', time: '5 хвилин тому', type: 'success' },
  { id: 2, action: 'Оцінку виставлено', name: 'Марія Коваленко — Алгоритми', time: '20 хвилин тому', type: 'info' },
  { id: 3, action: 'Курс оновлено', name: 'Бази даних — новий модуль', time: '1 годину тому', type: 'warning' },
  { id: 4, action: 'Студент відрахований', name: 'Дмитро Шевченко', time: '2 години тому', type: 'danger' },
  { id: 5, action: 'Розклад оновлено', name: 'КН-31 — осінній семестр', time: '3 години тому', type: 'info' }
];

export const groupsData = [
  'КН-11', 'КН-21', 'КН-31', 'КН-41',
  'ІС-11', 'ІС-21', 'ІС-31',
  'ПЗ-11', 'ПЗ-21'
];

export const specialtiesData = [
  "Комп'ютерні науки",
  'Інформаційні системи',
  'Програмна інженерія',
  'Кібербезпека'
];
