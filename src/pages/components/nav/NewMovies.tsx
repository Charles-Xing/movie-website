import React from 'react'

export default function NewMovies() {
  return (
    <section className=" ml-8 overflow-hidden ">
      <h2 className=" text-white font-semibold ">New This Week</h2>
      <section className=" flex gap-6 text-white w-[230vw] md:w-[170vw] lg:w-[105vw] ">
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie1.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie2.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie3.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie4.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie5.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
        <section className=" w-1/6 ">
          <img className=" w-full " src="img/movie6.png" alt="" />
          <h2 className=" text-xs font-light mt-2 ">The Rings of Power</h2>
        </section>
      </section>
    </section>
  )
}
