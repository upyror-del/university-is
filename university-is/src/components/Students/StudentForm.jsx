import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './StudentForm.css';

// Компонент форми додавання студента
// Props:
//   onAdd       - функція додавання студента (отримує об'єкт студента)
//   onCancel    - функція скасування
//   groups      - список груп
//   specialties - список спеціальностей
function StudentForm({ onAdd, onCancel, groups, specialties }) {
  // Початковий стан форми
  const initialFormData = {
    name: '',
    email: '',
    group: '',
    specialty: '',
    year: '',
    gpa: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // Обробник зміни поля: handleChange('name') повертає функцію-обробник (каррування)
  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Очищення помилки при введенні
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Валідація форми — повертає об'єкт з помилками
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Ім'я повинно містити щонайменше 3 символи";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email є обов'язковим";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Введіть коректний email';
    }

    if (!formData.group) {
      newErrors.group = 'Виберіть групу';
    }

    if (!formData.specialty) {
      newErrors.specialty = 'Виберіть спеціальність';
    }

    if (!formData.year) {
      newErrors.year = 'Виберіть курс';
    }

    if (formData.gpa === '') {
      newErrors.gpa = 'Введіть GPA';
    } else if (
      isNaN(formData.gpa) ||
      Number(formData.gpa) < 0 ||
      Number(formData.gpa) > 5
    ) {
      newErrors.gpa = 'GPA повинен бути числом від 0 до 5';
    }

    return newErrors;
  };

  // Обробник відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Створення нового студента
    const newStudent = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      group: formData.group,
      specialty: formData.specialty,
      year: parseInt(formData.year, 10),
      gpa: parseFloat(formData.gpa),
      status: 'active',
      enrollmentDate: new Date().toISOString().split('T')[0],
      // Аватар — ініціали перших двох слів імені
      avatar: formData.name.trim()
        .split(/\s+/)
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    };

    onAdd(newStudent);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    // noValidate — перевірку виконує наш код, а не браузер
    <form className="student-form" onSubmit={handleSubmit} noValidate>
      <div className="student-form-grid">
        {/* Ім'я */}
        <Input
          label="Повне ім'я"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Іван Петренко"
          error={errors.name}
          required
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="ivan@university.edu"
          error={errors.email}
          required
        />

        {/* Група */}
        <div className="form-field">
          <label className="form-label" htmlFor="student-group">
            Група <span className="form-required">*</span>
          </label>
          <select
            id="student-group"
            className={`form-select ${errors.group ? 'form-select-error' : ''}`}
            value={formData.group}
            onChange={handleChange('group')}
          >
            <option value="">Виберіть групу</option>
            {groups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
          {errors.group && (
            <span className="form-error">{errors.group}</span>
          )}
        </div>

        {/* Спеціальність */}
        <div className="form-field">
          <label className="form-label" htmlFor="student-specialty">
            Спеціальність <span className="form-required">*</span>
          </label>
          <select
            id="student-specialty"
            className={`form-select ${errors.specialty
              ? 'form-select-error' : ''}`}
            value={formData.specialty}
            onChange={handleChange('specialty')}
          >
            <option value="">Виберіть спеціальність</option>
            {specialties.map(spec => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
          {errors.specialty && (
            <span className="form-error">{errors.specialty}</span>
          )}
        </div>

        {/* Курс */}
        <div className="form-field">
          <label className="form-label" htmlFor="student-year">
            Курс <span className="form-required">*</span>
          </label>
          <select
            id="student-year"
            className={`form-select ${errors.year ? 'form-select-error' : ''}`}
            value={formData.year}
            onChange={handleChange('year')}
          >
            <option value="">Виберіть курс</option>
            {[1, 2, 3, 4].map(year => (
              <option key={year} value={year}>{year} курс</option>
            ))}
          </select>
          {errors.year && (
            <span className="form-error">{errors.year}</span>
          )}
        </div>

        {/* GPA */}
        <Input
          label="Середній бал (GPA)"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={formData.gpa}
          onChange={handleChange('gpa')}
          placeholder="від 0 до 5"
          error={errors.gpa}
          required
        />
      </div>

      <div className="student-form-actions">
        <Button text="Скасувати" type="secondary" onClick={onCancel} />
        <Button text="Додати студента" type="success" htmlType="submit" />
      </div>
    </form>
  );
}

export default StudentForm;
