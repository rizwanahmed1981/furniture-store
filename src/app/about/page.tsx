import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import whitech from '@/app/assets/images/white_ch.png'
import { CircleCheck, Recycle, Ticket, Truck } from 'lucide-react'
import bigsofa from "@/app/assets/images/largerSofa.jpg"
import blackch from "@/app/assets/images/blackch.png"
import chairblack from "@/app/assets/images/chairblack.png"




const About = () => {
    return (
        <div>
            {/* about cards */}
            <div className='flex md:flex-row flex-col items-center justify-center capitalize md:p-12 p-6 gap-8'>
                <div className='bg-myCard flex flex-col md:items-start items-center justify-between gap-8 text-wrap p-12 rounded-lg'>
                    <div className='text-myWhiteBg flex flex-col gap-8 '>
                        <h2 className='md:text-[28px] text-[22px]'>About Us - Comforty</h2>
                        <p className='text-pretty text-justify'>At Comforty, we believe that the right<br /> chair can transform  your space and<br /> elevate your comfort. Specializing in <br />ergonomic design, premium materials,<br /> and modern aesthetics, we craft chairs that<br /> seamlessly blend style with functionality. </p>
                    </div>

                    <Button className='bg-myButton rounded-lg hover:cursor-pointer hover:bg-purple-400'>View Collection</Button>
                </div>
                <div className=''>

                    <Image src={whitech} alt='white chair' width={380} height={380} />

                </div>
            </div>
            {/* heading */}
            <h1 className='text-myBlack font-semibold text-center text-2xl px-8 my-6 uppercase'>
                What makes our brand diffrent
            </h1>
            {/* services */}
            <div className='flex md:flex-row flex-col items-center md:items-center gap-6 p-4 text-center md:text-start md:p-12'>
                <div className='bg-myBgGrey flex flex-col items-center md:items-start p-8 gap-4 text-myButton'>
                    <Truck />
                    <p className='text-[16px]'>Next day as standard</p>
                    <p className='text-[12px] text-wrap'>Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className='bg-myBgGrey flex flex-col items-center md:items-start p-8 gap-4 text-myButton'>
                    <CircleCheck />
                    <p className='text-[16px]'>Made by true artisans</p>
                    <p className='text-[12px] text-wrap'>Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className='bg-myBgGrey flex flex-col items-center md:items-start p-8 gap-4 text-myButton'>
                    <Ticket />
                    <p className='text-[16px]'>Unbeatable prices</p>
                    <p className='text-[12px] text-wrap'>For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className='bg-myBgGrey flex flex-col items-center md:items-start p-8 gap-4 text-myButton'>
                    <Recycle />
                    <p className='text-[16px]'>Recycled packaging</p>
                    <p className='text-[12px] text-wrap'>We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>

            {/* 2nd heading */}
            <h1 className='text-myBlack font-semibold text-center md:text-start text-2xl px-8 my-6 uppercase'>
                Our popular Products
            </h1>
            {/* our prodcuts section */}
            <div className='grid md:grid-cols-12 gap-6 md:p-12 p-4'>
                <div className='col-span-6 flex flex-col gap-2 text-myCard'>
                    <Image src={bigsofa} alt='big sofa' width={590} height={400} />
                    <p>The Poplar suede sofa</p>
                    <p>$99.00</p>
                </div>
                <div className='col-span-3 flex flex-col gap-2 text-myCard'>
                    <Image src={blackch} alt='big sofa' width={400} height={400} />
                    <p>the dadndy chair</p>
                    <p>$99.00</p>
                </div><div className='col-span-3 flex flex-col gap-2 text-myCard'>
                    <Image src={chairblack} alt='big sofa' width={400} height={400} />
                    <p>The dandy chair</p>
                    <p>$99.00</p>
                </div>

            </div>
        </div>
    )
}

export default About