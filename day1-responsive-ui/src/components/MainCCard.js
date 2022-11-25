import React from 'react'

export default function MainCCard({ src, text }) {
  return (
    <div className="flex-none flex justify-center h-52 w-36 md:h-80 md:w-auto relative">
      <img src={process.env.PUBLIC_URL + src} alt="" />
      <span className="absolute bottom-2 text-white z-20">{text}</span>
      <span className="absolute bottom-0 bg-gradient-to-t from-primary opacity-50 z-10 to-transparent w-full h-24"></span>
    </div>
  )
}
