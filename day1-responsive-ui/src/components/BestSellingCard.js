import React from 'react'

const MySvg = ({ text }) => <svg  width="9" height="22" viewBox="0 0 450 70">
  <text className="svgStroke" x="10" y="45">{text}</text>
  <text className="svgText" x="10" y="45">{text}</text>
</svg>


export default function BestSellingCard({ src, variant }) {
  return (
    <div className={`w-full relative ${variant}`}>
      <img className='w-full' src={process.env.PUBLIC_URL + src} alt="" />
      <span className='absolute top-2 left-2'>
        <img className='drop-shadow-lg m-2' src={process.env.PUBLIC_URL + '1.svg'} alt="" />
        <span className='text-4xl text-white ' style={
          {
            '-webkit-text-stroke': '6px',
            'text-stroke': '6px',
            '-webkit-text-fill-color': 'transparent',
          }
        }>1</span>
        <MySvg text='1' />
      </span>
    </div>
  )
}
