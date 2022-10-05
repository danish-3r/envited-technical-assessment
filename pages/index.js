import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import LandingPage from '../public/Landing page image.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-secondary-200'>
        <section className='h-screen p-10 lg:static'>
          <div className='text-center p-5 lg:text-right lg:absolute lg:right-20'>
            <h1 className='text-5xl font-bold pt-4 pb-1 text-primary-400'>Imagine if</h1>
            <h1 className='text-5xl font-bold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-100'>
                Snapchat
              </span></h1>
            <h1 className='text-5xl font-bold pt-1 text-primary-400'>had events.</h1>
            <p className='text-lg leading-5 text-text-600 pt-5 px-2 max-w-sm sm:text-md mx-auto lg:text-right lg:mr-0'>
              Easily host and share events 
              with your friends across any 
              social media.
            </p>
          </div>
          <div className='text-center py-5 drop-shadow-sm lg:text-left'>
            <Image src={LandingPage} height={500} width={500}/>
          </div>
          <div className='text-center py-5 lg:absolute lg:right-24 lg:top-[20rem]'>
            <Link href='/create'>
              <a className='bg-gradient-to-r from-primary-200 to-primary-100 text-white text-lg font-semibold md:px-12 px-4 py-4 rounded-xl' href='#'>🎉 Create my event</a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
