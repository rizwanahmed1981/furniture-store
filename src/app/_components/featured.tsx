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
        <div className='flex flex-col md:flex-row capitalize gap-6 p-6' >
            {Card.map((chair, index: number) => (
                <ul key={index}>
                    <li className='flex flex-col gap-6 items-center'>
                        <Image src={chair.image} alt='white chair image' width={500} height={500} />
                        <h2>{chair.name}</h2>
                        <p>{chair.description}</p>
                        <p>Price: {chair.price}</p>
                    </li>
                </ul>
            ))}
        </div>


    )
}

export default Featured