'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useState } from 'react'
import Button from '@/components/Button'
import Icon from '@/components/Icon';
import Search from '@/components/Search';
import NavbarBlogCompnent from '../NavbarBlogCompnent';
import NavbarDocCompnent from '../NavbarDocCompnent';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"


const NavItem = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Service',
    href: '/services',
  },
  {
    name: 'Blog',
    href: '/blog',
    subMenu: {
      component: <NavbarBlogCompnent />
    }
  },
  {
    name: 'Documentation',
    href: '/docs',
    subMenu: {
      component: <NavbarDocCompnent />
    }
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [ openMenu, setOpenMenu ] = useState(false)

  const handleMenuToggle = () => setOpenMenu((prevState) => !prevState)

  return (
    <NavigationMenu className='min-w-full mt-8'>
      <div className='flex justify-between w-full mx-2 md:pt-3 md:px-36 bg-white md:w-[calc(100%)] py-2 fixed h-16 md:h-18'>
        <div className='flex align-middle space-x-5 items-center divide-x divide-brand-600'>
          <div className=''>
            <Link href='/'>
              <Icon src='logo_1' size={35} />
              <span className='pr-4 text-lg text-zinc-800 font-rope font-bold'>Pay<span className='reverse font-fit font-light translate-x-full text-zinc-600'>code</span></span>  
            </Link>  
          </div>         

          <NavigationMenuList className='hidden sm:flex sm:pl-3 sm:space-x-0  align-middle items-center'>
            {NavItem.map((nav, index) => ( 
            <div  key={nav?.name + index} >
              {/* <Button variant='default'route={nav?.href} label={nav?.name} className={`hover:bg-grey-light px-4 py-1 text-center rounded-full ${pathname === nav?.href && 'font-semibold underline text-brand-600'}`} /> */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`hover:bg-grey-light font-fit px-4 py-1 text-center rounded-md ${pathname === nav?.href && 'font-semibold underline underline-offset-4 decoration-solid decoration-1 decoration-brand-600'}`}>{nav?.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-5 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href={nav.href}
                        >
                          <Icon src={'menu_icon'} className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium font-fit">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground font-rope">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem className='font-rope text-xs' href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem className='font-rope text-xs' href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem className='font-fit text-xs' href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
            )) }
          </NavigationMenuList>
        </div>

        <div className='hidden sm:flex space-x-4 align-middle items-center'>
          <Search />
          <Button variant='default' label='Immediate Support      ' className='font-semibold mr-3' route='/elite_care' icon='arrow_right' />
          <Button variant='outlined' label="Login" route='/auth/login' />
        </div>
        <div onClick={handleMenuToggle} className='w-12 h-12 p-3 sm:hidden rounded-full hover:bg-slate-50'>
          <Icon src={'menu_icon'} />
        </div>
      </div>
      <Menu openMenu={openMenu} /> 
    </NavigationMenu>
   
  )
}

const Menu = ({openMenu}) => {
  const pathname = usePathname()

  return (  
    <div className='sm:hidden w-full ml-7'>
      <div className={`${openMenu ? 'flex' : 'hidden' } flex-col justify-center w-[300px] border border-gray-100 absolute z-20 top-8 my-3 py-3 rounded-md shadow-md bg-white`} >
        {
          NavItem?.map((nav, index) => (
            <div key={index} className='flex justify-center space-x-3 px-1 py-2' > 
              <Button variant='default' key={nav?.name + index} route={nav?.href} label={nav?.name} className={`hover:bg-grey-light px-4 py-1 text-center rounded-full  ${pathname === nav?.href && ''}`} />
            </div>
          ))
        }
        <div className='sm:hidden space-x-4 align-middle py-2 text-center'>
        <Button variant='default' label='Immediate Support' className='font-semibold' route='/elite_care' icon='arrow_right' />
        <Button variant='outlined' label="Login" route='/auth/login' />
        </div>
      </div> 
    </div>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"