import React from 'react'
import Icon from '@/components/Icon'
import Input from '@/components/Input'

type FooterDataType = {
    Product: string[];
    Information: string[];
    Company: string[];
}
type footerHeaderType = string[]

const footerHeader:footerHeaderType= ['Product', 'Information', 'Company']
const footerData:FooterDataType = {
  Product: ['Online Payments', 'Pos', 'Investment'],
  Information: [ 'FAQ\'s', 'Blog', 'Support'],
  Company: ['About Us', 'Careers', 'Contact US']
}



export default function Footer() {
  return (
    <div className='divide-y space-y-6 md:px-36 divide-gray-100 pt-16'>
      <div className='flex justify-between md:space-x-64'>
        <div className='flex justify-between md:w-[55%]'>
          {
            footerHeader?.map((item, index) => (
              <div key={index}>
                <h5 className='font-rope font-bold text-sm pb-2 '>{item}</h5>
                {
                  footerData[item as keyof typeof footerData]?.map((li, ind) => ( <li className='list-none font-fit text-zinc-700 text-sm py-3 cursor-pointer font-normal' key={ind}>{li}</li>))
                }
              </div>
            ))	
          }
        </div>
        <div className='md:w-[45%]'>
            <div className='md:'>
              <h5 className='font-fit font-bold text-2xl'>Sign up for our newsletter</h5>
              <div className='md:py-4'>
                <Input />
              </div>
            </div>
          </div>
      </div>
			<div className='flex justify-between py-5'>
        <div className='flex space-x-4'>
          <li className='list-none cursor-pointer'>
            <Icon src='linkedin' size={35} />
          </li>
          <li className='list-none cursor-pointer'>
            <Icon src='twitter' size={35} />
          </li>
        </div>
        <div className='flex md:space-x-16'>
          <li className='list-none font-fit text-xs py-2 font-normal'>Terms & Conditions</li>
          <li className='list-none font-fit text-xs py-2 font-normal'>Privacy Policy</li>
          <li className='list-none font-fit text-xs py-2 font-normal'>Cookies</li>
        </div>
        <div className=''>
          <Icon src='logo_1' size={35} />
          <span className='pr-4 text-lg text-zinc-800 font-rope font-bold'>Pay<span className='reverse font-fit font-light translate-x-full text-zinc-600'>code</span></span>  
        </div> 
      </div>
			</div>
  )
}
