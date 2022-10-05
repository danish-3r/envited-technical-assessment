import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {MdOutlineDateRange} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'
import {IoIosArrowForward} from 'react-icons/io'

import Cake from '../public/Birthday cake.png'

export default function Event() {
  return (
    <div>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Envited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-secondary-100'>
        <section className='h-screen lg:static'>
          <div className='md:text-center md:pt-20 lg:pt-20 lg:pr-20 lg:text-right'>
            <Image src={Cake} height={500} width={500}/>
          </div>
          <div className=' md:pt-20 md:pl-20 lg:absolute top-20 left-40'>
            <div className='text-left pt-1 px-6'>
                <h1 className='text-3xl font-bold text-primary-400'>Birthday Bash</h1>
                <p className='text-md text-text-500 mt-2'>
                Hosted by <span className='font-semibold'>Elysia</span>
                </p>
            </div>
            <div className='text-left pt-4 px-6'>
                <ul className='flex flex-col'>
                    <li className='flex flex-row my-4'>
                        <Link href=''>
                            <div className='flex flex-row'>
                                <EventIcon icon={<MdOutlineDateRange />} />
                                <div className='p-1'>
                                    <h4 className='text-sm font-bold text-primary-400'>18 August 6:00PM</h4>
                                    <h4 className='text-sm text-text-600'>to <span className='font-semibold'>19 August 1:00PM</span> UTC +10</h4>
                                </div>
                                <div className='pt-3 pl-10'>
                                    <IoIosArrowForward className=' text-2xl text-text-400'/>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className='flex flex-row'>
                        <Link href=''>
                            <div className='flex flex-row'>
                                <EventIcon icon={<GrLocation />} />
                                <div className='p-1'>
                                    <h4 className='text-sm font-bold text-primary-400'>Street name</h4>
                                    <h4 className='text-sm text-text-600'>Suburb, State, Postcode</h4>
                                </div>
                                <div className='pt-3 pl-20'>
                                    <IoIosArrowForward className=' text-2xl text-text-400'/>
                                </div>
                            </div>
                        </Link>
                    </li>
                    </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const EventIcon = ({icon}) => (
    <div className='eventicon'>
        {icon}
    </div>
)