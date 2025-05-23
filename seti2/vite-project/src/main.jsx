// src/pages/Home.tsx
import React, { useState, FormEvent } from "react";
import { Helmet } from "react-helmet";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import Modal from "../shared/Modal/Modal";
import Card from "../shared/Card/Card";

export interface GameCard {
  title: string;
  description: string;
  cost: number;
  attack: number;
  health: number;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<GameCard>({
    title: "",
    description: "",
    cost: 0,
    attack: 0,
    health: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "cost" || name === "attack" || name === "health"
          ? Number(value)
          : value,
    }));
  };

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    setCards((prev) => [...prev, form]);
    setForm({ title: "", description: "", cost: 0, attack: 0, health: 0 });
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Создатель карт | CardCraft</title>
        <meta
          name="description"
          content="Создавайте и редактируйте свои карты для коллекционной карточной игры"
        />
      </Helmet>

      {/* Кнопка открытия модалки */}
      <div className="p-4">
        <Button onClick={() => setModalOpen(true)}>Добавить карту</Button>
      </div>

      {/* Модалка добавления карты */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Новая карта</h2>
        <form onSubmit={handleAdd} className="space-y-3">
          <Input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Название"
          />
          <Input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Описание"
          />
          <Input
            name="cost"
            value={form.cost.toString()}
            onChange={handleChange}
            placeholder="Стоимость"
            type="number"
          />
          <Input
            name="attack"
            value={form.attack.toString()}
            onChange={handleChange}
            placeholder="Атака"
            type="number"
          />
          <Input
            name="health"
            value={form.health.toString()}
            onChange={handleChange}
            placeholder="Здоровье"
            type="number"
          />
          <div className="flex justify-end pt-2">
            <Button type="submit">Добавить</Button>
          </div>
        </form>
      </Modal>

      {/* Сетка отрисовки карт */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    </>
  );
};

export default Home;
