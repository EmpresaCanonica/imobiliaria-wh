//Em caso de mudar a imagem desta sessão, ela é chamada dentro do file "tailwind.config.js"
'use client'; 
import Image from 'next/image'
import {Button} from "@nextui-org/button";
import { FaCircleArrowDown } from "react-icons/fa6";
import {Divider} from "@nextui-org/divider";
import Casa1 from '@/assets/casa1.svg'
import Casa2 from '@/assets/casa2.svg'
import Casa3 from '@/assets/casa3.svg'

const scrollToSection = (anchorId: string): void => {
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};


export default function HeroSection (){

    return(
        <div id="HeroSection" 
             className="z-10 w-full flex justify-center mx-auto md:h-[50rem] h-[64rem] max-h-[64rem] max-w-[1800px] bg-cover bg-img_bg_hero bg-no-repeat bg-center ">
       
        <div className="flex-col flex  w-[70.5rem] justify-center h-full text-black ">
            {/* Bloco de Destaque */}
            <div className='md:w-[30rem] w-[24rem] md:pl-0 pl-[2rem]'>
                {/* Texto */}
                <div className="pb-[4rem]">
                    <h1 className="md:text-4xl text-3xl text-praimary-light-brown font-bold pb-2">
                        Seu próximo lar está a um clique de distância. Vamos encontrá-lo juntos!
                    </h1>
                    <h3 className="text-detail-beige md:text-medium text-sm w-[60%] md:w-[100%]">
                        Entre em contato e encontre o lugar ideal para chamar de lar!
                    </h3>
                </div>
                {/* Botões */}
                <div className="mb-[4rem]">
            <Button 
                className="bg-detail-beige text-off" 
                endContent={<FaCircleArrowDown />}
                onClick={() => scrollToSection('Contato')} // Usar o id da seção de contato
            >
                Entre em Contato
            </Button>

            <Button 
                className="bg-detail-beige text-off mx-4" 
                endContent={<FaCircleArrowDown />}
                onClick={() => scrollToSection('Sobre nós')} // Usar o id da seção Sobre nós
            >
                Sobre nós
            </Button>
        </div>
                {/* Imagens */}
                <div className='flex justify-between items-center px-2'>
                    <a href='#' >
                        <Image
                            className='md:min-h-16 md:min-w-16 h-24 w-24 transition-transform duration-300 ease-in-out transform hover:scale-125 active:opacity-75 cursor-pointer'
                            src={Casa1}
                            alt='Logo'
                        />
                    </a>

                    <Divider orientation="vertical" className='border-2 border-fuchsia-200 w-[2px] bg-detail-beige h-20' />
                    
                    <a href='#'>
                        <Image
                            className='md:min-h-16 md:min-w-16 h-24 w-24 transition-transform duration-300 ease-in-out transform hover:scale-125 active:opacity-75 cursor-pointer'
                            src={Casa2}
                            alt='Logo'
                        />
                    </a>
                    
                    <Divider orientation="vertical" className='hidden md:flex border-2 border-fuchsia-200 w-[2px] bg-detail-beige h-20' />
                    
                    <a href='#'>
                        <Image
                            className='hidden md:flex md:min-h-16 md:min-w-16 h-24 w-24 transition-transform duration-300 ease-in-out transform hover:scale-125 active:opacity-75 cursor-pointer'
                            src={Casa3}
                            alt='Logo'
                        />
                    </a>

                </div>
            </div>
        </div>

        </div>
    )
  }