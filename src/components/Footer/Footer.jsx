import React from 'react'
import Image from 'next/image'
import LogoH from '@/assets/Logo Horizontal Claro.svg'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Email from '@/assets/emailicon.svg'


export default function Footer() {
  return (
    <div className='w-full bg-primary-dark-brown h-[21rem] flex flex-col items-center justify-center '>
        
        <div className='w-[70.5rem] flex justify-between items-center h-[13rem] '>
            <div className='w-[15rem] h-full flex flex-col justify-between'>
                <Image
                    className='w-full '
                    src={LogoH}
                    alt='Logo'
                />

                <h3 className='text-base text-detail-light-beige text-justify'>
                    Cada chave que entregamos é a porta para um novo capítulo na sua vida.
                </h3>
            </div>

            <div className='w-[15rem] h-full flex flex-col justify-between text-detail-light-beige'>
                <h1>
                    Entre em Contato conosco
                </h1>

                <h3>
                    (88) 99999-9999
                </h3>

                <h3>
                    imobiliariawh@gmail.com
                </h3>

                <div className='flex w-full h-[3rem] justify-between items-center'>
                   <a href='/' className='h-full w-full'><FaFacebook className='h-full w-full '/></a>  
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
        <div className=' w-[80rem] flex justify-between items-center h-[2rem]  border-b-2 border-detail-light-beige '></div>

    </div>
  )
}
