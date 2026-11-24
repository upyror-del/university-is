import React, { useState } from 'react';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { DAYS, SLOTS, LESSON_TYPES } from '../../data/constants';
import { findConflicts, uid } from '../../utils/schedule';
import '../Common/Form.css';

// Форма додавання заняття з перевіркою конфліктів розкладу
// Props:
//   groups, teachers, rooms - довідники
//   lessons  - усі заняття (для пошуку конфліктів)
//   preset   - початкові значення (клік по клітинці сітки), напр. { day, slot, groupId }
//   onAdd    - додати заняття (отримує об'єкт заняття)
//   onCancel - закрити форму
function LessonForm({ groups, teachers, rooms, lessons, preset = {}, onAdd, onCancel }) {
  const initialFormData = {
    subject: '',
    type: preset.type || 'lecture',
    groupId: preset.groupId || '',
    teacherId: preset.teacherId || '',
    roomId: preset.roomId || '',
    day: preset.day ? String(preset.day) : '',
    slot: preset.slot ? String(preset.slot) : ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [conflicts, setConflicts] = useState([]);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    setConflicts([]); // змінили дані — попередні конфлікти неактуальні
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.subject.trim()) {
      newErrors.subject = 'Вкажіть назву предмета';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Назва має містити щонайменше 2 символи';
    }
    if (!formData.groupId) newErrors.groupId = 'Виберіть групу';
    if (!formData.teacherId) newErrors.teacherId = 'Виберіть викладача';
    if (!formData.roomId) newErrors.roomId = 'Виберіть аудиторію';
    if (!formData.day) newErrors.day = 'Виберіть день';
    if (!formData.slot) newErrors.slot = 'Виберіть пару';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setConflicts([]);
      return;
    }

    const lesson = {
      id: uid('l'),
      subject: formData.subject.trim(),
      type: formData.type,
      groupId: formData.groupId,
      teacherId: formData.teacherId,
      roomId: formData.roomId,
      day: Number(formData.day),
      slot: Number(formData.slot)
    };

    // Предметна логіка: чи немає накладок за часом, і чи вміщає аудиторія групу
    const found = findConflicts(lessons, lesson, { groups, teachers, rooms });
    if (found.length > 0) {
      setConflicts(found);
      return;
    }

    onAdd(lesson);
    setFormData(initialFormData);
    setErrors({});
    setConflicts([]);
  };

  const typeOptions = Object.entries(LESSON_TYPES).map(([value, item]) => ({
    value,
    label: item.label
  }));
  const dayOptions = DAYS.map(d => ({ value: String(d.id), label: d.name }));
  const slotOptions = SLOTS.map(s => ({
    value: String(s.id),
    label: `${s.id} пара (${s.start}–${s.end})`
  }));

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="entity-form-grid">
        <Input
          label="Предмет"
          value={formData.subject}
          onChange={handleChange('subject')}
          placeholder="Наприклад: Бази даних"
          error={errors.subject}
          required
        />
        <Select
          label="Тип заняття"
          value={formData.type}
          onChange={handleChange('type')}
          options={typeOptions}
          required
        />
        <Select
          label="Група"
          value={formData.groupId}
          onChange={handleChange('groupId')}
          options={groups.map(g => ({ value: g.id, label: g.name }))}
          placeholder="Виберіть групу"
          error={errors.groupId}
          required
        />
        <Select
          label="Викладач"
          value={formData.teacherId}
          onChange={handleChange('teacherId')}
          options={teachers.map(t => ({ value: t.id, label: t.name }))}
          placeholder="Виберіть викладача"
          error={errors.teacherId}
          required
        />
        <Select
          label="Аудиторія"
          value={formData.roomId}
          onChange={handleChange('roomId')}
          options={rooms.map(r => ({
            value: r.id,
            label: `${r.number} (${r.capacity} місць)`
          }))}
          placeholder="Виберіть аудиторію"
          error={errors.roomId}
          required
        />
        <Select
          label="День тижня"
          value={formData.day}
          onChange={handleChange('day')}
          options={dayOptions}
          placeholder="Виберіть день"
          error={errors.day}
          required
        />
        <Select
          label="Пара"
          value={formData.slot}
          onChange={handleChange('slot')}
          options={slotOptions}
          placeholder="Виберіть пару"
          error={errors.slot}
          required
        />
      </div>

      {conflicts.length > 0 && (
        <div className="form-alert" role="alert">
          <p className="form-alert-title">Заняття не можна додати — конфлікт розкладу:</p>
          <ul>
            {conflicts.map(message => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="entity-form-actions">
        <Button text="Скасувати" type="secondary" onClick={onCancel} />
        <Button text="Додати заняття" type="success" htmlType="submit" />
      </div>
    </form>
  );
}

export default LessonForm;
