import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
  import Icon from '@/components/Icon';


export default function NavbarDocCompnent({nav}) {
  return (
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
            </a>3        
          </NavigationMenuLink>
        </li>
        {/* <ListItem className='font-rope text-xs' href="/docs" title="Introduction">
          Re-usable components built using Radix UI and Tailwind CSS.
        </ListItem>
        <ListItem className='font-rope text-xs' href="/docs/installation" title="Installation">
          How to install dependencies and structure your app.
        </ListItem>
        <ListItem className='font-fit text-xs' href="/docs/primitives/typography" title="Typography">
          Styles for headings, paragraphs, lists...etc
        </ListItem> */}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  )
}
