import React from 'react'
import PersonIcon from '../svgs/PersonIcon.js'
import SearchIcon from '../svgs/SearchIcon.js'
import ShoppingCart from '../svgs/ShoppingCart.js'

const links = [
  { id: 0, name: 'Outer', },
  { id: 1, name: 'Top', },
  { id: 2, name: 'Skirt', },
  { id: 3, name: 'Pants', },
  { id: 4, name: 'Accessories', },

]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <header className="flex relative justify-between items-center px-4 h-16 md:px-16 lg:px-20 xl:px-32">
        <span className={
          isMenuOpen ?
            'absolute z-10 inset-0'
            :
            `hidden md:inline-block flex-1`
        }>
          <ul className='flex gap-2 lg:gap-6 font-sans font-light bg-white 
          md:flex-row md:w-auto
           flex-col w-screen h-screen justify-center items-center'>
            {links.map(link =>
              <li key={link.id} onClick={() => { isMenuOpen && setIsMenuOpen(prev => !prev) }}>{link.name}</li>
            )}
          </ul>
        </span>
        <span className="md:hidden flex-1 z-20" onClick={() => { setIsMenuOpen(prev => !prev) }}>
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
           px-5 py-2 border border-primary  gap-2 justify-center items-center whitespace-nowrap' >
            <PersonIcon />
            Sign in</button>
        </span>
      </header>
    </>
  )
}
