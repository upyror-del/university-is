export const groupsData = ['КН-11', 'КН-21', 'КН-31'];

export const specialtiesData = [
  'Комп. науки',
  'Інженерія ПЗ',
  'Кібербезпека',
  'Системний аналіз'
];

export const studentsData = [
  { id: 1, name: 'Іван Петренко', email: 'ivan@uni.edu', group: 'КН-31', specialty: 'Комп. науки', year: 3, gpa: 4.5, status: 'active', avatar: 'ІП' },
  { id: 2, name: 'Марія Ковальчук', email: 'maria@uni.edu', group: 'КН-21', specialty: 'Інженерія ПЗ', year: 2, gpa: 4.8, status: 'active', avatar: 'МК' },
  { id: 3, name: 'Олександр Сидоренко', email: 'oleksandr@uni.edu', group: 'КН-11', specialty: 'Кібербезпека', year: 1, gpa: 3.9, status: 'active', avatar: 'ОС' },
  { id: 4, name: 'Олена Бондаренко', email: 'olena@uni.edu', group: 'КН-31', specialty: 'Комп. науки', year: 3, gpa: 4.2, status: 'academic_leave', avatar: 'ОБ' },
  { id: 5, name: 'Дмитро Мельник', email: 'dmytro@uni.edu', group: 'КН-21', specialty: 'Системний аналіз', year: 2, gpa: 3.4, status: 'warning', avatar: 'ДМ' },
  { id: 6, name: 'Софія Шевченко', email: 'sofia@uni.edu', group: 'КН-11', specialty: 'Інженерія ПЗ', year: 1, gpa: 4.9, status: 'active', avatar: 'СШ' }
];

export const statsData = [
  { id: 1, title: 'Студентів', value: '1,234', change: '+12%', trend: 'up', icon: '🎓', color: '#2563eb' },
  { id: 2, title: 'Курсів', value: '48', change: '+3', trend: 'up', icon: '📚', color: '#16a34a' },
  { id: 3, title: 'Викладачів', value: '89', change: '+2%', trend: 'up', icon: '👨‍🏫', color: '#9333ea' },
  { id: 4, title: 'Середній GPA', value: '4.1', change: '-0.1', trend: 'down', icon: '📊', color: '#ea580c' }
];

export const recentActivityData = [
  { id: 1, action: 'Зарахування нового студента', name: 'Софія Шевченко (КН-11)', time: '10 хв тому', type: 'success' },
  { id: 2, action: 'Оновлення оцінок з курсу React.js', name: 'Група КН-31', time: '45 хв тому', type: 'info' },
  { id: 3, action: 'Оформлення академвідпустки', name: 'Олена Бондаренко', time: '2 год тому', type: 'warning' },
  { id: 4, action: 'Оновлено навчальний план', name: 'Спеціальність "Інженерія ПЗ"', time: '5 год тому', type: 'info' },
  { id: 5, action: 'Попередження про заборгованість', name: 'Дмитро Мельник (КН-21)', time: 'Вчора', type: 'danger' }
];
