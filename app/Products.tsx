import ProductCard from '@/components/ProductCard'
import React from 'react'

const Products = async () => {
    // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products');
    // const products = await res.json();
    return (
        <div className="flex sm:flex-row flex-col items-start  gap-4 lg:gap-6 w-fit mx-auto">
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 w-full">
                {/* {products.slice(0, Math.floor(products.length / 2)).map((product, i) => (
                    <ProductCard
                        key={i}
                        title="Noor - Chat for teams"
                        description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
                        owner="Noor Studio"
                        src="/images/noor.png"
                        link="https://noor.to"
                        upvotesNum='882'
                        reviewsNum='1.2k'
                    />
                ))} */}
                <ProductCard
                    title="Noor - Chat for teams"
                    description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
                    owner="Noor Studio"
                    src="/images/noor.png"
                    link="https://noor.to"
                    upvotesNum={882}
                    reviewsNum='1.2k'
                />
                <ProductCard
                    title="Minimal Theme for Twitter"
                    description="Chrome, Safari, and Firefox extension to make Twitter more minimal."
                    owner="Noor Studio"
                    src="/images/typefully.png"
                    link="https://typefully.com"
                    upvotesNum={558}
                    reviewsNum='567'
                />
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 w-full">
                <ProductCard
                    title="Harmony - A different kind of color picker"
                    description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
                    owner="Harmony Studio"
                    src="/images/harmony.png"
                    link="https://harmony.sh"
                    upvotesNum={765}
                    reviewsNum='250'
                    category="Productivity"
                />
                <ProductCard
                    title="A list of macOS defaults commands with demos ✨"
                    description="You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help."
                    owner="MacOS Studio"
                    src="/images/macos.png"
                    link="https://macos-defaults.com"
                    upvotesNum={882}
                    reviewsNum='1.2k'
                />
            </div>
        </div>
    )
}

export default Products