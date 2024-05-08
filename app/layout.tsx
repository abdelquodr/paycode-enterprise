import type { Metadata } from 'next'
import Link from 'next/link';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Open_Sans as Sans,
  Outfit as Fit,
  Manrope as Rope
} from 'next/font/google';
import './globals.css'
import NavMenu from '@/components/NavMenu';

const sans = Sans({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-sans',
  // weight: ['400','500', '600', '700','800'],
});
const fit = Fit({
  subsets: ['latin'],
  variable: '--font-fit',
  weight: ['400','500', '600', '700', '800', '900'],
});
const rope = Rope({
  subsets: ['latin'],
  variable: '--font-rope',
  weight: ['400','500', '600', '700', '800'],
});


export const metadata: Metadata = {
  title: {
    template: '%s | Paycode',
    default: 'paycode | pay with code anywhere, anytime',
  },
  description: 'Offering secure mobile money transfers, digital wallet solutions, e-commerce payment processing, and more.',
  openGraph: {
    title: 'Paycode',
    description: 'Offering secure mobile money transfers, digital wallet solutions, e-commerce payment processing, and more.',
    locale: 'en_US',
    type: 'website',
    url: 'https://paycode.com',
    siteName: 'paycode.com',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'code payments platform',
      },
    ],
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${fit.variable} ${rope.variable}`}>
      <body>
        <div className=''>
          <Navbar /> 
          {/* <NavMenu /> */}

          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
