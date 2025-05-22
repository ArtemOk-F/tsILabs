// src/widgets/CardList.tsx
import React from 'react';
import Card from '../../shared/Card/Card';
import { GameCard } from '../../pages/home';

interface CardListProps {
  data: GameCard[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
      {data.length === 0 && (
        <p className="col-span-full text-center text-gray-400">
          Пока нет созданных карт. Добавьте первую!
        </p>
      )}
    </section>
  );
};

export default CardList;