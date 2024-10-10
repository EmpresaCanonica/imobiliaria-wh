'use client';
import React from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  text1: string;
  text2: string;
  image1: string;  // Tipo string para as imagens
  image2: string;
};

export default function Card({ name, text1, text2, image1, image2 }: Props) {
  return (
    <div className='flex h-full w-full flex-col md:flex-row'>
      <div className='flex flex-col w-full md:w-[50%] h-full my-auto justify-between text-left md:px-0 px-10'>
        <h1 className='md:py-[0.6rem] py-[0.4rem] text-black text-2xl md:text-3xl border-l-8 px-2 border-praimary-light-brown font-body font-bold'>
          {name}
        </h1>

        <h2 className='md:py-[1rem] py-[0.4rem] text-black text-xl md:text-2xl px-5 font-rest'>
          {text1}
        </h2>

        <h3 className='md:py-[1rem] py-[0.4rem] text-black text-xs md:text-sm px-5 font-rest'>
          {text2}
        </h3>
        {/* <Button className="bg-praimary-light-brown w-[8rem] text-off " endContent={<FaCirclePlus/>}>
            Veja mais
        </Button> */}
      </div>

      <div className='w-full md:w-[50%] py-6 flex justify-center relative'>
        <Image
          className='md:h-[20rem] h-[15rem] md:w-[25rem] w-[20rem] transition-transform duration-300 ease-in-out transform cursor-pointer rounded-2xl border-4 border-white -rotate-6 absolute brightness-50'
          src={image1}  // Imagem recebida via props
          alt='Imagem 1'
          width={400}   // Defina a largura
          height={300}  // Defina a altura
        />
        <Image
          className='md:h-[20rem] h-[15rem] md:w-[25rem] w-[20rem] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-2xl border-4 border-white'
          src={image2}  // Imagem recebida via props
          alt='Imagem 2'
          width={400}   // Defina a largura
          height={300}  // Defina a altura
        />
      </div>
    </div>
  )
}
