import React from 'react'

const Number = ({ text }) => <div className='relative flex justify-center items-center font-mono text-3xl'>
  <div className="absolute text-white z-10">
    {text}
  </div>
  <div className={String.raw`absolute [-webkit-text-stroke:6px_#00000010]`}  >
    {text}
  </div>
</div>


export default function BestSellingCard({ src, variant, number }) {
  return (
    <div className={`w-full relative ${variant}`}>
      <img className='w-full' src={process.env.PUBLIC_URL + src} alt="" />
      <span className='absolute top-6 left-4 hidden md:inline-block'>
        <Number text={number} />
      </span>
    </div>
  )
}
