import React from 'react'
import Image from 'next/image'
import img from '../Images/daniel-roe-lpjb_UMOyx8-unsplash.jpg'
import StarButton from './StarButton'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'



type Props = {}

type CardProps ={
  img:any,
  title:string,
  subTitle:string
}

const Card = ({img, title, subTitle}:CardProps) => {
  return(
    <div className="max-w-sm bg-white drop-shadow-lg w-56 m-2">
      <div className="flex justify-center relative">
        <Image className="w-56 h-32" src={img} alt="" height={120} placeholder={'blur'} />
      </div>
      <div className=" flex flex-col px-5 pt-5">
          <h5 className="mb-2 text-2xl text-center text-black">{title}</h5>
          <p className="mb-3 font-normal text-gray-700">{subTitle}</p>
          <div className=' flex justify-center'>
            <StarButton title='Lire la suite' className='px-3 py-2 m-2'/>
          </div>
          
      </div>
    </div>
  )
}


const News = (props: Props) => {
  return (
    <section>
      {/* <div className='flex flex-col justify-center'> */}
        <Carousel showStatus={false} emulateTouch={true} showArrows={false} >
        <Card 
          img={img}
          title='Titre'
          subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
          <Card 
          img={img}
          title='Titre'
          subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
        </Carousel>
      {/* </div> */}
      <div className="flex justify-center">
      <StarButton title="Voir plus d'articles" className='px-6 py-3 mt-4'/>
      </div>
    </section>

  )
}

export default News
