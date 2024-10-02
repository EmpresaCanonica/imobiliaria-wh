"use client";

import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {cidade,tipo,preco} from "./data";
import {Button} from "@nextui-org/button";
import { FaSearch } from "react-icons/fa";

export default function Window (){
  const color = "blue"
    return (
    <div className='w-[30rem] md:w-[49rem] bg-off md:h-[13rem] h-[20rem] rounded-xl flex flex-col items-center'>
        <div className='text-black  flex-col flex  items-center justify-center py-[1rem]'>
            <h1 className='text-3xl pb-2'>
                Encontre seu Imóvel
            </h1>
            <h3 className='text-base'>
                Vamos achar o lar ideal para você!
            </h3>
        </div>
        
        <div className="flex w-full flex-wrap md:flex justify-between items-center px-20">
        <Select 
          label="Localização" 
          variant={"flat"}
          className="w-[10rem]  rounded-2xl py-8 px-2 " 
          
        >
        {cidade.map((city) => (
          <SelectItem key={city.key} className=''>
            {city.label}
          </SelectItem>
        ))}
      </Select>

        <Select 
          label="Tipo" 
          variant={"flat"}
          className="w-[10rem] rounded-2xl py-8 px-2" 
          
      >
        {tipo.map((type) => (
          <SelectItem key={type.key} className=''>
            {type.label}
          </SelectItem>
        ))}
      </Select>

        <Select 
          label="Valor" 
          variant={"flat"}
          className="w-[10rem] s rounded-2xl px-2" 
          
      >
        {preco.map((value) => (
          <SelectItem key={value.key} className=''>
            {value.label}
          </SelectItem>
        ))}
      </Select>
      
      <Button className="bg-detail-beige text-off w-[2rem] h-[2rem] px-0 py-7 " endContent={<FaSearch/>}>
      
      </Button> 
        </div>


    </div>
  )
}
