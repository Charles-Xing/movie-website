import React from 'react'

export default function Categories() {
  return (
    <section className=" mt-10 ml-8 overflow-hidden ">
      <h2 className=" text-white font-semibold ">Categories</h2>
      <section className=" flex gap-6 text-white w-[230vw] md:w-[170vw] lg:w-[105vw] ">
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie7.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">Action</div>
        </section>
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie8.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">Drama</div>
        </section>
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie9.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">SciFi</div>
        </section>
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie10.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">Horror</div>
        </section>
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie11.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">Animation</div>
        </section>
        <section className=" relative w-1/6 ">
          <img className=" w-full " src="img/movie12.png" alt="" />
          <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-2xl font-light text-center m-auto pt-12 ">Serial</div>
        </section>
      </section>
    </section>
  )
}
