import React from 'react'
import BestSellingCard from '../components/BestSellingCard'
import Title from '../components/Title'

export default function BestSelling() {
  return (
    <>
      <Title title="Best Selling" bg='02'  variant="md:mt-12 md:mb-6"/>
      <div className="md:grid md:grid-cols-4 md:gap-1 md:mx-32">
        <BestSellingCard src="bestS1.png"
          variant="md:col-span-2 md:row-span-2"
          number={1}
        />
        <BestSellingCard src="bestS4.png"
          variant="hidden md:block md:col-span-2"
          number={2}
        />
        <BestSellingCard src="bestS2.png" number={3} />
        <BestSellingCard src="bestS3.png" number={4} />
      </div>
    </>
  )
}
