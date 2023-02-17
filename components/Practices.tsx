import PracticeCard from './PracticeCard';
import React, { useState, useEffect } from 'react'
// import Carousel from './Carousel'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Images/Moutain_cloud.jpg'
import img4 from '../Images/stars.png'
import img3 from '../Images/galaxy-mountain.jpg'
import img2 from '../Images/forest_river.png'
import { useDimension } from '../hooks/useDimension';





type Props = {}


const Practices = (props: Props) => {
  const [percent, setPercent] = useState(100)
  const [center, setCenter] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)

  const windowsWidth = useDimension()
 useEffect(() => {
  if (windowsWidth>1280){
    setCenter(true)
    setPercent(25)
    setFullScreen(true)
   }
   if (windowsWidth>=1024 && windowsWidth<=1280){
    setCenter(true)
    setPercent(33)
    setFullScreen(false)
   }
   if (windowsWidth>=768 && windowsWidth<1024){
    setCenter(true)
    setPercent(45)
    setFullScreen(false)
   }
   else if (windowsWidth<768)
   {
    setCenter(false)
    setPercent(90)
    setFullScreen(false)
   }
   
 
 }, [windowsWidth])
  const cardsContent = [
    {
      mainTitle:<div className='uppercase'>{"L’approche physique"}</div>,
      secondaryTitle:<>
                      <div>Massage Californien</div>
                      <div>Yoga</div>
                    </>,
      img:img1,
      text:"Notre corps est notre point de contact avec le monde. En lui prêtant attention, notre perception sensorielle s’en trouve clarifiée et notre esprit s’apaise, offrant un regard clair sur notre environnement.A travers un touché englobant, contacter l’intelligence du corps qui tend naturellement vers le bien-être et l’unité"
    },
    {
      mainTitle:<div className='uppercase'>{"L’approche yogique"}</div>,
      secondaryTitle:<>
                      <div>Astro</div>
                      <div>Taro</div> 
                      <div>Design</div>
                      <div>Yi king initiatique</div>
                     </>,
      img:img2,
      text:"Ici le symbole se fait pont ou porte vers notre identité profonde. Chemin qui mène de la conscience de l’énergie dans son foisonnement à son retour en l’Unité.Si le chercheur chemine avec une torche, l’initié est la torche elle-même, il n’expose pas la lumière, il l’émane. Ces systèmes symboliques sont des moyens de prendre conscience de l’ensemble de notre potentiel et d’ainsi cultiver élévation de conscience et développement énergétique en accord avec nos propres rythmes."
    },
    {
      mainTitle:<div className='uppercase'>{"L'approche spirituelle"}</div>,
      secondaryTitle:<>
                      <div>Chiro Tao</div>  
                      <div>Oracle</div> 
                      <div>Symbolisme</div>   
                      <div>Yoga</div>
                    </>,
      img:img3,
      text:"L’esprit et la matière sont tissés de cette même trame qui se nomme énergie et prend toutes les formes et densités. Elle est intelligence, empathie, don de soi, ce qui œuvre et qui soutient.L’énergie est si sensible à l’intention qui nous meut en profondeur qu’il est bon de savoir s’abandonner à son intelligence pour en épouser la vertu, c’est une façon sensible et pratique de s’en remettre à la sagesse de l’instant présent. Ce travail énergétique, par le massage, le yoga, le symbole, propose le contact et la redynamisation de notre être pour explorer et étendre le contact à notre nature propre et en favoriser l’expression."
    },
    {
      mainTitle:<div className='uppercase'>{"L’approche énergétique"}</div>,
      secondaryTitle:<>Fondre en l’unité : Reïki</>,
      img:img4,
      text:"Je ne saurai dire en quelques lignes ce que représente le Reïki dans le regard de mon cœur, Cette pratique dépasse et diffère des autres approches par le moyen par lequel s’opère la rencontre… Depuis un contact d’unité à l’énergie universelle. Dans le silence de l’assise, quand dans le renoncement notre regard se libère du jugement et du souci, et qu’ainsi la beauté de ce qui est peut resplendir au-delà de la radicalité de nos certitudes. Harmonisation de tous les corps (par le non agir)."
    }
  ]
  return (
    <div className='my-10'>
     <Carousel showStatus={false} emulateTouch={true} showIndicators={false} centerMode={center} centerSlidePercentage={percent} showThumbs={false}>
      {cardsContent.map((card,id) => <PracticeCard mainTitle={card.mainTitle} secondaryTitle={card.secondaryTitle} img={card.img} key={id} text={card.text}/>)}
    </Carousel>
    </div>
    
  )
}

export default Practices