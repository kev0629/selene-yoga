import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { GetStaticProps } from 'next'
import PostBody from '../../components/PostBoddy'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StarButton from '../../components/StarButton'
import Image from 'next/image'
import img2 from '../../Images/mountain_sunset.jpg'

type Props = {
    post:any
}

const Post = ({post}: Props) => {
    const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    <Head>
        <title>Selene-Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-xs md:text-base font-main'>
        <Navbar/>
        <div  className="relative h-32">
          <Image src={post.coverImage.url} alt={'Mountain sunset'}
          fill
          className='object-cover'
          // placeholder='blur'
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center center-content z-10'>
            <div>
              <div className=' text-center text-white bold text-4xl font-serif'>{post.title}</div>
            </div>
          </div>
        </div>
        <p className='p-10 text-center'>
            
        <PostBody content={post.content} />
        </p>

        <Footer bgClassName='bg-gradient-to-t from-selene-green to-selene-green-dark'/>
      </main>
    </>
  )
}

export default Post
type staticProps ={
  params:any,
  preview:boolean
}


export async function getStaticProps({ params, preview = false }:staticProps) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

type slugProps = {
  slug:any
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }:slugProps) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}