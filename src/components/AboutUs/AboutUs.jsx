'use client';
import React from 'react'
import Card from '@/components/UI/InfoCard'

import { FaUserFriends } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";




export default function Shop (){
    return (
    <div id='Sobre nós' className='w-full bg-img_wallpaper_aboutus md:h-[32rem] h-full flex items-center justify-center bg-no-repeat  mx-auto bg-center'>
        <div className='hidden md:flex flex-wrap items-center justify-between w-[70.5rem] px-[4rem]'>

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

        <div className='md:hidden flex flex-col items-center justify-between w-[70.5rem] py-[4rem] gap-8'>

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
