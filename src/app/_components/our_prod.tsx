
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
        description: "Another comfortable white chair",
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
    {
        name: "Wing Chair",
        price: 3500,
        description: "Elegant Wing chair",
        image: wingch
    },
    {
        name: "Wooden Chair",
        price: 3000,
        description: "Another comfortable Wooden chair",
        image: woodench
    },
]


const OurProducts = () => {

    return (
        <div className='py-8'>
            {/* heading */}
            <h1 className='text-myBlack font-semibold text-center text-2xl px-8 my-6 uppercase'>
                Our Products
            </h1>
            {/* products section */}
            <div className='grid md:grid-cols-4 capitalize gap-6 p-6 font-semibold text-myBlack' >
                {Card.map((chair, index: number) => (
                    <ul key={index}>
                        <li className='flex flex-col gap-6 items-center md:items-start'>
                            <Image src={chair.image} alt='white chair image' width={500} height={500} />
                        </li>
                        <li className='flex items-center justify-between p-4'>
                            <div className=' text-myBlack opacity-70'>
                            <h2>{chair.name}</h2>
                            <p>Price: <span className='text-myButton'> ${chair.price}</span></p>
                            </div>
                            <ShoppingCart className='bg-myBgGrey w-auto'/>

                        </li>
                    </ul>
                ))}
            </div>
        </div>

    )
}

export default OurProducts