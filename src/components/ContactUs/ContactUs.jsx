import React from 'react'
import Image from 'next/image'
import House from '@/assets/houses.jpg'
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { label } from 'framer-motion/client';


export default function ContactUs() {
  return (

    <div id='Contato' className='w-full bg-off md:h-[64rem] h-[50rem] flex justify-between items-center mx-auto'>

        <div className='hidden h-[38rem] w-[70rem]  md:flex justify-between items-center mx-auto gap-4 px-[1rem]'>

            <div className='w-[50%] h-full flex flex-col justify-between'>
                <div className='text-black  flex-col flex  items-start justify-center text-left'>
                    <h1 className='text-3xl pb-2'>
                        Fale com a gente!
                    </h1>
                    <h3 className='text-base'>
                        Envie um e-mail direto do nosso site e tire suas dúvidas.
                    </h3>
                </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="Nome" label="Nome"  labelPlacement="inside" className='text-black' classNames={{label:"text-black group-data-[filled=true]:text-gray-600  ", inputWrapper:"bg-white"}} variant='bordered' />
                        <Input type="Sobrenome" label="Sobrenome"  labelPlacement="inside" className='text-black' classNames={{label:"text-black group-data-[filled=true]:text-gray-600  ", inputWrapper:"bg-white"}} variant='bordered' />
                    </div>

                    <Input type="email" label="Email"  labelPlacement="inside" className='text-black' variant='bordered'  classNames={{label:"text-black group-data-[filled=true]:text-gray-600  ", inputWrapper:"bg-white"}}   />
                    
                    <Textarea
                        label="Sua Mensagem"
                        placeholder=""
                        classNames={{label:"text-black group-data-[filled=true]:text-gray-600 ", inputWrapper:"bg-white"}}
                        className='text-black '
                        variant="bordered"
                        
                    />
                     <Button className="bg-primary-dark-brown text-off w-full h-[2rem] px-0 py-7 " >
                        Enviar
                     </Button>
                
            </div>
            
            <div className='w-[50%] h-full  '>
                <a>
                    <Image
                        className='w-[full] h-full rounded-2xl '
                        src={House}
                        alt='Logo'
                    />
                </a>
            </div>
        </div>

        <div className='md:hidden h-[38rem] md:w-[70rem] w-[35rem] flex justify-between items-center mx-auto gap-4 px-[1rem]'>
            <div className='flex flex-col'> 
                <div className='text-black  flex-col flex  items-start justify-center text-left'>
                    <h1 className='text-3xl pb-2'>
                        Fale com a gente!
                    </h1>
                    <h3 className='text-base'>
                        Envie um e-mail direto do nosso site e tire suas dúvidas.
                    </h3>
                </div>

            <div className='w-full h-full flex flex-col justify-between'>
                    <div className='flex gap-4 pb-4 h-full'>
                    
                        <div className="flex w-[50%] flex-col justify-between gap-4">
                            <Input type="Nome" label="Nome"  labelPlacement="inside" className='text-black' classNames={{label:"text-black ", inputWrapper:"bg-white"}} variant='bordered' />
                            <Input type="Sobrenome" label="Sobrenome"  labelPlacement="inside" className='text-black' classNames={{label:"text-black ", inputWrapper:"bg-white"}} variant='bordered' />
                            <Input type="email" label="Email"  labelPlacement="inside" className='text-black' variant='bordered'  classNames={{label:"text-black ", inputWrapper:"bg-white"}}   />
                            <Textarea
                            label="Sua Mensagem"
                            placeholder=""
                            classNames={{label:"text-black ", inputWrapper:"bg-white"}}
                            className='text-black'
                            variant="bordered"
                            
                        />
                        </div>
                    
                        <div className='w-[50%] min-h-full  '>
                            <a>
                                <Image
                                    className='w-full h-full rounded-2xl '
                                    src={House}
                                    alt='Logo'
                                />
                            </a>
                        </div>

                    </div>
                    
                
            </div>
                    
                     <Button className="bg-primary-dark-brown text-off w-full h-[2rem] px-0 py-7 " >
                        Enviar
                     </Button>
            
            </div>
        </div>

    </div>
  )
}
