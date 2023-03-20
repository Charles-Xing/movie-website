import React from 'react'
import Items from './Items'

export default function Nav() {
  return (
    <div>
      <nav className=" bg-[#101010] text-white fixed hidden md:w-[60px] h-[100vh] md:flex flex-col items-center justify-between ">
        <div className=" flex flex-col justify-center ">
          <img className="w-8 mt-2" src="img/menu.png" alt="" />               
          <Items />
        </div>
        <div className=" flex flex-col gap-4 mb-4 ">
          <div className=" rounded-full bg-gray-300 w-6 h-6 "></div>
          <img className="w-6" src="img/icons/gear.png" alt="#" />
        </div>
      </nav>
    </div>
  )
}