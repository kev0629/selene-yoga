import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img from './../Images/clipart177003 1.svg'

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='h-96 flex flex-col justify-between'>
      <div>
        <div className='text-3xl text-center font-serif text-selene-green'>
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
        {/* <div className='flex flex-col justify-center items-center mt-32'> */}
        <Carousel 
          // className='mt-28'
          showStatus={false} 
          showArrows={false} 
          showIndicators={false}
          showThumbs={false}
          autoPlay={true} 
          interval={5000} 
          infiniteLoop={true}>
        <div >
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div>
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div >
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div >
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div >
          <Image src={img}  alt='yoga'/>
          <p className='mt-3 text-base'>Favoriser la santé</p>
        </div>
        <div >
          <Image src={img}  alt='yoga'/>
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