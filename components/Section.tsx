import {ReactNode} from 'react'
import Image,{StaticImageData} from 'next/image'

type Props = {
  children: ReactNode,
  name:string,
  title?:string,
  bg?: string,
  borderColor?: string,
  textColor?: string,
  bgImg?:StaticImageData,

}

const Section = (props: Props) => {
  return (

    <section className='relative' id={props.name}>
      {props.bgImg && 
      <div className='absolute z-[-1] w-screen h-full overflow-hidden' style={{
      }}>
        <Image src={props.bgImg} alt="Mountains with snow" fill 
           style={{objectFit:'cover'}} blurDataURL=''/>
      </div>}
      <div className={`border-b border-white mb-[0.1px] bg-${props.bg}`}>
        {props.title && <div className={`text-3xl pt-5 text-center mx-10 font-serif  ${props.textColor}`}>{props.title}</div>}
        <div className="flex justify-center">
        {props.title &&  <div className={`border-t-2 ${props.borderColor} w-20 h-1`}></div>}
        </div>
          {props.children} 
    </div>
    </section>
    
    
  )
}

export default Section