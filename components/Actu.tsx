import ActuComponent from './ActuComponent';
import img from '../Images/martin-jernberg-UdURxHDhrgY-unsplash.jpg'




const Actu = () => {
  return(
    <div className='flex flex-col justify-center content-center '>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022' img={img}/>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022' img={img}/>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022' img={img}/>
    </div>
  )
}

export default Actu