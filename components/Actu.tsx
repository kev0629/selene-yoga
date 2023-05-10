import ActuComponent from './ActuComponent';
import img from '../Images/martin-jernberg-UdURxHDhrgY-unsplash.jpg'


type ActuProps ={
  events : any
}

const Actu = ({events}:ActuProps) => {
  return(
    <div className='flex flex-col justify-center content-center '>
      {console.log(events[0].date)}
      {console.log(events[0].endDate)}
      {events.slice(0, 4).map((event) => {
        const date = new Date(event.date);
        const endDate = new Date(event.endDate);
        const  month = date.toLocaleString('default', { month: 'long' })
        const endMonth = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()
        const endYear = endDate.getFullYear()
        return <ActuComponent 
          text1={event.title} 
          key={event.title} 
          text2={`${event.city} - ${date.getDate()} ${month != endMonth ? month :''} ${year != endYear ? year:''} au ${endDate.getDate()} ${endMonth} ${endYear}`} 
          img={event.image.url} 
          />;
      })}
    </div>
  )
}

export default Actu;
