import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import chair1 from '../assets/images/chair1.png'
const Hero = () => {
  return (
    <div className='my-4 bg-myBgGrey h-screen mx-6 capitalize flex md:flex-row flex-col items-center p-10 justify-around'>
        <div className='flex flex-col gap-6 items-start'>
            <p className='font-semibold text-myBlack opacity-60'>welcome to chairy</p>
            <h1 className="scroll-m-20 text-4xl text-myBlack font-extrabold tracking-tight lg:text-5xl">best furniture <br/> collection for your <br/> interior</h1>
            <Button className='bg-myButton rounded-xl'>Shop Now <ArrowRight/></Button>
        </div>
        <div>
            <Image src={chair1} alt='hero image' width={500} height={500} className='w-[350px] h-[350px] md:w-[500px] md:h-[500px]'/>
        </div>

    </div>
  )
}

export default Hero