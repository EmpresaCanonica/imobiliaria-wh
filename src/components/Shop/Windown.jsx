"use client";

import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {cidade,tipo,preco} from "./data";
import {Button} from "@nextui-org/button";
import { FaSearch } from "react-icons/fa";

export default function Window (){
    return (
    <div className='w-[25rem] md:w-[49rem] bg-off md:h-[13rem] h-[20rem] rounded-xl flex flex-col items-center'>
        <div className='text-black  flex-col flex  items-center justify-center py-[1rem]'>
            <h1 className='text-3xl pb-2 font-body font-bold'>
                Encontre seu Imóvel
            </h1>
            <h3 className='text-base font-rest'>
                Vamos achar o lar ideal para você!
            </h3>
        </div>
        
        <div className="flex w-full flex-wrap md:flex justify-between items-center md:px-20 px-10 font-rest">
          {/* Botão 1 */}
        <Select 
          label="Localização" 
          variant={"bordered"}
          className="  w-[8rem]  md:w-[10rem]  rounded-2xl py-2 px-2"
          classNames={{
            helperWrapper: "bg-red-500  ",
            label: "group-data-[filled=true]:-translate-y-5 group-data-[filled=true]:text-off text-off ",
            trigger: "min-h-16 bg-detail-beige focus:bg-detail-beige hover:bg-detail-beige",
            popoverContent: "bg-detail-beige   ",
          }}
        >
        
        {cidade.map((city) => (
          <SelectItem key={city.key} 
          className= ' custom-select-item bg-detail-light-beige focus:bg-detail-light-beige hover:bg-detail-beige text-black'>
            {city.label}
          </SelectItem>
        ))}

      </Select>

          {/* Botão 2 */}
        <Select 
          label="Tipo" 
          variant={"bordered"}
          className=" w-[8rem]  md:w-[10rem] rounded-2xl py-2 px-2"
          classNames={{
            helperWrapper: "bg-red-500  ",
            label: "group-data-[filled=true]:-translate-y-5 group-data-[filled=true]:text-off text-off ",
            trigger: "min-h-16 bg-detail-beige focus:bg-detail-beige hover:bg-detail-beige",
            popoverContent: "bg-detail-beige   ",
          }}
        >
        
        {tipo.map((type) => (
          <SelectItem key={type.key} 
          className= ' custom-select-item bg-detail-light-beige focus:bg-detail-light-beige hover:bg-detail-beige text-black'>
            {type.label}
          </SelectItem>
        ))}

      </Select>

          {/* Botão 3 */}
        <Select 
          label="Valor" 
          variant={"bordered"}
          className=" w-[10rem] md:w-[14rem] rounded-2xl py-4 px-2"
          classNames={{
            helperWrapper: "bg-red-500  ",
            label: "group-data-[filled=true]:-translate-y-5 group-data-[filled=true]:text-off text-off ",
            trigger: "min-h-16 bg-detail-beige focus:bg-detail-beige hover:bg-detail-beige",
            popoverContent: "bg-detail-beige   ",
          }}
        >
        
        {preco.map((value) => (
          <SelectItem key={value.key} 
          className= ' custom-select-item bg-detail-light-beige focus:bg-detail-light-beige hover:bg-detail-beige text-black'>
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