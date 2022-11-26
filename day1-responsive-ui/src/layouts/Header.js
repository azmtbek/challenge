import React from 'react'
import PersonIcon from '../svgs/PersonIcon.js'
import SearchIcon from '../svgs/SearchIcon.js'
import ShoppingCart from '../svgs/ShoppingCart.js'


export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-4 h-16 md:px-16 lg:px-20 xl:px-32">
        <span className='hidden md:inline-block flex-1'>
          <ul className='flex gap-6 font-sans font-light '>
            <li>Outer</li>
            <li>Top</li>
            <li>Skirt</li>
            <li>Pants</li>
            <li>Accessories</li>

          </ul>
        </span>
        <span className="md:hidden flex-1">
          <img src={process.env.PUBLIC_URL + "icon_menu.png"} alt="" />
        </span>
        <span className="flex-1 md:flex-initial lg:flex-1 text-center text-2xl font-semibold">LOGO</span>
        <span className="flex-1 shop flex justify-end lg:justify-around  items-center gap-2">
          <div className="relative hidden lg:inline-block">
            <div className="absolute pointer-events-auto right-8 top-2 ">
              <SearchIcon variant="absolute bg-gray-100  text-black h-6 w-6" />
            </div>
            <input type="text" className='caret-primary border
          px-4 py-2 rounded-full border-gray-300 bg-gray-100 appearance-none'
              placeholder='Search' name="search" id="search" />
          </div>

          <ShoppingCart />
          <button className='rounded-full bg-primary text-white hidden lg:flex
           px-5 py-2 border border-primary  gap-2 justify-center items-center' >
            <PersonIcon />
            Sign in</button>
        </span>
      </header>
    </>
  )
}
