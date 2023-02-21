import {ReactNode} from 'react'
import Image,{StaticImageData} from 'next/image'
import clsx from 'clsx'

type Props = {
  children: ReactNode,
  name:string,
  title?:string,
  bg?: string,
  borderColor?: string,
  textColor?: string,
  bgImg?:StaticImageData,
  bgPosition?:string

}

const Section = (props: Props) => {
  return (

    <section className='relative' id={props.name}>
      {props.bgImg && 
      <div className='absolute z-[-1] w-screen h-full overflow-hidden' style={{
      }}>
        <Image src={props.bgImg} alt="Mountains with snow" fill 
            blurDataURL='' className={clsx('object-cover',props.bgPosition)}/>
      </div>}
      <div className={clsx("border-b border-white mb-[0.1px]",
                          props.bg && `${props.bg}`
                          )}>
        {props.title && <div className={`text-3xl pt-5 text-center mx-10 font-serif lg:text-5xl  ${props.textColor}`}>{props.title}</div>}
        <div className="flex justify-center">
        {props.title &&  <div className={`border-t-2 ${props.borderColor} w-20 h-1`}></div>}
        </div>
          {props.children} 
    </div>
    </section>
    
    
  )
}

export default Section