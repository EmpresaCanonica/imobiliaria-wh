'use client';
import React from 'react'
import Card from '@/components/UI/InfoCard'

import { FaUserFriends } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";




export default function Shop (){
    return (
    <div className='w-full bg-img_wallpaper_aboutus md:h-[32rem] h-[50rem] flex  items-center justify-center'>
        <div className='flex flex-wrap items-center justify-between w-[70.5rem]'>

            <Card   title='Confiança' 
                    icon={<IoShieldCheckmark />} 
                    description='Trabalhamos com total transparência para garantir a segurança e tranquilidade em todas as etapas da compra, venda ou aluguel do seu imóvel.'/>

            <Card   title='Compromisso' 
                    icon={<FaHeart />} 
                    description='Nosso objetivo é entender suas necessidades e oferecer um atendimento personalizado, buscando sempre superar as suas expectativas.'/>

            <Card   title='Inovação' 
                    icon={<HiLightBulb />} 
                    description='Utilizamos as mais modernas ferramentas digitais para tornar sua experiência mais prática e eficiente, facilitando a busca pelo lar perfeito.'/>


        </div>


    </div>
  )
}
