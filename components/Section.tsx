import React from 'react'
import Image from 'next/image'

type Props = {
    title:string,
    children: any,
    name:string,
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
        <div className={`text-3xl text-center mx-10 font-serif text-selene-green text-${props.color}`}>{props.title}</div>
        <div className="flex justify-center">
          <div className={`border-t-2 border-${props.color} w-20 h-1`}></div>
        </div>
        <div className='p-5'>
          {props.children}
        </div>   
    </div>
    </section>
    
    
  )
}

export default Section