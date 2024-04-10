import { PencilSimpleLine } from '@phosphor-icons/react/dist/ssr/PencilSimpleLine'
import React from 'react'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
const BlogsPage = () => {
    return (
        <div className="py-20">
            <div className="flex items-center text-primary justify-between w-[660px] mx-auto mb-6">
                <h2 className="text-2xl font-semibold">Blogs</h2>
                <Link href='/blogs/create' className="px-2 py-1 rounded-lg border border-border bg-secondary hover:bg-primary/10 transition-all active:scale-95 inline-flex items-center gap-2">
                    <PencilSimpleLine size={16} />
                    <span>Write a blog</span>
                </Link>
            </div>
            <div className="flex items-start gap-6 w-fit mx-auto">
                <div className="flex flex-col gap-6">
                    <BlogCard
                        title="Blog posts by Ryan Mulligan"
                        description="Blogging my general thoughts and rambles, code snippets, and front-end web dev discoveries"
                        owner="@abeltesfaye"
                        src="/images/mulligan.png"
                    />
                    <BlogCard
                        title="rodz/input-otp"
                        description="One-time password input component for React. Accessible. Unstyled. Customizable. Open Source. Build your own OTP form effortlessly."
                        owner="@abeltesfaye"
                        src="/images/sodz.png"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <BlogCard
                        title="Aceternity UI"
                        description="Beautiful Tailwind CSS and Framer Motion Components, built with Next.js and TypeScript."
                        owner="@abeltesfaye"
                        src="/images/aceternity.png"
                    />
                    <BlogCard
                        title="Open Props: sub-atomic styles"
                        description="Open source CSS custom properties to help accelerate adaptive and consistent design. Available from a CDN or NPM, as CSS or Javascript."
                        owner="@abeltesfaye"
                        src="/images/open-props.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogsPage