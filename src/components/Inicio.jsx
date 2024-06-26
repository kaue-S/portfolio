import Image from 'next/image'
import React from 'react'

export default function Inicio() {
  return (
    <section className="">
        <article className="flex items-center justify-center lg:gap-3">
            <Image className="lg:w-16 lg:h-16" src={"/images/mao.png"} alt='icone de uma mão acenando' width={40} height={60}/>
            <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl whitespace-nowrap font-bold">Olá, sou o <span className="text-amber-400 ">Kauê Evangelista</span> </h1>
        </article>
    </section>
  )
}
