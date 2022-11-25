import React from 'react'
import BestSellingCard from '../components/BestSellingCard'

export default function BestSelling() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-1 md:px-32">
    <BestSellingCard src="bestS1.png"   variant="md:col-span-2 md:row-span-2" />
    <BestSellingCard  src="bestS4.png" variant="hidden md:block md:col-span-2" />
    <BestSellingCard  src="bestS2.png"  />
    <BestSellingCard   src="bestS3.png" />
    </div>
  )
}
