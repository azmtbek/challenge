import React from 'react'

export default function SocialMediaCard({ src, variant, cover }) {
  return (
    <div className={`relative ${variant} `}>
      <img className='object-cover w-full' src={process.env.PUBLIC_URL + src} alt="" />
      {cover &&
        <div className='absolute inset-0 flex
          justify-center items-center bg-primary/90 text-white'
        >{cover}
        </div>
      }
    </div>
  )
}
