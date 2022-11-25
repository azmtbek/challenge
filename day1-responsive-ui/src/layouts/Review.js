import React from 'react'
import ReviewCard from '../components/ReviewCard'
import Title from '../components/Title'

export default function Review() {
  return (
    <div className='md:my-24 md:px-32 md:flex md:justify-between'>
      <Title title="Reviews" bg='03' variant="md:w-60" leftFalse />
      <div className='sm:grid sm:gap-2 md:grid-cols-2 lg:grid-cols-4' >
      <ReviewCard src="review1.png" percent={95} />
      <ReviewCard src="review2.png" percent={95} />
      <ReviewCard src="review3.png" percent={95} />
      <ReviewCard variant="hidden md:inline-block" src="review4.png" percent={95} />
      </div>
    </div>
  )
}
