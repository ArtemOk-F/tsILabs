// src/widgets/BannerCatalog.tsx
import React from 'react';

const BannerCatalog: React.FC = () => {
  return (
    <section className="relative bg-[#5A3E1B] text-yellow-100 p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Создай собственную карту для коллекционной карточной игры
      </h2>
      <p className="text-lg">
        Существа, заклинания или оружие — воплоти любую идею!
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-yellow-400 text-[#5A3E1B] font-semibold rounded hover:bg-yellow-500">
          Приступить
        </button>
      </div>
    </section>
  );
};

export default BannerCatalog;