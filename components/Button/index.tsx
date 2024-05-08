'use client'  

import { FC } from 'react';
import Link from 'next/link'
import Image  from 'next/image'
import Icon from '@/components/Icon'


type ButtonType = {
  icon?: string;
  label: string,
  className?: string,
  variant: string,
  route: string
}

const Button: FC<ButtonType> = (props) => {

  const {icon, label, className, variant, route} = props

  if (icon === null && label === null) {
    throw new Error('Both icon and label cannot be null');
  }

  const buttonClassName = `
    text-zinc-700 text-sm font-fit font-normal,
    ${variant === 'solid' ? 'bg-brand-300 text-zinc-900 font-semibold py-2 px-5 rounded-md border border-zinc-800' : 
      (variant === 'outlined' ? 'border border-zinc-300 py-2 px-7 text-zinc-800 rounded-md hover:bg-brand-300 hover:border hover:border-zinc-700 hover:text-black' : 
      (variant === 'default' ? 'bg-grey-light text-grey-400 sm:px-4 py-2 rounded-full' : ''))
    }

    ${className}
  `;

  return (
    <Link href={route} >
      <button className={buttonClassName} >    
        <span className='align-baseline pt-1'>{ label }</span>
        {icon && <Icon src={icon} size={25} /> }  
      </button>
    </Link>
  ) 
}


export default Button

