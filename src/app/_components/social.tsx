import React from 'react'
import fb from '@/app/assets/icons/facebook.png'
import insta from '@/app/assets/icons/instagram.png'
import twiter from '@/app/assets/icons/twitter.png'
import linkdin from '@/app/assets/icons/linkdin.png'
import github from '@/app/assets/icons/github.png'
import Image from 'next/image'
import Link from 'next/link'

const Social = () => {
    return (
        <div className='flex items-center gap-4 '>
            <Link href={'/'} className='hover:cursor-pointer hover:scale-125'>
                <Image src={fb} alt='facebook logo' width={15} height={15} />
            </Link>
            <Link href={'/'} className='hover:cursor-pointer hover:scale-125'>
                <Image src={insta} alt='instagram  logo' width={15} height={15} />
            </Link>
            <Link href={'/'} className='hover:cursor-pointer hover:scale-125'>
                <Image src={twiter} alt='twitter logo' width={15} height={15} />
            </Link>
            <Link href={'/'} className='hover:cursor-pointer hover:scale-125'>
                <Image src={linkdin} alt='Linkdin logo' width={15} height={15} />
            </Link>
            <Link href={'/'} className='hover:cursor-pointer hover:scale-125'>
                <Image src={github} alt='github logo' width={15} height={15} />
            </Link>
        </div>
    )
}

export default Social