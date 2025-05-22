// src/widgets/TemplateCard.tsx (пример шаблонной карты)
import React from 'react';
import { GameCard } from '../../pages/home';
import Text from '../../shared/Text/Text';

interface TemplateCardProps {
  card: GameCard;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ card }) => {
  return (
    <div className="border-2 border-yellow-400 p-4 rounded-lg bg-[#F3E9D2] w-60">
      <Text variant="title" className="mb-2">
        {card.title}
      </Text>
      <div className="mb-2 text-center">
        <span className="px-2 py-1 bg-yellow-300 text-[#3E2A14] rounded-full">
          {card.cost}
        </span>
      </div>
      <Text variant="description" className="mb-4">
        {card.description}
      </Text>
      <div className="flex justify-between text-sm">
        <Text>Atk: {card.attack}</Text>
        <Text>HP: {card.health}</Text>
      </div>
    </div>
  );
};

export default TemplateCard;