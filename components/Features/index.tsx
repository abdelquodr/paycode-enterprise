import React from 'react'
import Image from 'next/image'
import Icon from '../Icon'


export default function Feature() {
  return (
    <div className='md:px-36'>
      <div>
        <div className='text-center md:w-3/5 m-auto'>
          <p className='text-xs font-rope text-bold text-brand-600 uppercase'>cross border transaction</p>
          <h2 className='text-4xl md:text-5xl py-6  font-bold font-fit break-words'>Say Goodbye to international Payments Hassles</h2>
          <p className='text-xs text-normal px-16 md:p-0 text-center leading-5 md:px-32 text-grey-400 font-rope'>Start your journey to hassle free Cross-Border Pament by downloading the <span className='font-bold'>Paycode</span> app from your IOS or Android store</p>
        </div>
        <div className='inline relative top-72 left-[41.5%] px-5 py-4 z-10 text-center font-bold text-1xl bg-white rounded-full'>VS</div>
        <div className='flex flex-col-reverse md:flex-row justify-between md:divide-x md:divide-gray-400 md:space-x-8 py-10'>
          <div className='mx-auto md:w-1/2 '>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Expensive high fees and unfavourable exchange rate</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Transfer delays and inconveniency</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Fraud and loss of funds</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Traditional in-Person transactions</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Lack of transparency</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Limited payment methods</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Comples verification processess</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Long payment wait tim</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>High currency exchange rate</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Long notification wait time on transaction</p>
            <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Hidden service charge costs</p>
          </div>
          <div className='flex justify-center md:justify-end  ml-0 md:md:1/2'>
            <div className='rounded-lg flex flex-col justify-center w-[85%]  md:w-2/3 py-8 px-6 float-right bg-[#e6faf1] border border-gray-100'>
              <div className='w-full'>
                <Image className='m-auto' src={'../assets/img/iPhone_1.svg'} alt='iPhone_1' width={300} height={300} />
              </div>
              <div className='m-auto'>
                <h4 className='font-fit py-4 font-semibold text-center text-3xl text-normal'>Global accounts in minutes</h4>
                <p className='text-xs text-center md:px-8 leading-5 text-grey-400 font-rope'>why share your account details to a vendor?<span className='font-bold'> Paycode </span> secure your account and make secure, fast transaction easy for everyone </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:py-40'>
        <div className='text-center md:w-3/5 m-auto'>
          <p className='text-xs font-rope text-bold text-brand-600 uppercase'>Real time exchange rate</p>
          <h2 className='text-4xl md:text-5xl py-6 md:px-12 font-bold font-fit break-words'>Effortlessly Convert Currency</h2>
          <p className='text-xs text-normal px-16 md:p-0 text-center leading-5 md:px-32 text-grey-400 font-rope'>Convert your Currency from Pounds to Naira to Dollar. Convert Currency Anytime Anywhere with <span className='font-bold'>Paycode</span> Seamless and Efficient Service </p>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-between md:divide-x md:divide-gray-400 md:space-x-8 py-10'>
          <div className='flex justify-center md:justify-start ml-0 md:md:1/2'>
            <div className='rounded-lg flex flex-col justify-center w-[85%]  md:w-2/3 py-8 px-6 float-right bg-[#F1DDFFB2] border border-gray-100'>
              <div className='w-full'>
                <Image className='m-auto' src={'../assets/img/iPhone_2.svg'} alt='iPhone_1' width={300} height={300} />
              </div>
              <div className='m-auto'>
                <h4 className='font-fit py-4 font-semibold text-3xl text-center text-normal'>Zero Hidden Fees </h4>
                <p className='text-xs text-center md:px-8 leading-5 text-grey-400 font-rope'>Get the best exchange rate with<span className='font-bold'> Paycode: </span> Convert curency hassle-free, Instantly without stress. </p>
              </div>
            </div>
          </div>
          <div className='mx-auto md:w-1/2 '>
            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#36;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>United State Dollar</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 770 to &#36; 1 + &#8358; 300 conversion fee</p>
              </div>
            </div>

            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#163;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>United Kingdom Pounds</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 890 to &#163; 1 + &#8358; 200 conversion fee</p>
              </div>
            </div>

            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#36;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>South Africa Rand</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 770 to &#36; 1 + &#8358; 300 conversion fee</p>
              </div>
            </div>
            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#8364;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>Germany Euro</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 1000 to &#8364; 1 + &#8358; 500 conversion fee</p>
              </div>
            </div>
            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#165;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>China Yuen</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 480 to &#165; 1 + &#8358; 100 conversion fee</p>
              </div>
            </div>
            <div className='flex md:ml-48 space-x-3 py-4'>
              <div className='w-10 h-10 rounded-full text-center bg-[#e6faf1]'>
                <p className='font-3xl font-bold pt-2'>&#8361;</p>
              </div>
                <div className='self-center'>
                <h5 className='text-sm font-fit font-bold'>South Korea Won</h5>
                <p className='text-xs py-1 font-rope font-normal'>&#8358; 540 to &#8361; 1 + &#8358; 150 conversion fee</p>
              </div>
            </div>
            
          </div>      
        </div>
      </div>

    <div>
      <div className='text-center md:w-3/5 m-auto'>
        <p className='text-xs font-rope text-bold text-brand-600 uppercase'>easily recieve and request payment</p>
        <h2 className='text-4xl md:text-5xl py-6 md:px-12 font-bold font-fit break-words'>Experience Seamless Money Transfer</h2>
        <p className='text-xs text-normal px-16 md:p-0 text-center leading-5 md:px-32 text-grey-400 font-rope'>Simplify Your Management with <span className='font-bold'>Paycode</span>, get personalize information on where, what you spend on the most</p>
      </div>
      <div className='flex flex-col-reverse md:flex-row justify-between md:divide-x md:divide-gray-400 md:space-x-8 py-10'>
        <div className='mx-auto md:w-1/2 '>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Expensive high fees and unfavourable exchange rate</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Transfer delays and inconveniency</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Fraud and loss of funds</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Traditional in-Person transactions</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Lack of transparency</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Limited payment methods</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Comples verification processess</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Long payment wait tim</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>High currency exchange rate</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Long notification wait time on transaction</p>
          <p className='text-xs py-3 font-rope'><span className='px-2 text-rose-400 text-semibold font-fit'><Icon src='/exit' size={15} className='' /></span>Hidden service charge costs</p>
        </div>
        <div className='flex justify-center md:justify-end  ml-0 md:md:1/2'>
          <div className='rounded-lg flex flex-col justify-center w-[85%]  md:w-2/3 py-8 px-6 float-right bg-[#D5FFFF] border border-gray-100'>
            <div className='w-full'>
              <Image className='m-auto' src={'../assets/img/iPhone_1.svg'} alt='iPhone_1' width={300} height={300} />
            </div>
            <div className='m-auto'>
              <h4 className='font-fit py-4 font-semibold text-3xl text-center text-normal'>Effortless Payments</h4>
              <p className='text-xs text-center md:px-8 leading-5 text-grey-400 font-rope'>why share your account details to a vendor?<span className='font-bold'> Paycode </span> secure your account and make secure, fast transaction easy for everyone </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}
