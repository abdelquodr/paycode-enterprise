import Image from 'next/image'
import React from 'react'

function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='none md:flex md:col-1/2'>
        <Image src={'../assets/icons/404.svg'} alt='404' width={500} height={500}  />
      </div>
      <div>
        <h1 className='font-fit font-light text-6xl py-4'>Oooops!</h1>
        <h4 className='font-fit font-light text-4xl'>Page Not Found</h4>
        <p className='font-sans text-sm font-light'>Since you&apos;re here already, allow me to intoduce </p>
        <p className='font-sans text-sm font-light'>what paradise on earth might mean to us</p>
      </div>
     
    </div>
  )
}

export default NotFound
