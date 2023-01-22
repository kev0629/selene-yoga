import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='h-96'>
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
  )
}

export default Intro