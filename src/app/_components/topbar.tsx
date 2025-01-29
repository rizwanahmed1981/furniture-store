
import { Check, ChevronDown, Info } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-blue-950  text-white md:flex items-center justify-between p-6 hidden'>
        <div className='flex gap-2 items-center'>
            <Check/>
            <p>Free Shipping On All Orders Above $50</p>
        </div>
        <div className='flex items-center gap-4'>
            <p className='flex gap-1'>Eng <ChevronDown /></p>
            <p>Faqs</p>
            <p className='flex items-center gap-1'><Info/> Need Help</p>
        </div>
    </div>
  )
}

export default Topbar