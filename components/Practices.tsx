import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import img1 from '../Images/Moutain_cloud.jpg'
import img3 from '../Images/stars.png'
import img4 from '../Images/galaxy-mountain.jpg'
import img2 from '../Images/forest_river.png'

type CardProps = {
  title:string,
  img:any
}

const PracticeCard =(props:CardProps) =>{
  return(
    <div className="relative min-w-fit m-2 rounded-xl overflow-hidden shadow-lg">
          <div className='flex justify-center h-28 w-48'>
            <p className=' relative z-[1] text-white text-base pt-10'>{props.title}</p>
          </div>
          <Image
            src={props.img}
            alt="Mountains sunset"
            layout="fill"
            placeholder='blur'
        />
      </div>
  )
}

type Props = {}

const Practices = (props: Props) => {
  return (
    <>
     <Carousel>
      <PracticeCard title="L’approche symbolique" img={img1}/>
      <PracticeCard title="L’approche yogique" img={img2}/>
      <PracticeCard title="L'approche spirituelle" img={img3}/>
      <PracticeCard title="L’approche énergétique" img={img4}/>
     
    </Carousel>
    </>
    
  )
}

export default Practices