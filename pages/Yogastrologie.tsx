import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StarButton from '../components/StarButton'
import img1 from '../Images/Moon.png'

type Props = {}

const Yogastrologie = (props: Props) => {
  return (
    <>
    <Head>
        <title>Selene-Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-xs md:text-base font-main'>
        <Navbar/>
        <div className='text-center font-serif uppercase text-4xl m-6 underline underline-offset-8 text-selene-green'>Yogastrologie</div>
        <Image src={img1} alt={'Mountain lake'}/>
        <p className='p-10 text-center text-base'>
        Que cela soit par les postures, les pranayama (travail du souffle), les chants ou les méditations orientées ;<br/>
        Chacun sera amené à s’approprier les outils pour restaurer son énergie et cultiver son bien-être,
        En explorant sensiblement sa nature élémentaire et la danse des énergies actuelles.<br/>
        Cet atelier offre le même développement que le yoga, avec une initiation symbolique pour entrer en alliance avec le monde magique qui prend racine dans notre sensation propre.
        <br /><br />
        Cet atelier est un lieu expérimental voué au bien-être et à la connaissance de soi, en vue de cultiver une relation nouvelle à soi-même et à l’environnement.
        <br />
        Rencontre astrologique préalable <br />
        d’une durée de 1 h 30 

 

        </p>
        <div className='flex justify-center'>
          <StarButton title='Me contacter' className='px-10 py-3 m-3'/>
        </div>

        <Footer bgClassName='bg-gradient-to-t from-selene-green to-selene-green-dark'/>
      </main>
    </>
  )
}

export default Yogastrologie