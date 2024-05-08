import React from 'react'
import Image from 'next/image'

export default function AuthLayout({ children }) {
  return (
    <div className='w-full min-h-[100%] '>
      <div className='flex divide-x-1 divide-brand-300'>
        <div className='flex md:w-1/3 h-[calc(100vh-32px)] justify-center items-center backdrop-grayscale-0 backdrop-blur-md bg-black'>
          <Image className='self-center' src='/assets/icons/auth_illustration.svg' alt='illustration' width={400} height={400} />
        </div>
        <div className='md:w-2/3 flex justify-center items-center'>
          { children }
        </div>
      </div>
    </div>
  )
}
