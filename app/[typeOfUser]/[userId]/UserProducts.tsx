import ProductBookmarkBlock from '@/app/product-detail/ProductBookmarkBlock'
import ProductMerhantBlock from '@/app/product-detail/ProductMerhantBlock'
import React from 'react'

const UserProducts = () => {
  return (
    <div className='flex flex-col gap-8'>
      <ProductMerhantBlock
        merchant='john_doe'
        image='/images/typefully.png'
        title='Noor - Chat for teams'
        link=''
        short_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        long_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        category={{
          value: 'workproductivity',
        }}
        upvotesNum={882}
        reviewsNum={100}

      />
      <ProductMerhantBlock
        merchant='john_doe'
        image='/images/typefully.png'
        title='Noor - Chat for teams'
        link=''
        short_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        long_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        category={{
          value: 'workproductivity',
        }}
        upvotesNum={882}
        reviewsNum={100}

      />
      <ProductMerhantBlock
        merchant='john_doe'
        image='/images/typefully.png'
        title='Noor - Chat for teams'
        link=''
        short_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        long_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        category={{
          value: 'workproductivity',
        }}
        upvotesNum={882}
        reviewsNum={100}

      />
      <ProductMerhantBlock
        merchant='john_doe'
        image='/images/typefully.png'
        title='Noor - Chat for teams'
        link=''
        short_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        long_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?'
        category={{
          value: 'workproductivity',
        }}
        upvotesNum={882}
        reviewsNum={100}

      />
    </div>
  )
}

export default UserProducts