// src/shared/Card/Card.tsx
import React from 'react';
import { GameCard } from '../../pages/home';
import Text from '../Text/Text';

interface CardProps {
  card: GameCard;
}
const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="border p-4 rounded shadow m-2 w-48 bg-white">
      <Text variant="title">{card.title}</Text>
      <Text variant="description" className="mb-2">
        {card.description}
      </Text>
      <div className="flex justify-between">
        <Text>Cost: {card.cost}</Text>
        <Text>Atk: {card.attack}</Text>
        <Text>HP: {card.health}</Text>
      </div>
    </div>
  );
};

export default Card;