import { LinkSimpleHorizontal } from '@phosphor-icons/react/dist/ssr/LinkSimpleHorizontal'
import { Star } from '@phosphor-icons/react/dist/ssr/Star'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Props {
    src: string;
    reviewsNum?: string;
    category?: string;
    description?: string;
    upvotesNum?: string;
    owner: string;
    title: string;
    link: string;
    children?:React.ReactNode;
    className?:string;
}

const ProductCard = (props: Props) => {
    const { src, title, link, reviewsNum, category, description, upvotesNum, owner , children, className} = props;
    return (
        <div className={'w-[318px] p-4 card-shadow rounded-xl bg-background hover:bg-secondary/50 transition-all '+className}>
            <div className="w-full h-[150px] mb-4">
                <Image width={0} height={0} loading='lazy' className="w-full h-full object-cover rounded-lg border border-border" sizes="100vw" src={src} alt="Product Image" />
            </div>
            <div className="flex flex-col gap-1 mt-4 text-primary">
                <Link href={''} className="text-xs leading-tight hover:underline cursor-pointer">{owner}</Link>
                <Link href='/product-detail' className="text-lg font-semibold hover:underline cursor-pointer">{title}</Link>
                <Link href={link} target='_blank' className="group flex items-center gap-1 cursor-pointer opacity-80">
                    <LinkSimpleHorizontal size={14} />
                    <span className="group-hover:underline text-sm font-light leading-tight w-fit">{link.replace(/^http(s?):\/\//i, "")}</span>
                </Link>
                <p className="text-sm leading-normal">{description}</p>
                <div className="flex items-center gap-2 flex-wrap mt-1">
                    <div className="px-1 py-0.5 h-6 rounded-md flex items-center gap-1 bg-mainly/5 text-mainly border-[0.5px] border-mainly">
                        <Star size={14} weight="fill" />
                        <span className="text-xs leading-none">{upvotesNum ?? 0}</span>
                    </div>
                    {!!category && <div className="px-1 py-0.5 h-6 rounded-md flex items-center gap-1 bg-pinky/5 text-pinky border-[0.5px] border-pinky">
                        <span className="text-xs leading-none">{category}</span>
                    </div>}
                    <div className="px-1 py-0.5 h-6 rounded-md flex items-center gap-1 bg-secondary text-primary border-[0.5px] border-primary/10">
                        <span className="text-xs leading-none">{reviewsNum} reviews</span>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default ProductCard