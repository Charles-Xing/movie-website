import React from 'react'
import HeroInfo from "./HeroInfo"
import HeroBg from "./HeroBg"

export default function Hero() {
  return (
    <section className=" h-[65vh] w-full relative">
      <HeroBg />
      <HeroInfo />
    </section>
  )
}