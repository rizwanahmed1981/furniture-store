import React from 'react'
import whitech from '../assets/images/white_ch.png'
import yellowch from '../assets/images/yellow_ch.png'
import pinkch from '../assets/images/pink_ch.png'
import woodench from '../assets/images/wooden_chair.png'
import blackch from '../assets/images/black_pillow_ch.png'
import deskch from '../assets/images/desk_chair.png'
import white2ch from '../assets/images/white2_ch.png'
import wingch from '../assets/images/wing_chair.png'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'


const Card = [
    {
        name: "White Chair",
        price: 3000,
        description: "Comfortable white chair",
        image: whitech
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
        name: "Wooden Chair",
        price: 3000,
        description: "comfortable Wooden chair",
        image: woodench
    },
    {
        name: "Black Chair",
        price: 3200,
        description: "Stylish Black chair",
        image: blackch
    }, {
        name: "Yellow Chair",
        price: 3200,
        description: "Stylish yellow chair",
        image: yellowch
    },

]

const SlugCard = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col items-center justify-between'>
                {/* heading */}
                <h1 className='text-myBlack font-semibold text-center text-2xl px-8 my-6 uppercase'>
                    featured products
                </h1>
                <p className='text-myBlack font-semibold text-center text-sm px-8 my-6 uppercase underline'>view all</p>
            </div>
            {/* product Images */}
            <div className='grid md:grid-cols-6 capitalize gap-6 p-6 items-center font-semibold text-myBlack' >
                {Card.map((chair, index: number) => (
                    <ul key={index} className='flex flex-col gap-4'>
                        <li className='flex flex-col gap-6 items-center md:items-start'>
                            <Image src={chair.image} alt='white chair image' width={200} height={200} />
                        </li>
                        <li className='flex items-center md:justify-between justify-center gap-8 md:gap-4 md:px-4 text-myCard'>
                            <p>{chair.name}</p>
                            <p>{chair.price}</p>
                        </li>

                    </ul>
                ))}
            </div>
        </div>
    )
}

export default SlugCard