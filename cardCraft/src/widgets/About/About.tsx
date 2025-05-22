// src/widgets/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="p-12 text-center">
      <h3 className="text-2xl font-bold mb-4">О проекте</h3>
      <p className="max-w-2xl mx-auto">
        CardCraft — платформа для создания и обмена коллекционными картами. Делитесь своими идеями
        с сообществом и создавайте уникальные игровые механики!
      </p>
    </section>
  );
};

export default About;