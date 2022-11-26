import React from 'react'
import Carousel from '../components/Carousel'
import BestSelling from './BestSelling'
import MainCategories from './MainCategories'
import Review from './Review'
import SocialMedia from './SocialMedia'

export default function Main() {
  return (
    <>
      <Carousel />
      <MainCategories />
      <BestSelling />
      <Review />
      <SocialMedia />
    </>
  )
}
