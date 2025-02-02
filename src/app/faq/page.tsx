import { Plus } from 'lucide-react'
import React from 'react'

const Faq = () => {
  return (
    <div className='my-24'>
      {/* get in touch */}
      <div className='text-myBlack text-center uppercase p-6'>
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">questions looks here</h1>
        <p className=' opacity-60 text-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
      </div>
      {/* qustions section */}
      <div className='grid grid-cols-1 md:grid-cols-2 p-12 gap-6'>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>What types of chairs do you offer? <Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>How can we get in touch with you? <Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>Do your chairs come with a warranty? <Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>What will be delivered? And When? <Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>Can I try a chair before purchasing? <Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className='bg-myBgGrey text-left p-6'>
          <h4 className='flex flex-row items-center justify-between'>How do I clean and maintain my Comforty chair?<Plus/></h4>
          <p className='opacity-70 text-wrap text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

      </div>
    </div>
  )
}

export default Faq