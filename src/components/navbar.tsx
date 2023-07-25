import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <nav className='p-3'>
      <Link href='/'>
        <div className='w-full flex justify-center'>
          <Image
            src={'/assets/duck.png'}
            alt='mainImg'
            width={100}
            height={50}
          />
          <h1 className='text-amber-900 lg:mx-12 text-4xl font-nav my-auto'>
            Duck Shop
          </h1>
        </div>
      </Link>
      <ul className='flex justify-center text-amber-900 font-extrabold font-nav text-xl lg:text-2xl'>
        <li>
          <Link href='/all'>All products</Link>
        </li>
        <li className='ml-12'>
          <Link href='/bags'>Bags</Link>
        </li>
        <li className='ml-12'>
          <Link href='/bottoms'>Bottoms</Link>
        </li>
        <li className='ml-12'>
          <Link href='/tops'>Tops</Link>
        </li>
      </ul>
    </nav>
  )
}
