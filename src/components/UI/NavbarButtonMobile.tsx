'use client';
import React from 'react';

type Props = {
  name: string;
  anchorId?: string;
  icon?: React.ReactNode; // Adiciona a propriedade opcional 'icon'
};

export function ItemMenuNav({ name, anchorId, icon }: Props) {
  const scrollToSection = () => {
    if (anchorId) {
      const section = document.getElementById(anchorId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button className="w-30 flex items-center hover:scale-125" onClick={scrollToSection}>
      {/* Renderiza o ícone, se houver */}
      {icon && <span className="mr-1">{icon}</span>}
      <span className='text-p-white font-bold mx-2 px-2 py-1 '>
        {name}
      </span>
    </button>
  );
}
