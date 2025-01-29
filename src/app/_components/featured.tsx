import React from 'react'
import whitech from '../assets/images/white_ch.png'
import yellowch from '../assets/images/yellow_ch.png'
import pinkch from '../assets/images/pink_ch.png'
import white2ch from '../assets/images/white2_ch.png'


import Image from 'next/image'

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
        name: "White Chair 2",
        price: 3000,
        description: "Another comfortable white chair",
        image: white2ch
    },
]




const Featured = () => {
    return (
        <div>
            {/* heading */}
            <h1 className='text-myBlack font-semibold text-2xl px-8 my-6 underline'>
                Featured Products
            </h1>

            {/* Products section */}
        <div className='flex flex-col md:flex-row capitalize gap-6 p-6 font-semibold text-myBlack' >
            {Card.map((chair, index: number) => (
                <ul key={index}>
                    <li className='flex flex-col gap-6 items-center'>
                        <Image src={chair.image} alt='white chair image' width={500} height={500} />
                        <h2>{chair.name}</h2>
                        <p>{chair.description}</p>
                        <p>Price: <span  className='text-myButton'> ${chair.price}</span></p>
                    </li>
                </ul>
            ))}
        </div>
        </div>

    )
}

export default Featured