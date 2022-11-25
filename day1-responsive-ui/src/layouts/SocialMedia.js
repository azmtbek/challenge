import React from 'react'
import SocialMediaCard from '../components/SocialMediaCard'

export default function SocialMedia() {
  return (
    <div className='py-12 md:px-32 md:grid md:grid-cols-5 md:place-content-stretch md:gap-2'>
      <SocialMediaCard src="sm1.png" />
      <SocialMediaCard src="sm2.png" />
      <SocialMediaCard src="sm3.png" />
      <SocialMediaCard src="sm4.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm5.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm6.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm7.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm8.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm9.png" variant="hidden md:inline-block" />
      <SocialMediaCard src="sm3.png" variant="hidden md:inline-block" cover="@instagramid" />
    </div>
  )
}
