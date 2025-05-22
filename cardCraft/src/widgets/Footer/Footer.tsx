/ src/widgets/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2A14] text-yellow-300 p-6 text-center">
      <nav className="space-x-4 mb-4">
        <a href="/about-us" className="hover:underline">
          О нас
        </a>
        <a href="/faq" className="hover:underline">
          FAQ
        </a>
        <a href="/help" className="hover:underline">
          Помощь
        </a>
        <a href="/contact" className="hover:underline">
          Связаться с нами
        </a>
      </nav>
      <p>© 2025 CardCraft. Все права защищены.</p>
    </footer>
  );
};

export default Footer;