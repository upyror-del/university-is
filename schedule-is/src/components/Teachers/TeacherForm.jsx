import React, { useState } from 'react';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { POSITIONS } from '../../data/constants';
import { uid } from '../../utils/schedule';
import '../Common/Form.css';

// Форма додавання викладача
// Props:
//   onAdd    - додати викладача
//   onCancel - закрити форму
function TeacherForm({ onAdd, onCancel }) {
  const initialFormData = { name: '', position: '', department: '', email: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const name = formData.name.trim();

    if (!name) {
      newErrors.name = 'Вкажіть ПІБ викладача';
    } else if (name.split(/\s+/).length < 2) {
      newErrors.name = 'Вкажіть щонайменше прізвище та ім’я';
    }
    if (!formData.position) newErrors.position = 'Виберіть посаду';
    if (!formData.department.trim()) newErrors.department = 'Вкажіть кафедру';

    if (!formData.email.trim()) {
      newErrors.email = 'Вкажіть email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Введіть коректний email';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd({
      id: uid('t'),
      name: formData.name.trim(),
      position: formData.position,
      department: formData.department.trim(),
      email: formData.email.trim()
    });
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="entity-form-grid">
        <Input
          label="ПІБ"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Прізвище Ім’я По батькові"
          error={errors.name}
          required
        />
        <Select
          label="Посада"
          value={formData.position}
          onChange={handleChange('position')}
          options={POSITIONS.map(p => ({ value: p, label: p }))}
          placeholder="Виберіть посаду"
          error={errors.position}
          required
        />
        <Input
          label="Кафедра"
          value={formData.department}
          onChange={handleChange('department')}
          placeholder="Кафедра комп’ютерних наук"
          error={errors.department}
          required
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="name@university.edu"
          error={errors.email}
          required
        />
      </div>

      <div className="entity-form-actions">
        <Button text="Скасувати" type="secondary" onClick={onCancel} />
        <Button text="Додати викладача" type="success" htmlType="submit" />
      </div>
    </form>
  );
}

export default TeacherForm;
