import React, { useState } from 'react';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { uid } from '../../utils/schedule';
import '../Common/Form.css';

// Форма додавання групи
// Props:
//   groups   - наявні групи (для перевірки унікальності назви)
//   onAdd    - додати групу
//   onCancel - закрити форму
function GroupForm({ groups, onAdd, onCancel }) {
  const initialFormData = { name: '', specialty: '', year: '', studentsCount: '' };
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
      newErrors.name = 'Вкажіть назву групи';
    } else if (groups.some(g => g.name.toLowerCase() === name.toLowerCase())) {
      newErrors.name = 'Група з такою назвою вже існує';
    }
    if (!formData.specialty.trim()) newErrors.specialty = 'Вкажіть спеціальність';
    if (!formData.year) newErrors.year = 'Виберіть курс';

    const count = Number(formData.studentsCount);
    if (formData.studentsCount === '') {
      newErrors.studentsCount = 'Вкажіть кількість студентів';
    } else if (!Number.isInteger(count) || count < 1 || count > 100) {
      newErrors.studentsCount = 'Ціле число від 1 до 100';
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
      id: uid('g'),
      name: formData.name.trim(),
      specialty: formData.specialty.trim(),
      year: Number(formData.year),
      studentsCount: Number(formData.studentsCount)
    });
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="entity-form-grid">
        <Input
          label="Назва групи"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Наприклад: КН-41"
          error={errors.name}
          required
        />
        <Input
          label="Спеціальність"
          value={formData.specialty}
          onChange={handleChange('specialty')}
          placeholder="Комп’ютерні науки"
          error={errors.specialty}
          required
        />
        <Select
          label="Курс"
          value={formData.year}
          onChange={handleChange('year')}
          options={[1, 2, 3, 4, 5, 6].map(y => ({ value: String(y), label: `${y} курс` }))}
          placeholder="Виберіть курс"
          error={errors.year}
          required
        />
        <Input
          label="Кількість студентів"
          type="number"
          min="1"
          max="100"
          value={formData.studentsCount}
          onChange={handleChange('studentsCount')}
          placeholder="25"
          error={errors.studentsCount}
          required
        />
      </div>

      <div className="entity-form-actions">
        <Button text="Скасувати" type="secondary" onClick={onCancel} />
        <Button text="Додати групу" type="success" htmlType="submit" />
      </div>
    </form>
  );
}

export default GroupForm;
