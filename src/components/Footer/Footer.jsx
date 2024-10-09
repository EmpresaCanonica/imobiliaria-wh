import React from 'react'
import Image from 'next/image'
import LogoH from '@/assets/Logo Horizontal Claro.svg'
import { FaFacebookSquare , FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Email from '@/assets/emailicon.svg'


export default function Footer() {
  return (
    <div id='Informacoes' className='w-full bg-primary-dark-brown md:h-[21rem] h-[18rem] flex flex-col items-center justify-center '>
        
        <div className='flex flex-col w-full  items-center justify-center  md:px-[4rem] px-[0.5rem] max-w-[70.5rem]'>
        
        <div className=' flex justify-between w-full md:px-[4rem] px-[1rem] items-center md:h-[13rem] h-[10rem] '>
            <div className='md:w-[15rem] w-[10rem] h-full flex flex-col justify-between'>
                <Image
                    className='w-full '
                    src={LogoH}
                    alt='Logo'
                />

                <h3 className='md:text-medium text-sm text-detail-light-beige text-justify font-rest'>
                    Cada chave que entregamos é a porta para um novo capítulo na sua vida.
                </h3>
            </div>

            <div className='md:w-[15rem] w-[10rem] md:text-medium text-sm h-full flex flex-col font-rest justify-between text-detail-light-beige'>
                <h1>
                    Entre em Contato conosco
                </h1>

                <h3>
                    (88) 99999-9999
                </h3>

                <h3>
                    imobiliariawh@gmail.com
                </h3>

                <div className='flex w-full md:h-[3rem] h-[2rem] justify-between items-center'>
                   <a href='/' className='h-full w-full'><FaFacebookSquare  className='h-full w-full '/></a>  
                   <a href='/' className='h-full w-full'><FaInstagramSquare className='h-full w-full'/></a>  
                   <a href='/' className='h-full w-full'><FaLinkedin className='h-full w-full'/></a>  
                   <a href='/' className='h-full w-full'>
                        <Image
                            className='w-full h-full '
                            src={Email}
                            alt='Logo'
                        />
                    </a>
                </div>
            </div>

        </div>
        
        <div className=' w-full h-[2rem]  border-b-2 border-detail-light-beige '></div>
        </div>
    </div>
  )
}
