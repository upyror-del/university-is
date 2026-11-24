import React, { useState } from 'react';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { ROOM_TYPES } from '../../data/constants';
import { uid } from '../../utils/schedule';
import '../Common/Form.css';

// Форма додавання аудиторії
// Props:
//   rooms    - наявні аудиторії (для перевірки унікальності номера в корпусі)
//   onAdd    - додати аудиторію
//   onCancel - закрити форму
function RoomForm({ rooms, onAdd, onCancel }) {
  const initialFormData = { number: '', building: '', capacity: '', type: '' };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const number = formData.number.trim();
    const building = formData.building.trim();

    if (!number) {
      newErrors.number = 'Вкажіть номер аудиторії';
    } else if (
      building &&
      rooms.some(r =>
        r.number.toLowerCase() === number.toLowerCase() &&
        r.building.toLowerCase() === building.toLowerCase()
      )
    ) {
      newErrors.number = 'Така аудиторія в цьому корпусі вже є';
    }
    if (!building) newErrors.building = 'Вкажіть корпус';

    const capacity = Number(formData.capacity);
    if (formData.capacity === '') {
      newErrors.capacity = 'Вкажіть кількість місць';
    } else if (!Number.isInteger(capacity) || capacity < 1 || capacity > 500) {
      newErrors.capacity = 'Ціле число від 1 до 500';
    }
    if (!formData.type) newErrors.type = 'Виберіть тип аудиторії';
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
      id: uid('r'),
      number: formData.number.trim(),
      building: formData.building.trim(),
      capacity: Number(formData.capacity),
      type: formData.type
    });
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="entity-form-grid">
        <Input
          label="Номер аудиторії"
          value={formData.number}
          onChange={handleChange('number')}
          placeholder="Наприклад: 204"
          error={errors.number}
          required
        />
        <Input
          label="Корпус"
          value={formData.building}
          onChange={handleChange('building')}
          placeholder="Головний корпус"
          error={errors.building}
          required
        />
        <Input
          label="Кількість місць"
          type="number"
          min="1"
          max="500"
          value={formData.capacity}
          onChange={handleChange('capacity')}
          placeholder="30"
          error={errors.capacity}
          required
        />
        <Select
          label="Тип аудиторії"
          value={formData.type}
          onChange={handleChange('type')}
          options={Object.entries(ROOM_TYPES).map(([value, label]) => ({ value, label }))}
          placeholder="Виберіть тип"
          error={errors.type}
          required
        />
      </div>

      <div className="entity-form-actions">
        <Button text="Скасувати" type="secondary" onClick={onCancel} />
        <Button text="Додати аудиторію" type="success" htmlType="submit" />
      </div>
    </form>
  );
}

export default RoomForm;
