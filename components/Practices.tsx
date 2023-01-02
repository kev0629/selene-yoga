import React, { useState } from 'react'
import Carousel from './Carousel'
import {motion} from 'framer-motion'
import Image from 'next/image'
import img1 from '../Images/Moutain_cloud.jpg'
import img3 from '../Images/stars.png'
import img4 from '../Images/galaxy-mountain.jpg'
import img2 from '../Images/forest_river.png'

type CardProps = {
  title:string,
  img:any
  rotate?:number
}

const PracticeCard =(props:CardProps) =>{
  const [rotate, setRotate] = useState<number>(0)
  const [front, setFront] = useState<boolean>(true)
  
  const rotateCard = (rotate:number,front:boolean) =>{
    setRotate(rotate+180)
    setFront(!front)
  }

  return(
    <motion.div onClick={()=>rotateCard(rotate+180,front)} animate={{rotateX:rotate,transition: { duration: 1 }}} className="relative min-w-fit m-2 rounded-xl overflow-hidden shadow-lg">
          <div className='flex justify-center h-28 w-48'>
            <p className=' relative z-[1] text-white text-base pt-10'>{props.title}</p>
          </div>
          <Image
            src={props.img}
            alt="Mountains sunset"
            fill
            placeholder='blur'
        />
      </motion.div>
  )
}

type Props = {}
const cardsContent = [
  {
    title:"L’approche symbolique",
    img:img1,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L’approche yogique",
    img:img2,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L'approche spirituelle",
    img:img3,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L’approche énergétique",
    img:img4,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  }
]


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