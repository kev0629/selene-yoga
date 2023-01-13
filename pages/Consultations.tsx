import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StarButton from '../components/StarButton'

type Props = {}

const consultation_individuel = (props: Props) => {
  return (
    <>
    <Head>
        <title>Selene-Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-xs md:text-base font-main'>
        <Navbar/>
        <p className='p-10 text-center'>
        Je me propose de vous aider par deux voies complémentaires :
        <br />
        - La voie de la conscience
        <br />
        La voie de la conscience est une approche utilisant des outils de lecture symbolique (astrologie, yi-king, 
        tarot initiatique et human design) afin de porter sur nous un regard en phase avec le jeu des forces, 
        en nous-même et dans l’environnement.
        Connaître notre nature énergétique et spirituelle, c’est reconnaître et prendre soin de notre sensibilité 
        afin de nous accomplir à travers elle. C’est observer la graine que nous sommes pour faciliter le fruit que 
        l’on va engendrer, pour soi-même et pour le monde.
        <br />
        - La voie de l’énergie
        <br />
        La voie de l’énergie est une approche davantage sensible et intégrative. Elle a pour but d’augmenter la quantité 
        et la qualité de notre énergie vitale à travers des soins physiques, énergétiques et/ou spirituels 
        (massage bien-être, massage Tao énergétique ou Reïki).
        Apprendre à recevoir et à donner de l’attention, de l’énergie, c’est reprendre part de façon sensible à la danse 
        qui s’opère entre le pur esprit, notre idéal ; et la matière la plus dense, la nécessité concrète. C’est retrouver 
        la richesse de ce qui œuvre à chaque instant et se joindre harmonieusement à la partition.
        </p>
        <div className='flex justify-center'>
          <StarButton title='Me contacter' className='px-10 py-3 m-3'/>
        </div>

        <Footer bgClassName='bg-gradient-to-t from-selene-green to-selene-green-dark'/>
      </main>
    </>
  )
}

export default consultation_individuel