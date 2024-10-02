'use client';
import { desc } from 'framer-motion/client';
import React from 'react'

type Props = {
    title: string;
    description: string;
    icon?: React.ReactNode; // Adiciona a propriedade opcional 'icon'
  };

export default function InfoCard({ title, description, icon }: Props) {
  return (

    <div className='w-[17rem] flex-col flex'>
      
      {icon && <span className="mr-1 text-5xl ">{icon}</span>}
      
      <h1 className='text-3xl py-4'>
      {title}
      </h1>

      <h3 className='text-base text-justify font-extralight'>
      {description}
      </h3>
    </div>
  )
}
