import React from 'react'

const Star = ()=> <div className="md:w-10 w-6 ">
<img src={process.env.PUBLIC_URL + "star.png"} alt="" />
</div>


export default function ReviewCard({src, percent,variant}) {
  return (
    <div className={`flex justify-center flex-col w-full ${variant}`}>
      <div className='b-black'>
      <img  className='object-cover w-full h-80 sm:h-full' src={process.env.PUBLIC_URL + src} alt="" />
      </div>
      <span className="flex w-full justify-center items-center my-3 gap-1">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <span className="p-2">{percent}%</span>
      </span>
    </div>
  )
}
