import React, { useState } from 'react';
import Card from '../UI/Card';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './StudentForm.css';

function StudentForm({ onAdd, onCancel, groups, specialties }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    group: '',
    specialty: '',
    gpa: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === 'name') {
      if (!value.trim()) return "Ім'я є обов'язковим";
      if (value.trim().length < 3) return 'Мінімум 3 символи';
    }
    if (name === 'email') {
      if (!value.trim()) return "Email є обов'язковим";
      if (!emailRegex.test(value)) return 'Некоректний формат email';
    }
    if (name === 'group' && !value) return 'Оберіть групу';
    if (name === 'specialty' && !value) return 'Оберіть спеціальність';
    if (name === 'gpa') {
      const num = parseFloat(value);
      if (value === '' || isNaN(num)) return 'Введіть GPA';
      if (num < 0 || num > 5) return 'GPA має бути від 0 до 5';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const parts = formData.name.trim().split(/\s+/);
    const avatar = parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : formData.name.trim().slice(0, 2).toUpperCase();

    const yearMatch = formData.group.match(/\d/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 1;

    onAdd({
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      group: formData.group,
      specialty: formData.specialty,
      year,
      gpa: parseFloat(formData.gpa),
      status: 'active',
      avatar
    });

    setFormData({ name: '', email: '', group: '', specialty: '', gpa: '' });
    setErrors({});
  };

  return (
    <Card title="Додати нового студента" padding="md" className="form-card">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Input
            label="Прізвище та ім'я"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Наприклад: Тарас Бондар"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="student@uni.edu"
          />

          <div className="ui-input-group">
            <label className="ui-label" htmlFor="field-group">Група</label>
            <select
              id="field-group"
              name="group"
              value={formData.group}
              onChange={handleChange}
              className={`ui-input ${errors.group ? 'ui-input-error' : ''}`}
            >
              <option value="">-- Оберіть групу --</option>
              {groups.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
            {errors.group && <span className="ui-error-msg">{errors.group}</span>}
          </div>

          <div className="ui-input-group">
            <label className="ui-label" htmlFor="field-specialty">Спеціальність</label>
            <select
              id="field-specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className={`ui-input ${errors.specialty ? 'ui-input-error' : ''}`}
            >
              <option value="">-- Оберіть спеціальність --</option>
              {specialties.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.specialty && <span className="ui-error-msg">{errors.specialty}</span>}
          </div>

          <Input
            label="Середній бал (GPA: 0 - 5)"
            name="gpa"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.gpa}
            onChange={handleChange}
            error={errors.gpa}
            placeholder="4.5"
          />
        </div>

        <div className="form-actions">
          <Button text="Зберегти студента" type="success" htmlType="submit" />
          <Button text="Скасувати" type="secondary" onClick={onCancel} />
        </div>
      </form>
    </Card>
  );
}

export default StudentForm;
