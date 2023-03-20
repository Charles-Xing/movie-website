import React from 'react'

export default function HeroBg() {
  return (
    <div>
      <img className=" w-full h-[65vh] object-cover " src="img/bg.png" loading="lazy" alt="" />
      <div className=" hidden md:block absolute top-0 left-0 bg-gradient-to-r from-black to-transparent w-[30%] h-full "></div>
      <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-[20%] "></div>
    </div> 
  )
}
