import React from 'react'

export default function Title({ title, bg, variant, leftFalse }) {
  return (
    <div className={`relative flex flex-col 
      items-center w-full justify-center ${variant || ''}`}
    >
      <div className={`z-10 h-32 flex items-center justify-center before:inline-block before:border-t before:my-1 before:mx-4
          before:w-6 before:border-primary 
        ${leftFalse ? 'md:before:content-none' : ""}
        after:inline-block  after:border-t after:my-1 after:w-6 
        after:border-primary after:mx-4
        text-primary text-2xl md:text-3xl font-bold
        font-serif `}
      >
        {title}
      </div>
      <div className={`absolute text-8xl md:text-8xl w-full text-center  
        ${leftFalse? "md:w-auto md:top-0 md:left-0 " : "" }
        text-primary opacity-10 font-bold
        font-['Oswald']`}
      >
        {bg}
      </div>
    </div>
  )
}
