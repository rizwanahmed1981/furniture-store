import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/images/Logo.png"
import Social from './social'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Copyright } from 'lucide-react'
import master from "@/app/assets/icons/mastercard.png"
import paypal from "@/app/assets/icons/paypal.png"
import express from "@/app/assets/icons/express.png"
import visa from "@/app/assets/icons/visa.png"

const Footer = () => {
    return (
        <div>

            <div className='capitalize text-myBlack flex md:flex-row flex-col justify-between bg-myBgGrey p-8 gap-6 '>
                <div className='flex flex-col gap-6'>
                    <Link href={'/'} className='hover:cursor-pointer'>
                        <div className='flex gap-2'>
                            <Image src={logo} alt='logo' width={35} height={35} />
                            <h4 className='text-lg font-semibold'>Comforty</h4>
                        </div>
                    </Link>
                    <p className='text-wrap'>Vivamus tristique odio<br /> sit amet velit semper,<br /> eu posuere turpis interdum.
                        Cras egestas purus </p>
                    <div>
                        <Social />
                    </div>
                </div>
                <div className='flex flex-col gap-3 '>
                    <Link href={'/products'} className='text-lg font-semibold opacity-75'> Category</Link>
                    <div className='flex flex-col gap-3 font-semibold' >
                        <Link href={'/'}> sofa</Link>
                        <Link href={'/'}> Arm Chair</Link>
                        <Link href={'/'}> wing chair</Link>
                        <Link href={'/'}> desk chair</Link>
                        <Link href={'/'}> wooden chair</Link>
                        <Link href={'/'}> park bench</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 '>
                    <Link href={'/'} className='text-lg font-semibold opacity-75'> support</Link>
                    <div className='flex flex-col gap-3 font-semibold' >
                        <Link href={'/contact'}> Contact</Link>
                        <Link href={'/faq'}>FAQ</Link>
                        <Link href={'/faq'}>privacy policy</Link>
                        <Link href={'/contact'}> help</Link>
                        <Link href={'/about'}> about</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center md:items-start '>
                    <Link href={'/'} className='text-lg font-semibold opacity-75'> news letter</Link>
                    <div className='flex md:flex-row flex-col items-center justify-around gap-3 font-semibold' >
                        <input placeholder='Email' className='bg-myBgGrey border-2 rounded-lg p-4' />
                        <Button className='bg-myButton rounded-lg p-6 hover:cursor-pointer hover:bg-blue-600'>Subscribe</Button>

                    </div>
                    <p className='text-wrap opcaity-75'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.<br /> Perferendis maxime, unde eum eaque eius exercitati</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col gap-6 items-center justify-between bg-myBgGrey  p-8'>
                <div className='flex items-center gap-4'>
                    <Copyright />
                    <p> designed by NovaNex Innovations 2025</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <Image src={master} alt='master card' width={35} height={35} />
                    <Image src={paypal} alt='paypal card' width={35} height={35} />
                    <Image src={express} alt='Express card' width={35} height={35} />
                    <Image src={visa} alt='visa card' width={35} height={35} />
                </div>
            </div>
        </div>
    )
}

export default Footer