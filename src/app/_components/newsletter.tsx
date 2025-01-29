import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import whitech from '../assets/images/white_ch.png'
import yellowch from '../assets/images/yellow_ch.png'
import pinkch from '../assets/images/pink_ch.png'
import deskch from '../assets/images/desk_chair.png'
import white2ch from '../assets/images/white2_ch.png'
import blackch from '../assets/images/black_pillow_ch.png'




const Card = [
    {
        name: "White Chair",
        price: 3000,
        description: "Comfortable white chair",
        image: whitech
    },
    {
        name: "Yellow Chair",
        price: 3200,
        description: "Stylish yellow chair",
        image: yellowch
    },
    {
        name: "Pink Chair",
        price: 3500,
        description: "Elegant pink chair",
        image: pinkch
    },
    {
        name: "White sofa Chair",
        price: 3000,
        description: "comfortable white chair",
        image: white2ch
    },
    {
        name: "desk Chair",
        price: 3000,
        description: "Comfortable white chair",
        image: deskch
    },
    {
        name: "Black Chair",
        price: 3200,
        description: "Stylish Black chair",
        image: blackch
    },

]




const NewsLetter = () => {
    return (
        <div className='bg-myBgGrey p-12 my-12 capitalize text-myBlack items-center flex flex-col gap-10'>
            <div>
                <h1 className="scroll-m-20 text-2xl text-center font-extrabold tracking-tight lg:text-4xl ">
                    Or subscribe to the newsletter
                </h1>
            </div>
            <div className='flex md:flex-row flex-col gap-6 items-center justify-around'>
                <input type="text" placeholder='Email Address...' className='border-b-4 text-lg rounded-lg py-3 px-6' />
                <Button className='text-myBlack bg-myButton p-4'>Submit</Button>
            </div>
            <div>
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl opacity-60 text-center ">
                    Follow products and discounts on Instagram
                </h1>
            </div>
            {/* product Images */}
            <div className='grid md:grid-cols-6 capitalize gap-6 p-6 font-semibold text-myBlack' >
                {Card.map((chair, index: number) => (
                    <ul key={index}>
                        <li className='flex flex-col gap-6 items-center md:items-start'>
                            <Image src={chair.image} alt='white chair image' width={200} height={200} />
                        </li>

                    </ul>
                ))}
            </div>

        </div>
    )
}

export default NewsLetter