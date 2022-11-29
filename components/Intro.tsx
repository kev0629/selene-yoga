import React from 'react'

type Props = {}

const Intro = (props: Props) => {
  return (
    <>
        <div className='text-3xl text-center m-10 font-serif text-selene-green'>
            Séléné Yoga vous invite 
            à votre seule réelle liberté,
            celle d’embrasser votre destin.
        </div>
        <div className='m-5 flex justify-center'>
          <button className='border-2 rounded-lg border-selene-blue p-1 '>
            Ce qui oeuvre ici
          </button>
        </div>
        
    </>
  )
}

export default Intro