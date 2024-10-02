"use client";
import React, { useState, useEffect } from "react";
import {Divider} from "@nextui-org/divider";

import LogoV from '@/assets/Logo Vertical.svg'
import LogoH from '@/assets/Logo Horizontal.svg'
import {ItemMenu} from '@/components/UI/NavbarButton'
import {ItemMenuNav} from '@/components/UI/NavbarButtonMobile'
import { HiInformationCircle } from "react-icons/hi";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

import { TiHome } from "react-icons/ti";

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Image from 'next/image'
import {Navbar,   
        NavbarBrand,   
        NavbarContent,   
        NavbarItem,   
        NavbarMenuToggle,  
        NavbarMenu,  
        NavbarMenuItem} 
        from "@nextui-org/navbar";

export default function Header () {
  
  const [nav, setNav] = useState(false)
  const [navBg, setNavBg] = useState(false); // Estado para a cor da navbar

  const handleNav = () =>{
      setNav(!nav)
  }
  
  const changeNavBg = () => {
    if (window.scrollY >= 80) { // Muda a cor quando a rolagem é maior que 80px
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    
    return () => {
      window.removeEventListener('scroll', changeNavBg); // Remove o event listener ao desmontar
    };
  }, []);

  return (
  <nav className={`fixed h-[8rem] w-full flex items-center z-40 transition-colors duration-500 ${navBg ? 'bg-detail-beige' : 'bg-transparent'}`}>
    <div className="flex mx-auto items-center justify-between w-[70.5rem] ">
      <ul className='hidden md:flex mx-auto items-center justify-between w-[70.5rem]  text-primary-brown font-bold'>
        
        <li><ItemMenu name='Início' anchorId='' /></li>
        <li><ItemMenu name='Vendas' anchorId='' /></li>
        <li><ItemMenu name='Informações' anchorId='' /></li>

        <li>
          <a href='/'>
            <Image
              className='md:min-h-16 md:min-w-16 h-24 w-24 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
              src={LogoV}
              alt='Logo'
            />
          </a>
        </li>

        <li><ItemMenu name='Contato' anchorId='' /></li>
        <li><ItemMenu name='Localização' anchorId='' /></li>
        <li><ItemMenu name='Sobre nós' anchorId='' /></li>
        
      </ul>

      <a href='/'>
              <Image
                  className='md:hidden h-16 w-32 mt-[1rem] ml-[2rem] transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                  src={LogoH}
                  alt="Logo"
              />
      </a>


      <div onClick={handleNav} className="block md:hidden items-center " >
          {nav ? <AiOutlineClose className="z-10 absolute top-12 right-4 text-primary-dark-brown" size={30}/> : <AiOutlineMenu className="z-10 absolute top-12 right-4 text-primary-dark-brown"  size={30} />}
      </div>

      <div className={nav ? '  md:hidden absolute left-0 top-0 w-[60%] h-screen bg-detail-light-beige shadow-2xl ease-in-out duration-500 font-bold  z-40  ': 'fixed left-[-100%]'}>
                      
        <a href='/'>
            <Image
                className='h-24 w-32 mt-6 ml-8 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                src={LogoH}
                alt="Logo"
            />
        </a>
        <ul className='py-[3rem] text-center text-primary-dark-brown'>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<TiHome />} name='Início' anchorId=''/>    </li>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<MdShoppingCart/>} name='Vendas' anchorId='' />      </li>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<HiInformationCircle/>} name='Informações' anchorId=''/>     </li>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<FaPhone/>} name='Contato' anchorId='' />    </li>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<FaLocationDot/>} name='Localização' anchorId='' />     </li>
            <li className='p-2 pl-8  my-2 text-start'>    <ItemMenuNav icon={<FaUserFriends />} name='Nosso trabalho' anchorId='' />       </li>
        </ul>
      </div>


    </div>
  </nav>

  )
}
