import {ReactNode} from 'react'
import Image,{StaticImageData} from 'next/image'

type Props = {
  children: ReactNode,
  name:string,
  title?:string,
  bg?: string,
  color?: string
  bgImg?:StaticImageData,

}

const Section = (props: Props) => {
  return (

    <section className='relative' id={props.name}>
      {props.bgImg && 
      <div className='absolute z-[-1] w-screen h-full overflow-hidden' style={{
      }}>
        <Image src={props.bgImg} alt="Mountains with snow" fill 
           style={{objectFit:'cover'}} placeholder='blur'/>
      </div>}
      <div className={`border-b border-white mb-[0.1px] bg-${props.bg}`}>
        {props.title && <div className={`text-3xl pt-5 text-center mx-10 font-serif text-selene-green text-${props.color}`}>{props.title}</div>}
        <div className="flex justify-center">
        {props.title &&  <div className={`border-t-2 border-${props.color} w-20 h-1`}></div>}
        </div>
          {props.children} 
    </div>
    </section>
    
    
  )
}

export default Section