import React from 'react'

type Props = {}

const Soins = (props: Props) => {
  return (
    <>
    <div className="flex flex-col content-center m-auto uppercase text-center w-5/6 space-y-5">
        <div className='p-10 bg-red-600 rounded-xl'>Consultations individuelles</div>
        <div className='p-10 bg-red-600 rounded-xl'>Rencontres collectives</div>
    </div>
    </>
  )
}

export default Soins