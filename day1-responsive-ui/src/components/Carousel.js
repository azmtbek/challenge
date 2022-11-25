import React from 'react'

const Item = ({ src }) => <div className='item w-screen flex-none relative flex justify-center'>
  <img src={process.env.PUBLIC_URL + src} alt="carusel item" />

</div>

export default function Carousel() {
  return (
    <div className="flex relative justify-center ">
      <div className='flex overflow-scroll'>
        <Item src="carusel.png" />
        <Item src="sm1.png" />
      </div>

      <div className='absolute bottom-8 px-5 py-3
        bg-secondary/80 rounded-full text-white 
        flex gap-3 font-sans font-thin'
      >
        <button> <img className='h-4' src={process.env.PUBLIC_URL + "left_arrow.png"} alt="left" /></button>
        <span> <strong className='font-normal'>1</strong> / 5</span>
        <button> <img className='h-4' src={process.env.PUBLIC_URL + "right_arrow.png"} alt="left" /></button>

      </div>
    </div>
  )
}
