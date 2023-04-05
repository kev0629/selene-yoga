import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import arbre from './../Images/Postures/Arbre.svg'
import arc from './../Images/Postures/arc.svg'
import chameau from './../Images/Postures/Chameau.svg'
import chat from './../Images/Postures/chat.svg'
import enfant from './../Images/Postures/Enfant.svg'
import etirement from './../Images/Postures/etirement.svg'
import huitre from './../Images/Postures/Huitre.svg'
import montagne from './../Images/Postures/Montagne.svg'
import poisson from './../Images/Postures/Poisson.svg'
import triangle from './../Images/Postures/triangle.svg'
import warior1 from './../Images/Postures/warior1.svg'
import warior2 from './../Images/Postures/warior2.svg'



type Props = {}

const Intro = () => {

  const postures = [
    {
      image: arbre,
      text: "Balance : s’élever en lien",
      key:0,
    },
    {
      image: arc,
      text: "Scorpion : rencontrer son intensité",
      key:1,
    },
    {
      image: chameau,
      text: "Lion : déployer sa radiance posture du chameau",
      key:2,
    },
    {
      image: chat,
      text: "Taureau : sublimer ses sens",
      key:3,
    },
    {
      image: enfant,
      text: "Cancer : rencontrer sa sensibilité",
      key:4,
    },
    {
      image: etirement,
      text: "Sagittaire : Suivre son étoile",
      key:5,
    },
    {
      image: huitre,
      text: "Verseau : Embrasser sa liberté",
      key:6,
    },
    {
      image: montagne,
      text: "Capricorne : incarner son idéal",
      key:7,
    },
    {
      image: poisson,
      text: "Poisson : se fondre dans l’instant",
      key:8,
    },
    {
      image: triangle,
      text: "Vierge : raffiner sa maitrise",
      key:9,
    },
    {
      image: warior1,
      text: "Bélier : libérer son élan",
      key:10,
    },
    {
      image: warior2,
      text: "Gémeaux : explorer nos talents",
      key:11,
    },
    
  ]

  return (
    <div className='h-96 lg:h-[35rem] flex flex-col justify-between space'>
      <div>
        <div className='m-5 text-3xl text-center font-serif text-selene-green lg:text-5xl'>
            Séléné Yoga vous invite 
            à votre seule réelle liberté,
            celle d’embrasser votre destin.
        </div>
        <div className='m-5 flex justify-center'>
          <Link href="/Oeuvre">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' bg-white border rounded-lg border-selene-blue p-1 text-selene-green text-base px-11'>
              Ce qui oeuvre ici
            </motion.button>
          </Link>
        </div>
      </div>
        <Carousel 
          showStatus={false} 
          showArrows={false} 
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          interval={2000} 
          infiniteLoop={true}>
          
          {postures.map(({image,text,key})=>
            <div className='flex flex-col content-center items-center justify-center' key={key}>
              <div className='w-[200px] h-[200px] flex justify-center content-center items-center'>
                <Image src={image} alt='yoga' className='object-contain relative w-full h-full' />
              </div>
              <div>
                <p className='text-base'>{text}</p>
              </div>
          </div>
          )}
        </Carousel>
    </div>
  )
}

export default Intro