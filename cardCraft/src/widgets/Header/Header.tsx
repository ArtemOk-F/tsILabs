// src/widgets/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-[#3E2A14] text-yellow-300 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CardCraft</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">
          Главная
        </Link>
        <Link to="/create" className="hover:underline">
          Создать карту
        </Link>
        <Link to="/gallery" className="hover:underline">
          Галерея
        </Link>
        <Link to="/about-game" className="hover:underline">
          О игре
        </Link>
        <Link to="/about-us" className="hover:underline">
          О нас
        </Link>
      </nav>
    </header>
  );
};

export default Header;