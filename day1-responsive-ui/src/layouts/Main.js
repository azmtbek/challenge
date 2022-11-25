import React from 'react'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import BestSelling from './BestSelling'
import MainCategories from './MainCategories'
import Review from './Review'
import SocialMedia from './SocialMedia'

export default function Main() {
  return (
    <div>
      <Carousel />
      <Title title="Main Categories" bg='01' />
      <MainCategories />
      <Title title="Best Selling" bg='02' />
      <BestSelling />
      <Review />
      <Title title="Social Media" bg='04' />
      <SocialMedia />
    </div>
  )
}
