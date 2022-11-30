import React from 'react'

type Props = {
    title:string,
    children: any
}

const Section = (props: Props) => {
  return (
    <div className='border-y-2 border-white'>
        <div className='text-3xl text-center mx-10 font-serif text-selene-green '>{props.title}</div>
        <div className="flex justify-center">
          <div className='border-t-2 border-selene-green w-20 h-1'></div>
        </div>
        <div className='p-5'>
          {props.children}
        </div>
        
    </div>
    
  )
}

export default Section