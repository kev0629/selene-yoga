import React from 'react'
import Image from 'next/image'

import img from '../Images/daniel-roe-lpjb_UMOyx8-unsplash.jpg'

type Props = {}

type CardProps ={
  title:string,
  img?: any
}

const CaresCard = (props:CardProps) => {
  return (
    <>
    <div className='p-10 h-32 rounded-xl relative'>
    <div className='z-10'>
        {props.title}
      </div>
      {props.img && 
      <div className=' z-[-1] w-full h-screen'>
        <Image src={props.img} alt="Mountains with snow" layout="fill" objectFit='cover' placeholder='blur'/>
      </div>}
    </div>
    </>
    
  )
}

const Soins = (props: Props) => {
  return (
    <>
    <div className="flex flex-col content-center m-auto uppercase text-center w-5/6 space-y-5">
        <CaresCard title={'Consultations individuelles'} img={img}/>
        <div className='p-10 h-32 bg-red-600 rounded-xl'>Rencontres collectives</div>
    </div>
    </>
  )
}

export default Soins