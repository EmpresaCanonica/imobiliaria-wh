import React from 'react'
import Window from './Windown'
import {NextUIProvider} from "@nextui-org/system";

export default function Shop (){
    return (
    <div className='w-full bg-detail-light-beige h-[100rem] '>
        <div className='relative flex items-center justify-center'>
            <div className='absolute'>
                <NextUIProvider>
            <Window/>
            </NextUIProvider>
            </div>
        </div>


    </div>
  )
}
