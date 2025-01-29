import Image from 'next/image'
import React from 'react'
import burnt from '../assets/images/burnt.png'
import cibbank from '../assets/images/cibbank.png'
import panda from '../assets/images/panda.png'
import moz from '../assets/images/moz.png'
import pipdrive from '../assets/images/pipdrive.png'
import z from '../assets/images/z.png'
import zaapier from '../assets/images/zaapier.png'

const CompanyList = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between p-6 bg-myWhiteBg my-3 shadow-lg'>
        <Image src={zaapier} alt='zapier logo ' width={80} height={80}/>
        <Image src={pipdrive} alt='pipdrive logo ' width={80} height={80}/>
        <Image src={cibbank} alt='cib bank logo ' width={80} height={80}/>
        <Image src={z} alt='z logo ' width={80} height={80}/>
        <Image src={burnt} alt='burnt  logo ' width={80} height={80}/>
        <Image src={panda} alt='pana doc logo ' width={80} height={80}/>
        <Image src={moz} alt='moz logo ' width={80} height={80}/>
    </div>
  )
}

export default CompanyList