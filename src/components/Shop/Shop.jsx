'use client';
import React from 'react'
import Window from '@/components/Shop/Windown.jsx'
import {NextUIProvider} from "@nextui-org/system";
import Cards from "@/components/Shop/Card.tsx"
import Cards2 from "@/components/Shop/Card2.tsx"

import Casa1 from '../../assets/img_cards/casa1.jpg'
import Casa2 from '../../assets/img_cards/casa2.jpg'
import Casa3 from '../../assets/img_cards/casa3.jpg'
import Casa4 from '../../assets/img_cards/casa4.jpg'
import Casa5 from '../../assets/img_cards/casa5.jpg'
import Casa6 from '../../assets/img_cards/casa6.jpg'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Shop (){

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        
      };

    return (
    <div className='w-full bg-detail-light-beige h-[100rem] flex flex-col items-center'>
        
        <div className='relative flex flex-col items-center justify-center h-fit'>
            <div id='Buscar' className='absolute'>
            <NextUIProvider>
                <Window/>
            </NextUIProvider>
            </div>
        </div>

        <div className='h-full flex flex-col items-center justify-center my-auto'>
    
    {/* Primeira seção - Apartamentos */}
    <div id='Vendas' className='flex h-[8rem] w-full text-left'>
        <h1 className='text-black text-3xl font-semibold py-4'>
            
        </h1>
    </div>
    <div className='flex h-[10rem] w-full text-left items-end'>
        <h1 className='text-black text-3xl  pl-[1rem] font-body font-bold'>
            Apartamentos disponíveis
        </h1>
    </div>
    
    {/* Primeiro Slider */}
    <Slider {...settings} className='flex flex-col items-center my-auto justify-center w-screen max-w-[70.5rem] h-fit'>
        <div className='w-full flex justify-between flex-col'>
            <Cards 
                 name='Rua Pedra do Sol, 45'
                 text1='Apartamento para Locação, Caucaia / CE'
                 text2='Condomínio fechado com segurança 24h, próximo a praias paradisíacas e áreas de lazer.'
                 image1={Casa1.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa2.src}
            />
        </div>
        <div className='w-full'>
            <Cards 
                name='Rua das Laranjeiras, 215' 
                text1='Apartamento para Locação, Crato / CE' 
                text2='Conforto e modernidade no coração da cidade, com áreas de convivência e lazer completas.'
                image1={Casa3.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa4.src}
            />
        </div>
        <div className='w-full'>
            <Cards 
                name='Rua Estrela do Norte, 189' 
                text1='Apartamento para Locação, Sobral / CE' 
                text2='Apartamento moderno com varanda gourmet, perfeito para quem busca conforto e sofisticação no centro da cidade.'
                image1={Casa5.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa6.src}
            />
        </div>
    </Slider>

    {/* Segunda seção - Casas */}
    <div className='hidden md:flex h-[0.2rem] w-[80%] text-left items-end bg-detail-beige  '>
        <h1 className='text-black text-3xl font-semibold pt-[2rem]'>
            
        </h1>
    </div>
    <div className='flex h-[10rem] w-full text-left items-end'>
        <h1 className='text-black text-3xl  pl-[1rem] font-body font-bold'>
            Casas disponíveis
        </h1>
    </div>

    {/* Segundo Slider */}
    <Slider {...settings} className='flex flex-col items-center my-auto justify-center w-screen max-w-[70.5rem] h-fit'>
        <div className='w-full flex justify-between flex-col items-center'>
            <Cards2 
                name='Rua das Palmeiras, 142' 
                text1='Casa para Venda, Fortaleza / CE' 
                text2='Espaçosa casa com jardim exuberante, perfeito para momentos de lazer e descanso.'
                image1={Casa2.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa1.src}
            />
        </div>
        <div className='w-full'>
            <Cards2 
                name='Rua das Acácias, 75' 
                text1='Casa para Venda, Eusébio / CE' 
                text2='Casa térrea com design contemporâneo, área externa com piscina e espaço para churrasco, ideal para momentos de lazer com a família.'
                image1={Casa4.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa3.src}
            />
        </div>
        <div className='w-full'>
            <Cards2 
                name='"Rua Flor de Lis, 65' 
                text1='Chácara para Venda, Sobral / CE' 
                text2='Ampla chácara com piscina e área gourmet, ideal para relaxar e reunir a família.'
                image1={Casa6.src}  // Usando a propriedade .src ao importar localmente
                 image2={Casa5.src}
            />
        </div>
    </Slider>
</div>

    </div>
  )
}
