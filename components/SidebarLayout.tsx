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
        <div className='flex'>
            <div className='w-[288px] h-[100dvh] bg-primary-foreground border-r border-border px-3 py-6 flex flex-col justify-between'>
                <nav className='flex flex-col gap-6 flex-1 overflow-auto'>
                    <Link href='/' className='cursor-pointer ml-1'>
                        <ProductBaseLogo/>
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
            <div className='flex-1 h-[100dvh] overflow-auto'>
                {children}
            </div>
        </div>
    );
}