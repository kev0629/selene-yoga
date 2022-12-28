import React from 'react'
import Image from 'next/image'

type Props = {
  children: any,
  name:string,
  title?:string,
  bg?: string,
  color?: string
  bgImg?:any,

}

const Section = (props: Props) => {
  return (

    <section className='relative' id={props.name}>
      {props.bgImg && 
      <div className='absolute z-[-1] w-screen h-full' style={{
      }}>
        <Image src={props.bgImg} alt="Mountains with snow" layout="fill" objectFit='cover' placeholder='blur'/>
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