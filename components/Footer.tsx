import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className='bg-black text-white text-[10px]'>
        <div className='flex flex-row p-5 gap-5'>
          <div className='basis-1/2 text-center'>
            <div className='font-serif'>MENTIONS LEGALES</div>
            <br />
            <div>Proprietaitre de site:</div>
            <div>florian.ponte@gmail.com</div>
            <div>06 23 27 12 40</div>
            <br />
            <div>Site réalisé par KS Project</div>
            <div>Hébergement chez O2 Switch</div>
          </div>
          <div className='basis-1/2 text-center'>
            <div className='font-serif'>CONTACT</div>
            <br />
            <div>Florian Ponte</div>
            <div>5 chemin du turlututu</div>
            <div>0400 Vence</div>
          </div>
        </div>
        
         


      </footer>
    </>
    
  )
}

export default Footer