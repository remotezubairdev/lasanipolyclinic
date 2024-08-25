import React from 'react'
import ReviewCard from './ReviewCard'
import { reviews } from '../constants'

const Reviews = () => {
  return (
    <div className='flex flex-row flex-wrap items-center mt-20'>
      <h2 className='font-semibold text-2xl p-3 me-16'>Our Reviews</h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 p-2'>
        {
          reviews.map(review => (
            <ReviewCard key={review.name} name={review.name} rating={review.rating} remarks={review.remarks} />
          ))
        }
      </div>
    </div>
  )
}

export default Reviews