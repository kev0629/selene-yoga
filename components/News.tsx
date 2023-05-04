import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import img from '../Images/daniel-roe-lpjb_UMOyx8-unsplash.jpg'
import StarButton from './StarButton'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useDimension } from '../hooks/useDimension'



type Props = {
  posts:any
}

type CardProps ={
  img:any,
  title:string,
  subTitle:string
}

const Card = ({img, title, subTitle}:CardProps) => {

  return(
    <div className="max-w-sm bg-white drop-shadow-lg w-56 m-2">
      <div className="flex justify-center relative">
        <Image className="w-56 h-32 object-cover object-center" src={img} alt="" width={224} height={128}/>
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


const News = ({posts}: Props) => {
  const [percent, setPercent] = useState(100)
  const [center, setCenter] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)

  const windowsWidth = useDimension()
 useEffect(() => {
  if (windowsWidth>=1280){
    setCenter(true)
    setPercent(25)
    setFullScreen(true)
   }
   if (windowsWidth>=1024 && windowsWidth<1280){
    setCenter(true)
    setPercent(33)
    setFullScreen(false)
   }
   if (windowsWidth>=768 && windowsWidth<1024){
    setCenter(true)
    setPercent(50)
    setFullScreen(false)
   }
   else if (windowsWidth<768)
   {
    setCenter(false)
    setPercent(100)
    setFullScreen(false)
   }
   
 
 }, [windowsWidth])
  return (
    <section>
        <Carousel showStatus={false} showThumbs={false} showIndicators={fullScreen ?false:true} emulateTouch={fullScreen ?false:true} showArrows={false} centerMode={center} centerSlidePercentage={percent} >
            {/* {console.log(posts)} */}
            {posts.slice(0, 4).map((post) => (
          <Card
            key={post.slug}
            img={post.coverImage.url}
            title={post.title}
            subTitle={post.excerpt}
          />
        ))}
        {/* <Card 
          img={img}
          title='Titre'
          subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          />
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
          <Card 
          img={img}
          title='Titre'
          subTitle='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
          /> */}
        </Carousel>
      {/* </div> */}
      <div className="flex justify-center">
      <StarButton title="Voir plus d'articles" className='px-6 py-3 mt-4'/>
      </div>
    </section>

  )
}

export default News
