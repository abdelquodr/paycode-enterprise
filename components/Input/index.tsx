'use client'

import { useState } from 'react'
import Button from '@/components/Button'

const Input = () => {
  const [ openSelect, setOpenSelect ] = useState(false)
  const [value, setValue ] = useState('')

  const handleOnChange = (e) =>  setValue(e.target.value)
  const handleOnFocus = () => setOpenSelect(true)
  
  return (
    <div className='flex-auto flex flex-col'>
      <div className='w-full'>
        <div className={`my-2 border border-zinc-800 p-1 flex rounded-md bg-white`} >
          <input onChange={handleOnChange} onFocus={handleOnFocus} value={value} className={`p-1 py-2 px-2 appearance-none bg-white outline-none w-full font-normal text-zinc-800 text-xs`} />
          <Button variant='solid' label='subscribe' route='' className='px-3' />
        </div>
      </div>
    </div>
  )
}

export default Input

