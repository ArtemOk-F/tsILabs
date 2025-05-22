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
    if (!form.title.trim()) return;
    setCards((prev) => [...prev, form]);
    setForm({ title: "", description: "", cost: 0, attack: 0, health: 0 });
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Создать карту | CardCraft</title>
        <meta
          name="description"
          content="Создавайте уникальные карты для вашей коллекционной карточной игры"
        />
      </Helmet>

      <div className="p-6 flex justify-between items-center bg-gray-100">
        <h1 className="text-2xl font-bold">Создатель карт</h1>
        <Button onClick={() => setModalOpen(true)}>Добавить карту</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Новая карта</h2>
        <form onSubmit={handleAdd} className="space-y-4">
          <Input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Название карты"
          />
          <Input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Описание"
          />
          <Input
            name="cost"
            value={form.cost}
            onChange={handleChange}
            placeholder="Стоимость"
            type="number"
          />
          <Input
            name="attack"
            value={form.attack}
            onChange={handleChange}
            placeholder="Атака"
            type="number"
          />
          <Input
            name="health"
            value={form.health}
            onChange={handleChange}
            placeholder="Здоровье"
            type="number"
          />
          <div className="flex justify-end">
            <Button type="submit">Добавить</Button>
          </div>
        </form>
      </Modal>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
        {cards.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Пока нет созданных карт. Добавьте первую!
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
