
import { Button } from '@/components/ui/button'
import { Clock1, MapPin, PhoneCall } from 'lucide-react'
import React from 'react'
import SlugCard from '../_components/slug_card'

const Contact = () => {
    return (
        <div className='capitalize mt-20 mb-10 flex flex-col gap-10'>
            {/* get in touch */}
            <div className='text-myBlack text-center'>
                <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">get in touch with us</h1>
                <p className=' opacity-60 text-wrap'>For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            {/* address section */}
            <div className='flex md:flex-row flex-col items-center justify-center md:gap-32 gap-10 '>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='flex flex-row items-start gap-4'>

                        <MapPin />
                        <div className='flex flex-col items-start gap-3'>
                            <h4 className='font-bold text-lg'>address</h4>
                            <p className='text-wrap opacity-80'>niazi mohallah,<br /> baldia town 03,<br /> karachi,<br /> pakistan</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <PhoneCall />
                        <div className='flex flex-col items-start gap-3'>
                            <h4 className='font-bold text-lg'>phone</h4>
                            <p className='text-wrap opacity-80'>+92 312 0306090<br /> +92 349 0252559</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <Clock1 />
                        <div className='flex flex-col items-start gap-3'>
                            <h4 className='font-bold text-lg'>working time</h4>
                            <p className='text-wrap opacity-80'>monday to friday <br /> 9 am to 6 pm</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center md:items-start'>
                    <div className='flex flex-col gap-1'>
                        <p>your name</p>
                        <input placeholder='Rizwan' className='border-2 p-2 w-[300px] bg-myBgGrey' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>Email Address</p>
                        <input placeholder='abc@abc.com' className='border-2 p-2 w-[300px] bg-myBgGrey' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>subject</p>
                        <input placeholder='subject is optional' className='border-2 p-2 w-[300px] bg-myBgGrey' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>message</p>
                        <input placeholder='your message here' className='border-2 p-2 w-[300px] h-[70px] bg-myBgGrey' />
                    </div>
                    <Button className='bg-myButton hover:cursor-pointer hover:bg-emerald-500 w-fit p-6'>Submit</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Contact