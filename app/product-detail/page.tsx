"use client"
import ProductCard from '@/components/ProductCard'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr/BookmarkSimple'
import { ShareFat } from '@phosphor-icons/react/dist/ssr/ShareFat'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr/ThumbsUp'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import ProductReviews from './ProductReviews'
import { Article, ChatsCircle, Copy, Question } from '@phosphor-icons/react/dist/ssr'
import ProductQAs from './ProductQAs'
import ProductDetail from './ProductDetail'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share'
import {
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share'
import { useToast } from '@/components/ui/use-toast'
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

const ProductPage = () => {
    const router = useRouter()
    const { toast } = useToast()
    const { data: session } = useSession();
    const [upvotesNum, setUpvotesNum] = useState<number>(882);
    const [upvoted, setUpvoted] = useState<boolean>(false);
    const [bookmarked, setBookmarked] = useState(false);
    const tabsRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState('details');
    const handleTabClick = (id: string) => {
        setActiveTab(id);
        tabsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const handleThumbsUp = () => {
        if (!session) {
            router.push('/auth/login')
        }
        if (!upvoted) {
            setUpvotesNum((prev) => prev + 1);
            setUpvoted(true)
            toast({
                title: "Upvoted this product!",
                description: "Completed successfully.",
            })
            return;
        }
        // eğer upvoted ise düşecek
        toast({
            title: "Removed your upvote!",
            description: "Completed successfully.",
        })
        setUpvotesNum((prev) => prev - 1);
        setUpvoted(false)
    }
    const handleBookmark = () => {
        if (!session) {
            router.push('/auth/login')
        }
        if (!bookmarked) {
            setBookmarked(true)
            toast({
                title: 'Saved to bookmarks!',
                description: "Completed successfully.",
            })
            return;
        }
        toast({
            title: 'Removed from bookmarks!',
            description: "Completed successfully.",
        })
        setBookmarked(false);
    }

    return (
        <div className='pb-12 lg:px-12 lg:pt-0 pt-4 flex lg:flex-row flex-col items-start gap-2 lg:gap-9 max-w-[660px] mx-auto lg:max-w-full'>
            <ProductCard
                title="Noor - Chat for teams"
                description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
                owner="Noor Studio"
                src="/images/noor.png"
                link="https://noor.to"
                upvotesNum={upvotesNum}
                reviewsNum='1.2k'
                category='Productivity'
                className='hover:bg-background lg:sticky mt-12 top-12 lg:min-w-[300px] lg:max-w-[360px]'
            >
                <div className='border-t border-border pt-4 mt-4 flex gap-2'>
                    <button onClick={handleThumbsUp} className={`${upvoted ? 'bg-mainly/15 text-mainly' : 'bg-mainly/5 hover:bg-mainly/10 text-mainly'} flex-1  transition-all uppercase rounded-lg border border-mainly flex items-center gap-2 justify-center active:scale-95`}>
                        <span><ThumbsUp size={16} weight={upvoted ? 'bold' : 'regular'} /></span>
                        <span className='text-sm font-medium'>{upvoted ? 'upvoted' : 'upvote'}</span>
                    </button>
                    <button onClick={handleBookmark} className={`bg-secondary hover:bg-primary/10 w-8 h-8 rounded-lg border border-border  transition-all text-primary flex items-center justify-center active:scale-95`}>
                        <BookmarkSimple size={16} weight={bookmarked ? 'fill' : 'regular'} />
                    </button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className='w-8 h-8 rounded-lg border border-border bg-secondary hover:bg-primary/10 transition-all text-primary flex items-center justify-center active:scale-95'>
                                <ShareFat size={16} />
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Share the product with others</DialogTitle>
                            </DialogHeader>
                            <div>
                                <div className="flex items-center justify-center gap-4 mt-12">
                                    <TwitterShareButton
                                        url={'https://github.com/next-share'}
                                        title={'next-share is a social share buttons for your next React apps.'}
                                    >
                                        <TwitterIcon size={64} round />
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={'https://github.com/next-share'}>
                                        <LinkedinIcon size={64} round />
                                    </LinkedinShareButton>
                                </div>
                                <div className='text-center my-8 text-primary'>or copy link</div>
                                <div className='relative bg-secondary px-3 py-1.5 rounded-lg border'>
                                    <input className='outline-none w-full bg-transparent text-sm' value={'http://localhost:3000/product-detail'} readOnly />
                                    <button onClick={() => { navigator.clipboard.writeText("http://localhost:3000/product-detail") }} className='absolute top-1/2 -translate-y-1/2 right-2 bg-primary/10 p-1.5 rounded-md active:scale-95 transition-all'>
                                        <Copy size={16} />
                                    </button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </ProductCard>
            <div className='relative flex-1 flex flex-col gap-4 w-full'>
                <div className='absolute top-0' ref={tabsRef}></div>
                <div className='sticky top-0 pt-4 lg:pt-12 bg-background z-20 flex items-center gap-2 overflow-auto pb-3 border-b'>
                    {productDetailTabs.map((data, i) => (
                        <button key={data.id}
                            onClick={() => handleTabClick(data.id)}
                            className={`flex whitespace-nowrap items-center gap-2 px-3 py-1.5 transition-all rounded-lg border ${activeTab === data.id ? 'bg-primary border-primary text-secondary' : 'bg-secondary text-primary hover:bg-primary/10'}`}>
                            <span>{data.icon}</span>
                            <span className='text-sm'>{data.title}</span>
                        </button>
                    ))}
                </div>
                {activeTab === 'reviews' && <ProductReviews />}
                {activeTab === 'q_a' && <ProductQAs />}
                {activeTab === 'details' && <ProductDetail />}
            </div>
        </div>
    )
}

export default ProductPage