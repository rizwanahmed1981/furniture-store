import React from 'react'
import wingch from '../assets/images/wing_chair.png'
import woodench from '../assets/images/wooden_chair.png'
import deskch from '../assets/images/desk_chair.png'


import Image from 'next/image'

const Card = [
    {
        name: "Wing Chair",
        price: 3000,
        description: "Comfortable white chair",
        image: wingch
    },
    {
        name: "Wooden Chair",
        price: 3200,
        description: "Stylish yellow chair",
        image: woodench
    },
    {
        name: "Desk Chair",
        price: 3500,
        description: "Elegant pink chair",
        image: deskch
    },
]




const TopCategories = () => {
    return (
        <div>
            <h1 className='text-myBlack font-semibold text-2xl px-8 my-6 underline mb-4'>
                Top Categories
            </h1>
        <div className='flex flex-col md:flex-row capitalize gap-6 p-6 font-semibold text-myBlack' >
            {Card.map((chair, index: number) => (
                <ul key={index}>
                    <li className='flex flex-col gap-6 items-center relative'>
                        <Image src={chair.image} alt='white chair image' width={500} height={500} />
                        <div className='bg-black opacity-70 absolute bottom-0 w-full p-4 text-myWhiteBg  rounded-b-lg'>
                            <p className='text-lg'>{chair.name}</p>
                            <p className='text-sm'>250 products</p>

                        </div>
                        
                    </li>
                </ul>
            ))}
        </div>
        </div>

    )
}

export default TopCategories