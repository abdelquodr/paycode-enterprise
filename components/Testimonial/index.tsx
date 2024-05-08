'use client'

import Image from 'next/image'
import React, { useState, useRef} from 'react'
import Icon from '@/components/Icon'

export default function Testimonial() {
  const videoRef = useRef(null);
  const [ ismuted, setIsMuted ] = useState(true);

  const handlePlayPause = () => {
    videoRef.current.play();

    if (ismuted) {
      videoRef.current.muted = false;
      setIsMuted(false)
    } else {
      videoRef.current.muted = true;
      setIsMuted(true)
    }
  };

  return (
    <div className='py-28 md:px-32'>
      <div className='text-center md:w-3/5 m-auto'>
        <p className='text-xs font-rope text-bold text-brand-600 uppercase'>Testimonials</p>
        <h2 className='text-4xl md:text-5xl py-6 font-bold font-fit break-words'>What our Customers are Saying</h2>
      </div>
      <div className='flex flex-col md:flex-row px-3 justify-center md:justify-between md:space-x-5'>
        <div className='flex flex-col md:flex-row  md:justify-between md:[w-95%]'>
          <div className='md:w-1/2 relative video-clip-path py-8 my-6 border-6 bg-green-200 md:rounded-lg'>
            <video
              className='md:rounded-lg'
              autoPlay
              controlsList='nodownload nofullscreen noremoteplayback'
              src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
              poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
              width={600}
              ref={videoRef}
              onClick={handlePlayPause}
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <button className={`text-white rounded`}>
                { ismuted && <Icon src='quiet' size={40} /> }
              </button>
            </div>
          </div>

          <div className='flex md:flex-col justify-center md:w-1/2 md:pl-16'>
            <div className=''>
              <h5 className='text-zinc-700 font-semibold font-fit'>Carl Rowan</h5>
              <p className='font-xxs font-sans font-normal text-gray-500'>CEO, Rowan Group Inc.</p>
            </div>
            <div className='py-4'>
              <p className='text-sm md:text-lg font-rope leading-8'>"I have been using <span className='font-semibold'>PayCode</span> for a few months now and It has completely transformed the way I send money to my family abroad. The platform is so easy to use and transfer are always secure and fast."</p>
            </div>
          </div>
        </div>
        <div className='flex md:w-[5%] flex-col space-y-5 justify-center ml-auto'>
          <div className='w-3 h-3 rounded-full border-2 bg-brand-300 hover:bg-brand-300'></div>
          <div className='w-3 h-3 rounded-full border-2 border-brand-300'></div>
          <div className='w-3 h-3 rounded-full border-2 border-brand-300'></div>
          <div className='w-3 h-3 rounded-full border-2 border-brand-300'></div>
        </div>
      </div>
    </div>
  )
}
