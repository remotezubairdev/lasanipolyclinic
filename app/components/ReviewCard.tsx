import React from 'react'
import { FaStar } from 'react-icons/fa'
import { ReviewCardProps } from '../props/ReviewCardProps'

const ReviewCard = ({ name, rating, remarks } : ReviewCardProps) => {
    const stars: any[] = [];
    let id = 0;
    const renderStars = () => {
    for (let i = 0; i < rating; i++) {
        stars.push({
            id: id++,
            i,
        })
    }

    return stars;
  }
  return (
    <div className='w-fit shadow-sm bg-gray-100 p-4 rounded-xl'>
        <div className='flex items-center gap-3'>
            <h3 className='font-semibold'>
                {name}
            </h3>
            <div className='flex items-center gap-1'>
                {renderStars().map(star => (
                    <FaStar key={star.id} color='orange' />
                ))}
            </div>
        </div>
        <p>
            {remarks}
        </p>
    </div>
  )
}

export default ReviewCard