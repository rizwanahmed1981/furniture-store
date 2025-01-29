import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/Logo.png'
import { ShoppingCart } from 'lucide-react'
const Header = () => {
  return (
    <div className=' w-full bg-gray-300 p-6 shadow-lg flex justify-between'>
        <div className='flex items-center gap-2'>
            <Image src={logo} alt='logo' width={50} height={50}/>
            <h1 className='text-2xl md:text-4xl font-bold text-myBlack '>Comforty</h1>
        </div>
        <div className='flex items-center gap-2 bg-white rounded-lg w-fit px-2 text-myBlack font-semibold'>
            <ShoppingCart/>
            <p className='md:flex hidden'>Cart</p>
            <p className='bg-myButton rounded-full p-1 px-2 md:flex hidden'>2</p>
        </div>

    </div>
  )
}

export default Header