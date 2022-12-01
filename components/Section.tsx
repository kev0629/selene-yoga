import React from 'react'

type Props = {
    title:string,
    children: any,
    bg?: string,
    color?: string

}

const Section = (props: Props) => {
  return (
    <div className={`border-y-2 border-white mb-3 bg-${props.bg}`}>
        <div className={`text-3xl text-center mx-10 font-serif text-selene-green text-${props.color}`}>{props.title}</div>
        <div className="flex justify-center">
          <div className={`border-t-2 border-${props.color} w-20 h-1`}></div>
        </div>
        <div className='p-5'>
          {props.children}
        </div>
        
    </div>
    
  )
}

export default Section