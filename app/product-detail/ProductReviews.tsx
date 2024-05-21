"use client"
import ProductReviewBlock from './ProductReviewBlock'
import InputBlock from '@/components/InputBlock'
import { useState } from 'react'

const ProductReviews = () => {
    const [thoughts, setThoughts] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    return (
        <div className='relative flex-1 flex flex-col gap-4 w-full'>
            <InputBlock
                value={thoughts}
                placeholder='Write your thoughts'
                onChange={(val) => setThoughts(val)}
                acceptImage
                onChangeImage={(val) => setSelectedImage(val)}
            />
            {
                Array(5).fill(null).map((_, i) => (
                    <ProductReviewBlock
                        key={i}
                        reviewData={{
                            username: 'john_doe',
                            name: 'Abel Tesfaye',
                            image:'/images/noor.png',
                            reivew_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }}
                    />
                ))
            }
        </div>
    )
}

export default ProductReviews