import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaCircleUser } from 'react-icons/fa6'

export default function Banner(): JSX.Element {
  const textPreset: string =
    'text-2xl my-auto text-white lg:mx-4 mx-2 cursor-pointer'
  return (
    <div className='flex p-2 w-full bg-violet-300 text-center justify-between'>
      <h1 className=' text-white font-bold mx-auto lg:pl-48 text-xs my-auto lg:text-lg'>
        지금 회원 가입 하시면 20% 할인 쿠폰 제공!
      </h1>
      <div className='flex'>
        <div className={textPreset}>
          <AiOutlineShoppingCart />
        </div>
        <div className={textPreset}>
          <FaCircleUser />
        </div>
        <h1 className='font-nav lg:text-xl my-auto font-extrabold lg:px-4 text-amber-900 cursor-pointer'>
          Log in
        </h1>
      </div>
    </div>
  )
}
