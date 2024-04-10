"use client"
import ProductCard from '@/components/ProductCard'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Article } from '@phosphor-icons/react/dist/ssr/Article'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { ChatsCircle } from '@phosphor-icons/react/dist/ssr/ChatsCircle'
import { Image as ImageIcon } from '@phosphor-icons/react/dist/ssr/Image'
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr/PaperPlaneTilt'
import { Question } from '@phosphor-icons/react/dist/ssr/Question'
import { ShareFat } from '@phosphor-icons/react/dist/ssr/ShareFat'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr/ThumbsUp'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useRef, useState } from 'react'

const productDetailTabs = [
    {
        id: 'details',
        title: 'Details',
        icon: <Article size={16} />,
    },
    {
        id: 'reviews',
        title: 'Reviews',
        icon: <ChatsCircle size={16} />,
    },
    {
        id: 'q_a',
        title: 'Question & Answer',
        icon: <Question size={16} />,
    },
];

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('details');
    const [thoughts, setThoughts] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const result = reader.result as string;
                setSelectedImage(result);
            };

            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='pb-12 px-12 flex items-start gap-9'>
            <ProductCard
                title="Noor - Chat for teams"
                description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
                owner="Noor Studio"
                src="/images/noor.png"
                link="https://noor.to"
                upvotesNum='882'
                reviewsNum='1.2k'
                category='Productivity'
                className='hover:bg-background sticky top-12'
            >
                <div className='border-t border-border pt-4 mt-4 flex gap-2'>
                    <button className='flex-1 bg-mainly/5 text-mainly hover:bg-mainly/10 transition-all uppercase rounded-lg border border-mainly flex items-center gap-2 justify-center active:scale-95'>
                        <span><ThumbsUp size={16} /></span>
                        <span className='text-sm font-medium'>upvote</span>
                    </button>
                    <button className='w-8 h-8 rounded-lg border border-border bg-secondary hover:bg-primary/10 transition-all text-primary flex items-center justify-center active:scale-95'>
                        <BookmarkSimple size={16} />
                    </button>
                    <button className='w-8 h-8 rounded-lg border border-border bg-secondary hover:bg-primary/10 transition-all text-primary flex items-center justify-center active:scale-95'>
                        <ShareFat size={16} />
                    </button>
                </div>
            </ProductCard>
            <div className='flex-1 flex flex-col gap-4'>
                <div className='sticky top-0 pt-12 bg-background z-20 flex items-center gap-2 overflow-auto pb-3 border-b'>
                    {productDetailTabs.map((data, i) => (
                        <button key={data.id}
                            onClick={() => setActiveTab(data.id)}
                            className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded-lg border ${activeTab === data.id ? 'bg-primary border-primary text-secondary' : 'bg-secondary text-primary hover:bg-primary/10'}`}>
                            <span>{data.icon}</span>
                            <span className='text-sm'>{data.title}</span>
                        </button>
                    ))}
                </div>
                <div className='pb-4 border-b flex items-start gap-3'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex-1 flex flex-col gap-3'>
                        <textarea maxLength={500} value={thoughts} onChange={(e) => setThoughts(e.target.value)} placeholder='Write your thoughts' rows={3} className='w-full outline-none text-primary placeholder:text-primary/50 resize-none pr-1'></textarea>
                        {selectedImage && <div className='group relative mt-1 w-[150px] h-[80px] border rounded-lg cursor-pointer active:scale-100 transition-all'>
                            <button onClick={()=>setSelectedImage('')} className='opacity-0 group-hover:opacity-100 absolute top-2 right-2 w-6 h-6 bg-white/75 text-black/75 rounded-full flex items-center justify-center transition-all'>
                                <X size={14} weight='bold'/>
                            </button>
                            <Image width={0} height={0} loading='lazy' className="w-full h-full object-cover rounded-lg border border-border" sizes="100vw" src={selectedImage} alt="Product Image" />
                        </div>}
                        <div className='h-[1px] w-full bg-border'></div>
                        <div className='flex items-center justify-between gap-3'>
                            <div className='flex-1'>
                                {!selectedImage && <>
                                    <input
                                        className='hidden'
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                    />
                                    <button onClick={() => fileInputRef.current?.click()} className='inline-flex gap-1 items-center justify-center bg-secondary border border-border rounded-lg text-primary h-8 w-8 hover:bg-primary/10 active:scale-95 transition-all'>
                                        <ImageIcon size={18} />
                                    </button>
                                </>}
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-pinky/5 text-pinky'>
                                    <span className={`${thoughts.length > 100 ? 'block opacity-100' : 'hidden opacity-0'} transition-all text-sm`}>{thoughts.length > 100 && thoughts.length}</span>
                                </div>
                                <button disabled={!thoughts.trim()} className='disabled:opacity-50 disabled:pointer-events-none inline-flex gap-1 items-center bg-mainly/5 border border-mainly rounded-xl text-mainly px-2 py-1 h-8 hover:bg-mainly/10 active:scale-95 transition-all'>
                                    <PaperPlaneTilt size={16} />
                                    <span className='text-sm leading-none'>Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    Array(5).fill(null).map((_, i) => (
                        <div key={i} className='flex items-start gap-3'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='text-primary'>
                                <div className=' text-sm font-medium mb-1'>Abel Tesfaye <Link href='#' className='font-light hover:underline'>@abeltesfaye</Link></div>
                                <div className='text-xs font-light mb-2'>{new Date().toLocaleString()}</div>
                                <p className='text-sm mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className='w-[150px] h-[80px] border rounded-lg cursor-pointer active:scale-100 transition-all shadow-sm hover:scale-105'>
                                            <Image width={0} height={0} loading='lazy' className="w-full h-full object-cover rounded-lg border border-border" sizes="100vw" src='/images/noor.png' alt="Product Image" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px]">
                                        <DialogHeader>
                                            <DialogTitle>Review by @abeltesfaye</DialogTitle>
                                        </DialogHeader>
                                        <AspectRatio ratio={150 / 80} className="bg-muted">
                                            <Image width={0} height={0} loading='lazy' className="w-full h-full object-cover rounded-lg border border-border" sizes="100vw" src='/images/noor.png' alt="Product Image" />
                                        </AspectRatio>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductDetail