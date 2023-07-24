import { Layout } from '@/components/layout'
import productData from '@/data/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function All(): JSX.Element {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <div className='mt-4 w-5/6 justify-center grid grid-cols-4 '>
          {productData.map((product, index) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <div className={`m-4 border-2 border-zinc-300 bg-black`}>
                <Image
                  className={`hover:opacity-20 transition-opacity duration-300 relative`}
                  width={500}
                  height={500}
                  style={{ height: '350px' }}
                  src={`${product.thumbnail}`}
                  alt=''
                />
              </div>
              <h1 className='ml-5 bg-white'>{product.title}</h1>
            </Link>
          ))}
        </div>
        <div className='ml-auto mr-10 my-4 flex justify-between'>
          <Link href='/products/add'>
            <button className=' bg-blue-500 px-4 py-2 rounded-md text-white font-bold'>
              ADD
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}