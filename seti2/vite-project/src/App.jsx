import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Modal } from './components/Modal';
import { Card } from './components/Card';

function App() {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', cost: '', attack: '', health: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setCards((prev) => [...prev, form]);
    setForm({ title: '', description: '', cost: '', attack: '', health: '' });
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <Button onClick={() => setModalOpen(true)}>Добавить карту</Button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Новая карта</h2>
        <Input name="title" value={form.title} onChange={handleChange} placeholder="Название" />
        <Input name="description" value={form.description} onChange={handleChange} placeholder="Описание" />
        <Input name="cost" value={form.cost} onChange={handleChange} placeholder="Стоимость" type="number" />
        <Input name="attack" value={form.attack} onChange={handleChange} placeholder="Атака" type="number" />
        <Input name="health" value={form.health} onChange={handleChange} placeholder="Здоровье" type="number" />
        <div className="flex justify-end">
          <Button onClick={handleAdd}>Добавить</Button>
        </div>
      </Modal>

      <div className="flex flex-wrap mt-6">
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}
