import React from 'react'

export default function BottomBar() {
  return (
    <section className=" block md:hidden text-white fixed bottom-0 w-full">
      <ul className="flex bg-[#3C3C3C]">
        <li className="flex-1 flex justify-center items-center min-h-24px bg-[#535353]"><img className=" w-8 pt-6 pb-6 " src="img/icons/home.png" alt="" /></li>
        <li className="flex-1 flex justify-center items-center min-h-24px "><img className=" w-8 pt-6 pb-6 " src="img/icons/trend.png" alt="" /></li>
        <li className="flex-1 flex justify-center items-center min-h-24px "><img className=" w-8 pt-6 pb-6 " src="img/icons/camera.png" alt="" /></li>
        <li className="flex-1 flex justify-center items-center min-h-24px "><img className=" w-8 pt-6 pb-6 " src="img/icons/movie.png" alt="" /></li>
      </ul>
    </section>
  )
}
