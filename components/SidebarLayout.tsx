"use client"
import { Article } from '@phosphor-icons/react/dist/ssr/Article';
import { ChatsTeardrop } from '@phosphor-icons/react/dist/ssr/ChatsTeardrop';
import { House } from '@phosphor-icons/react/dist/ssr/House';
import { Storefront } from '@phosphor-icons/react/dist/ssr/Storefront';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DotsThreeVertical } from '@phosphor-icons/react/dist/ssr/DotsThreeVertical';
import ProductBaseLogo from './ProductBaseLogo';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
const sidebarNavs = [
    {
        icon: <House size={18} />,
        title: 'Home',
        route: '/'
    },
    {
        icon: <Storefront size={18} />,
        title: 'Products',
        route: '/products'
    },
    {
        icon: <Article size={18} />,
        title: 'Blogs',
        route: '/blogs'
    },
    {
        icon: <ChatsTeardrop size={18} />,
        title: 'Community',
        route: '/community'
    },
    {
        icon: <ChatsTeardrop size={18} />,
        title: 'Login',
        route: '/auth/login'
    },
]

export default function SidebarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <div className='lg:flex'>
            <div className='w-[288px] h-[100dvh] bg-primary-foreground border-r border-border px-3 py-6 hidden lg:flex flex-col justify-between'>
                <nav className='flex flex-col gap-6 flex-1 overflow-auto'>
                    <Link href='/' className='cursor-pointer ml-1'>
                        <ProductBaseLogo />
                    </Link>
                    <ul className='flex flex-col gap-1 '>
                        {sidebarNavs.map((data, i) => (
                            <li key={i} className={`select-none w-full p-2 rounded-lg active:scale-95 border border-transparent text-primary transition-all cursor-pointer 
                            ${data.route === pathname ? 'bg-primary text-secondary' : 'bg-transparent hover:bg-primary/5 hover:border-border'}`}>
                                <Link href={data.route} className='flex items-center gap-2'>
                                    <span>{data.icon}</span>
                                    <span className='text-sm'>{data.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='select-none flex items-center justify-between cursor-pointer p-2 rounded-lg active:scale-95 hover:bg-primary/5 transition-all border border-transparent hover:border-border'>
                    <div className='flex items-center gap-2'>
                        <Avatar className='w-10 h-10'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='text-sm'>
                            <div className='font-semibold text-primary mb-0.5'>Abel Tesfaye</div>
                            <div className='text-primary/70'>@abeltesfaye</div>
                        </div>
                    </div>
                    <DotsThreeVertical size={20} className='opacity-30' weight='bold' />
                </div>
            </div>
            <div className='flex border-b lg:hidden h-12 px-4'>
                <div className='max-w-[660px] w-full mx-auto flex items-center justify-between'>
                    <Link href='/' className='cursor-pointer ml-1 h-[20px] [&>svg]:h-full'>
                        <ProductBaseLogo />
                    </Link>
                    <div className='text-primary'>
                        <Drawer >
                            <DrawerTrigger className='flex items-center justify-center' asChild>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-12.69,88L136,60.69V48h12.69L208,107.32V120ZM136,83.31,172.69,120H136Zm72,1.38L171.31,48H208ZM120,48v72H48V48ZM107.31,208,48,148.69V136H60.69L120,195.31V208ZM120,172.69,83.31,136H120Zm-72-1.38L84.69,208H48ZM208,208H136V136h72v72Z"></path></svg>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className='px-3 py-6 flex flex-col justify-between'>
                                    <nav className='flex flex-col gap-6 flex-1 overflow-auto min-h-[300px]'>
                                        <ul className='flex flex-col gap-1 '>
                                            {sidebarNavs.map((data, i) => (
                                                <li key={i} className={`select-none w-full p-2 rounded-lg active:scale-95 border border-transparent text-primary transition-all cursor-pointer 
                            ${data.route === pathname ? 'bg-primary text-secondary' : 'bg-transparent hover:bg-primary/5 hover:border-border'}`}>
                                                    <Link href={data.route} className='flex items-center gap-2'>
                                                        <span>{data.icon}</span>
                                                        <span className='text-sm'>{data.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <div className='select-none flex items-center justify-between cursor-pointer p-2 rounded-lg active:scale-95 hover:bg-primary/5 transition-all border border-transparent hover:border-border'>
                                        <div className='flex items-center gap-2'>
                                            <Avatar className='w-10 h-10'>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className='text-sm'>
                                                <div className='font-semibold text-primary mb-0.5'>Abel Tesfaye</div>
                                                <div className='text-primary/70'>@abeltesfaye</div>
                                            </div>
                                        </div>
                                        <DotsThreeVertical size={20} className='opacity-30' weight='bold' />
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
            <div className='flex-1 px-4 lg:px-0 lg:h-[100dvh] lg:overflow-auto'>
                {children}
            </div>
        </div>
    );
}