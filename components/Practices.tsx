import PracticeCard from './PracticeCard';
import React, { useState } from 'react'
import Carousel from './Carousel'
import img1 from '../Images/Moutain_cloud.jpg'
import img3 from '../Images/stars.png'
import img4 from '../Images/galaxy-mountain.jpg'
import img2 from '../Images/forest_river.png'





type Props = {}
const cardsContent = [
  {
    title:"L’approche symbolique",
    img:img1,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L’approche yogique",
    img:img2,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L'approche spirituelle",
    img:img3,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  },
  {
    title:"L’approche énergétique",
    img:img4,
    text:'Facilite le Yi king, l’astrologie, le référentiel de naissance et le design humain, qui offrent à travers des représentations une perspective globale de notre fonctionnement.'
  }
]


const Practices = (props: Props) => {
  return (
    <div >
     <Carousel>
      <PracticeCard title="L’approche symbolique" img={img1}/>
      <PracticeCard title="L’approche yogique" img={img2}/>
      <PracticeCard title="L'approche spirituelle" img={img3}/>
      <PracticeCard title="L’approche énergétique" img={img4}/>
     
    </Carousel>
    </div>
    
  )
}

export default Practices