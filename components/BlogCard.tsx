import { LinkSimpleHorizontal } from '@phosphor-icons/react/dist/ssr/LinkSimpleHorizontal'
import { Star } from '@phosphor-icons/react/dist/ssr/Star'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {
    src: string;
    description?: string;
    owner: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

const ProductCard = (props: Props) => {
    const { src, title, description, owner, children, className } = props;
    return (
        <div className={'w-[318px] p-4 card-shadow rounded-xl bg-background hover:bg-secondary/50 transition-all ' + className}>
            <div className="w-full h-[150px] mb-4">
                <Image width={0} height={0} loading='lazy' className="w-full h-full object-cover rounded-lg border border-border" sizes="100vw" src={src} alt="Product Image" />
            </div>
            <div className="flex flex-col gap-1 mt-4 text-primary">
                <Link href={''} className="text-sm flex items-center gap-2 leading-tight hover:underline cursor-pointer">
                    <Avatar className='w-4 h-4'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='leading-none'>{owner}</span>
                </Link>
                <Link href='/blogs/detail' className="text-lg font-semibold hover:underline cursor-pointer">{title}</Link>
                <p className="text-sm leading-normal">{description}</p>
            </div>
            {children}
        </div>
    )
}

export default ProductCard