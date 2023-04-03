import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img from './../Images/clipart177003 1.svg'

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

const Intro = (props: Props) => {
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
        <div >
          <Image src={arbre} alt='yoga' />
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div>
          <Image src={arc} alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={chameau}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={chat}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={enfant}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={etirement}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={huitre}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={montagne}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={poisson}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={triangle}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={warior1}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div className='w-30 h-30'>
          <Image src={warior2}   alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        </Carousel>
        {/* <div>
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div> */}
        {/* </div> */}
        
    </div>
  )
}

export default Intro