import { Menu, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
   
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    return (
        <div className='h-[100px] bg-myWhiteBg p-6 flex items-center justify-between shadow-md font-bold'>
            <div className='text-myBlack opacity-70 hidden md:flex items-center gap-4 hover:cursor-pointer'>
                <Link href={'/'} >Home</Link>
                <Link href={'/prodcuts'} >Shop</Link>
                <Link href={'/products'} >Products</Link>
                <Link href={'/contact'} >Contact</Link>
                <Link href={'/about'} >About</Link>
            </div>
            <div className='md:hidden px-3 hover:cursor-pointer'>
                <DropdownMenu >
                    <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='mx-4'><Link href={'/'} >Home</Link></DropdownMenuItem>
                        <DropdownMenuItem className='mx-4'><Link href={'/products'} >Shop</Link></DropdownMenuItem>
                        <DropdownMenuItem className='mx-4'><Link href={'/products'} >Products</Link></DropdownMenuItem>
                        <DropdownMenuItem className='mx-4'><Link href={'/contact'} >Contact</Link></DropdownMenuItem>
                        <DropdownMenuItem className='mx-4'><Link href={'/about'} >About</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='text-myBlack opacity-70 flex'>
                <p className='flex items-center gap-2 md:text-base text-sm'><Phone />+(92) 312-0306090</p>
            </div>


        </div>
    )
}

export default Navbar