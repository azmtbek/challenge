import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div className="menu">
        <img src={process.env.PUBLIC_URL + "icon_menu.png"} alt="" />
      </div>
      <div className="logo">LOGO</div>
      <div className="shop">
      <img src={process.env.PUBLIC_URL + "shop_cart.png"} alt="" />
      </div>
    </header>
  )
}
