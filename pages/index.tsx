import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'

import sunshide_mountain from '../Images/hill.svg'
import moutain_lake from '../Images/mountain_lake.png'
import flo_shadow from '../Images/flo_shadow_2.svg'
import green_stars from '../Images/green_stars.png'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Section from '../components/Section'
import Actu from '../components/Actu'
import News from '../components/News'
import Contact from '../components/Contact'
import Soins from '../components/Soins'
import Practices from '../components/Practices'
import Modal from '../components/Modal'
import Story from '../components/Story'
import Yogastro from '../components/yogastro'
import Price from '../components/Price'



export default function Home() {
  const [story, setStory] = useState<boolean>(false)
  return (
    < >
      <Head>
        <title>Selene-Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-xs md:text-base font-main'>
        <Navbar/>
        <Modal>
          A toi qui viens animer ces mots,
          De l’étincelle de ton regard, 
          Bienvenue et merci, 
          Pour ce dialogue de lumière.
        </Modal>
        <Section name='home' bgImg={moutain_lake}>
          <div className='p-5'>
            <Intro/>
          </div>
        </Section>
        <Section name='yogastro' bgImg={green_stars}>
          <div className='p-5'>
            <Yogastro/>
          </div>
        </Section>
        <Section 
          title='Actualités - évènements' 
          name='actu' 
          borderColor='border-selene-green' 
          textColor='text-selene-green'>
          <div className='p-5'>
            <Actu/>
          </div>
        </Section>
        <Section title='Articles' 
          borderColor='border-selene-green' 
          textColor='text-selene-green'
          name='news' 
          bg="bg-gradient-to-b from-white to-selene-white">
          <div className='p-5'>
            <News/>
          </div>
        </Section>
        <Section 
          title='Les soins'
          borderColor='border-selene-green' 
          textColor='text-selene-green' 
          name='health' 
          bgImg={sunshide_mountain}>
          <div className='p-5'>
            <Soins/>
          </div>
        </Section>
        <Section 
          title='Les pratiques'  
          textColor='text-white' 
          name='practices' 
          bg="bg-gradient-to-b from-practice-green-dark to-practice-green-light">
          <div>
            <Practices/>
          </div>
        </Section>
        <Section title='Tarifs' 
                 name='prices'
                 textColor='text-white'
                 bg="bg-practice-green-light">
          <div className='p-5'>
            <Price/>
          </div>
        </Section>
        <Section 
          title='Contact' 
          textColor='text-white' 
          name='contact' bgImg={flo_shadow}>
          <div className='overflow-hidden'>
            <Contact handleStory={story} setHandleStory={setStory}/>
          </div>
        </Section>
        {story && (<Section textColor='text-white' name='story'>
          <div className='p-5'>
            <Story/>
          </div>
        </Section>)}
        <Footer bgClassName='bg-black'/>
      </main>
    </>
  )
}
