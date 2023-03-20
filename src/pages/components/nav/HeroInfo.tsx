import React from 'react'

export default function HeroInfo() {
  return (
    <section className=" absolute left-0 bottom-10 md:bottom-56 lg:bottom-0 ml-8 mb-8 text-white w-[86vw] md:w-[88vw] lg:w-[28vw] ">
        <h1 className=" text-4xl ">Peaky Blinders</h1>
        <p className=" mt-6 text-sm text-gray-200 font-light ">Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
        <section className=" mt-4 text-sm text-gray-200 font-semibold flex flex-col gap-2 ">
          <div>
            <img className=" inline-block mr-2 " src="img/imdb.png" alt="" />
            <span>8.8/10</span>   
          </div>
          <div>
            <span className=" text-red-500 inline-block mr-2 ">2B+</span>
            <span>Streams</span> 
          </div>
        </section>
        <section className=" flex flex-col md:flex-row gap-4 mt-6 ">
          <button className=" bg-red-600 pt-1 pb-2 px-12 "> Play </button>
          <button className=" bg-gray-200 pt-1 pb-2 px-3 text-black "> Watch Trailer </button>
        </section>
      </section>
  )
}




