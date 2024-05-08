import React from 'react'
import Button from '../Button'
import Avatar from '../Avatar'
import CreditCard from '../CreditCard'
import Image from 'next/image'
import Icon from '../Icon'

export default function Header() {
  return (
    <div className='pt-20 pb-16 md:py-20 md:px-36 mx-2 md:h-fit md:my-auto'>
      <div className='flex flex-col md:flex-row justify-between md:space-x-32'>
        <div className='block text-center md:w-1/2 align-baseline'>
          <div className='flex justify-center md:justify-start'>
            <Icon src='play' size={25}className='pr-1 cursor-pointer align-middle' />
            <h5 className='text-xs align-middle pt-1 font-fit font-semibold'>Don&apos;t miss out on benefits</h5>
          </div>
          <div className=''>
            <h2 className='font-bold font-fit text-5xl md:text-6xl leading-tight py-5 md:text-left md:py-12'>Revolutionize Finances: Secure Code Payments </h2>
            <p className='text-xs font-normal px-12 md:px-0 text-light leading-5 md:w-2/3 md:text-left  text-zinc-700 font-rope'>Say Godbye👋🏽 to the Hassle of Traditional Money Transfers. Paycode allows efforlessly code-based transfer anywhere in the world with confidence and ease.</p>
          </div>
          <div className='flex justify-center md:justify-start space-x-6 py-8'>
            <Button variant='outlined' label='App Store ' icon='app_store' route='' className='flex flex-row-reverse'/>
            <Button variant='outlined' label='Google Play' icon='google_play' route='' className='flex flex-row-reverse'/>
          </div>
        </div>
        
        <div className='md:w-1/2'>
          <Avatar />
          <CreditCard />
          <Icon src='/target_arrow' size={15} className='relative left-80 top-3' />
          <div className='flex justify-between space-x-3 md:left-[22rem] top-[-6px] md:top--3 border border-gray-50 relative bg-white shadow-md w-48 rounded-md p-3 h-auto'>
            <div>
              <Image width={45} height={45} className="inline-block rounded-full ring-2 md:ring-2 ring-white" src={'/assets/img/happy_customer_2.jpg'} alt='happ_cusomer' /> 
            </div>	
            <div className='flex flex-col'>
              <h4 className='text-sm text-left font-fit text-zinc-700 font-semibold'>Helen Adegbola</h4>  
              <p className='text-xs font-sans text-green-600'>Successful Transfer</p>
              <small className='block font-sans font-xxs text-gray-400'> 07 August 2023 12:32pm</small>
            </div>					
          </div>
        </div>
      </div>

      <div className='py-8 z-0 '>
        <div className='flex justify-center md:justify-start align-middle space-x-3 text-center'>
          <Image src='/assets/icons/arrow_right.svg' alt='arrow' className='' width={80} height={20} />
          <p className='text-black-800 self-center text-md md:text-1xl font-rope font-light'>Our Partners</p>  
        </div> 
        <div className='md:flex space-y-5 text-center md:justify-between py-3 w-full'>
          <Image src='/assets/icons/walmart_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='walmart' />
          <Image src='/assets/icons/amazon_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='amazon' />
          <Image src='/assets/icons/fedex_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='fedex' />
          <Image src='/assets/icons/google_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='google'/>
          <Image src='/assets/icons/motorola_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='motorola' />
          <Image src='/assets/icons/airbnb_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80}  alt='airbnb'/>
          <Image src='/assets/icons/microsoft_logo.svg' className='hover:grayscale-0 partner-image' width={80} height={80} alt='microsoft' />
        </div> 
      </div>  
    </div>
  )
}
 