import React from 'react'
import Button from '@/components/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'


export default function Register() {
  return (
    <form className='md:w-1/2 md:px-14'>
      <div className='pb-5'>
        <h4 className='text-2xl font-fit font-bold'>Creat An Account</h4>
      </div>
      <div className='flex w-full flex-col justify-center items-center'>
      <div className="grid py-2 w-full max-w-sm items-center gap-1">
          <Label htmlFor='firstname'  className='text-sm font-fit'>First Name</Label>
          <Input type='text' id='firstname' placeholder='First Name' />
        </div>
        <div className="grid py-2 w-full max-w-sm items-center gap-1">
          <Label htmlFor='lastname' className='text-sm font-fit'>Last Name</Label>
          <Input type='text' id='lastname' placeholder='Last Name' />
        </div>
        <div className="grid py-2 w-full max-w-sm items-center gap-1">
          <Label htmlFor='email'  className='text-sm font-fit'>Email</Label>
          <Input type='email' id='email' placeholder='Email' />
        </div>
        <div className='grid py-2 w-full max-w-sm items-center gap-1'>
          <Label htmlFor='password' className='text-sm font-fit'>Password</Label>
          <Input type="password" id='password' placeholder='Password' />
        </div> 
      </div> 
      <div className='flex flex-col w-full md:py-3 '>
        {/* <Link href='/auth/forgot_password'>
          <p className='text-xs font-fit font-bold py-2 cursor-pointer'>Forgot Password ?</p>
        </Link> */}
        <Button type='button' label='Register' variant='solid' className='w-full text-zinc-50 bg-black hover:bg-brand-300 hover:text-black' route='' />
      </div>
    </form>
        
  )
}