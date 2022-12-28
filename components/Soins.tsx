import React from 'react'
import Image from 'next/image'
import StarButton from './StarButton'

import img1 from '../Images/moutain_stars_lake.png'
import img2 from '../Images/mountain_sunset.jpg'


type Props = {}

type CardProps ={
  title:string,
  img?: any
}

const CaresCard = (props:CardProps) => {
  return (
    <>
    <div className="relative z-[-1] h-32 rounded-xl overflow-hidden">
      <div className='flex flex-col justify-center center-content mt-6'>
        <div>
          <p className=' relative z-[1] text-white bold text-base'>{props.title}</p>
        </div>
        <div>
          <StarButton className='px-3 py-1 mt-4 z-[1] border broder-white'>
            {"En savoir plus"}
          </StarButton>
        </div>
      </div>
        <Image
           src={props.img}
           alt="Mountains sunset"
           layout="fill"
           placeholder='blur'
       />
       
    </div>
    </>
    
  )
}

const Soins = (props: Props) => {
  return (
    <>
    <div className="flex flex-col content-center m-auto uppercase text-center w-5/6 space-y-5 h-96">
        <CaresCard title={'Consultations individuelles'} img={img1}/>
        <CaresCard title={'Rencontres Colectives'} img={img2}/>
    </div>
    </>
  )
}

export default Soins