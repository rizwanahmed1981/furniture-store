import React from 'react'
import whitech from '../assets/images/white_ch.png'
import yellowch from '../assets/images/yellow_ch.png'
import pinkch from '../assets/images/pink_ch.png'
import white2ch from '../assets/images/white2_ch.png'
import woodch from '../assets/images/wooden_chair.png'
import Image from 'next/image'





const Product = () => {
    return (

        <div className='flex md:flex-row flex-col gap-4 md:gap-0 md:my-4 items-center justify-center px-6'>
            {/* Heading */}
            <div className='md:w-[10%] flex justify-center'>
                <h1 className='text-myBlack font-semibold text-2xl md:-rotate-90 md:text-nowrap text-wrap text-center uppercase'>
                    Explore new and popular styles
                </h1>
            </div>
            {/* product collection section*/}
            <div className='grid md:grid-cols-12 gap-4  items-center md:w-[90%]'>
                <div className='md:col-span-6 md:row-span-2'>
                    <Image src={yellowch} alt='yellow chair' width={350} height={350} className='w-full h-full' />
                </div>
                <div className='md:col-span-3 md:row-span-1'>
                    <Image src={pinkch} alt='yellow chair' width={350} height={350} className='w-full h-full' />
                </div>
                <div className='md:col-span-3 md:row-span-1'>
                    <Image src={whitech} alt='yellow chair' width={350} height={350} className='w-full h-full' />
                </div>
                <div className='md:col-span-3 md:row-span-1'>
                    <Image src={woodch} alt='yellow chair' width={350} height={350} className='w-full h-full' />
                </div>
                <div className='md:col-span-3 md:row-span-1'>
                    <Image src={white2ch} alt='yellow chair' width={350} height={350} className='w-full h-full' />
                </div>
            </div>

        </div>

    )
}

export default Product