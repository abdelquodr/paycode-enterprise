import Image from 'next/image'
import Header from '@/components/Header'
import Feature from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='block'>
      <Header />
      <Feature />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}
