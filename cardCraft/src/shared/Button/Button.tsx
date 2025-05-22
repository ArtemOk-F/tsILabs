// src/shared/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  width,
  height,
}) => {
  const styleClasses = `${width ?? ''} ${height ?? ''} px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`;

  return (
    <button type={type} onClick={onClick} className={styleClasses}>
      {children}
    </button>
  );
};

export default Button;