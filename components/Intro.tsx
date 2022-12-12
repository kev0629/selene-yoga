import React from 'react'

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
          <button className=' bg-white border rounded-lg border-selene-blue p-1 text-selene-green text-base px-11'>
            Ce qui oeuvre ici
          </button>
        </div>
        
    </div>
  )
}

export default Intro