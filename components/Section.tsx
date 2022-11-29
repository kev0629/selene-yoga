import React from 'react'

type Props = {
    title:string,
    children: any
}

const Section = (props: Props) => {
  return (
    <div className='border-y-2 border-white'>
        <div className='text-3xl text-center m-10 font-serif text-selene-green '>{props.title}</div>
        <div className='border-t-2 border-selene-greeen w-50'></div>
        {props.children}
    </div>
    
  )
}

export default Section