import React from 'react'
import Hero from "./Hero"
import NewMovies from "./NewMovies"
import Categories from "./Categories"

export default function MainSection() {
  return (
    <section className=" md:ml-[60px] bg-black">
      <Hero />
      <NewMovies />
      <Categories />
    </section>
  )
}
