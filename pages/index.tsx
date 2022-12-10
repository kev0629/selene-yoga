import Head from 'next/head'
import Image from 'next/image'

import sunshide_mountain from '../Images/z-s-nqVDLh2WLus-unsplash.jpg'
import moutain_lake from '../Images/mountain_lake.png'
// import styles from '../styles/Home.module.css'
import flo_shadow from '../Images/flo_shadow.jpg'

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

export default function Home() {
  return (
    < >
      <Head>
        <title>Selene-Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-xs md:text-base font-main'>
        <Navbar/>
        <Modal/>
        <Intro/>
        <Section title='Actualités - évènements' name='events' color='selene-green'>
          <Actu/>
        </Section>
        <Section title='Articles' color='selene-green' name='news' bg="gradient-to-b from-white to-selene-white">
          <News/>
        </Section>
        <Section title='Les soins'  color='selene-green' name='soins' bgImg={sunshide_mountain}>
          <Soins/>
        </Section>
        <Section title='Les pratiques'  color='white' name='practices' bg="gradient-to-b from-selene-green-dark to-selene-green">
          <Practices/>
        </Section>
        <Section title='Contact' color='white' name='contact' bgImg={flo_shadow}>
          <Contact/>
        </Section>
        <Footer/>
      </main>
    </>
  )
}
