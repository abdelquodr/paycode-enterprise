import React from 'react'
import Button from '@/components/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


export default function ForgotPassword() {
  return (
    <form className='md:w-1/2 md:px-14'>
      <div className='pb-5'>
        <h4 className='text-2xl font-fit font-bold'>Enter Your Registered Email</h4>
      </div>
      <div className='flex w-full flex-col justify-center items-center'>
        <div className="grid py-2 w-full max-w-sm items-center gap-1">
          <Label htmlFor='email'  className='text-sm font-fit'>Email</Label>
          <Input type='email' id='email' placeholder='Email' />
        </div> 
      </div> 
      <div className='flex flex-col w-full md:py-3'>
        <Button type='button' label='Submit' variant='solid' className='w-full text-zinc-50 bg-black hover:bg-brand-300 hover:text-black' route='' />
      </div>
    </form>
        
  )
}