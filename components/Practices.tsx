import PracticeCard from './PracticeCard';
import React, { useState } from 'react'
// import Carousel from './Carousel'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Images/Moutain_cloud.jpg'
import img3 from '../Images/stars.png'
import img4 from '../Images/galaxy-mountain.jpg'
import img2 from '../Images/forest_river.png'





type Props = {}
const cardsContent = [
  {
    mainTitle:<div className='uppercase'>{"L’approche symbolique"}</div>,
    secondaryTitle:'',
    img:img1,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    mainTitle:<div className='uppercase'>{"L’approche yogique"}</div>,
    secondaryTitle:'',
    img:img2,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    mainTitle:<div className='uppercase'>{"L'approche spirituelle"}</div>,
    secondaryTitle:'',
    img:img3,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    mainTitle:<div className='uppercase'>{"L’approche énergétique"}</div>,
    secondaryTitle:'',
    img:img4,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  }
]


const Practices = (props: Props) => {
  return (
    <div className='my-10'>
     <Carousel showStatus={false} emulateTouch={true} showIndicators={false} centerMode={true} centerSlidePercentage={20} showThumbs={false}>
      {cardsContent.map((card,id) => <PracticeCard mainTitle={card.mainTitle} img={card.img} key={id}/>)}
    </Carousel>
    </div>
    
  )
}

export default Practices