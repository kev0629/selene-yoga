import React from 'react'
import Image from 'next/image'
import img from '../Images/daniel-roe-lpjb_UMOyx8-unsplash.jpg'
import StarButton from './StarButton'


type Props = {}

const Card = () => {
  return(
    <div className="max-w-sm bg-white drop-shadow-lg w-56 h-80 m-2">
      <div className="flex justify-center relative">
        <Image className="w-56 h-32" src={img} alt="" height={120} placeholder={'blur'} />
      </div>
      <div className=" flex flex-col px-5 pt-5">
          <h5 className="mb-2 text-2xl text-center text-black">Titre</h5>
          <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <div className=' flex justify-center'>
            <StarButton className='px-3 py-2 mt-5'>
            Lire la suite
            </StarButton>
          </div>
          
      </div>
    </div>
  )
}


const News = (props: Props) => {
  return (
    <section>
      <div className='flex flex-row justify-center'>\
        <Card/>
      </div>
      <div className="flex justify-center">
      <StarButton className='px-6 py-3 mt-4'>
        {"Voir plus d'articles"}
      </StarButton>
       {/* <button className='mt-4 px-6 py-3 rounded-md bg-selene-green-dark text-white'>{"Voir plus d'articles"}</button> */}
      </div>
    </section>

  )
}

export default News
