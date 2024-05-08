import React from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Faqs from '@/components/Faqs'
import Image from 'next/image'

export default function About() {
  return (
      <div className='py-0 md:py-8'>
        <div className='flex justify-between md:space-x-28'>
          <div className='md:w-1/2'>
            <div className='md:'>
              <div className='m-auto text-center'>
                <Image className='m-auto md:w-full' src={'../assets/img/about_hero.svg'} alt='about_us' width={300} height={700} />  
              </div> 
            </div>
          </div>
          <div className='md:w-1/2 py-32 md:pr-36'>
            <div className='py-4'>
              <h3 className='font-fit font-bold md:text-6xl leading-tight'>Secure Finances with PayCode<span className='text-red-500'>:</span> It's Either Your Transaction Is Successful or We Go Home <span className='text-red-500'>!</span></h3>
              <div className='flex py-4'>
                <Icon className='self-center md:pt-2' src='arrow_right' size={30} />
                <Button variant='default' label='Get In the Loop' route='' className='flex  flex-row-reverse'/>
              </div>
            </div>

            <div className='py-3'>
              <h2 className='text-semibold font-rope text-xl'>Protect credit card details online. Instead, use a special code to pay. Enter the code on the website or through your phone. Transfer to any bank account in different currencies. </h2>
            </div>
          </div>     
        </div>

        <div className='md:py-16'>
          <div className=''>
            <h2 className='font-fit md:text-5xl font-bold md:text-center md:px-96'>Feel the Best Experience With our Features</h2>
            <p className='font-rope text-xs text-center text-zinc-700'>Spend smarter, Lower your bills, and unlock credit to grow your business</p>
          </div>
        </div>

        <div className='md:px-36'>
          <div className='flex space-x-16'>
            <div className='flex md:w-3/4 rounded-md md:pt-8 md:px-12 bg-[#DFF4FF]'>
              <div className='md:pr-10 md:w-2/3 align-middle align-center'>
                <h2 className='text-4xl md:text-3xl py-6 font-bold font-fit break-words'>Pay quick, simple and ease</h2>
                <p className='font-rope text-sm text-zinc-700 leading-6'>Paying your bills on paycode has never been easier. Whether, you're paying electricity bills or internet, paycode get it odne in seconds. The primary objectives of this system are to provide a secure, user-friendly, and efficient payment solution that enhances the user experience and allows seamless transactions across different banking accounts. The system should also prioritize data privacy and adhere to regulatory requirements.
                paycode get it done within second 
                </p>
              </div>
              <div className='md:w-1/3'>
                <Image className='w-full' src={'../assets/img/pay_bills.svg'} alt='pay_bills' width={300} height={300} />
              </div>
            </div> 
            <div className='md:w-1/4 rounded-md bg-[#EAECFF]'></div>
          </div>
        </div>

        <div className='md:py-16'>
          <Image className='m-auto h-fit w-fit' src={'../assets/img/about_2.svg'} alt='about_us' width={300} height={700} />  
        </div>

        <Faqs />
      </div>
  )
}
