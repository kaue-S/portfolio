import Image from 'next/image'
import React from 'react'
import Botao from './ui/Botao'

export default function Inicio() {
  return (
    <section className="">
        <article className=" ">
            <div className="flex items-center justify-center lg:gap-3">
                <Image className="lg:w-16 lg:h-16" src={"/images/mao.png"} alt='icone de uma mão acenando' width={40} height={60}/>
                <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-bold">Olá, sou o <span className="text-amber-400 ">Kauê Evangelista</span></h1>
            </div>
            <h2 className="text-center xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-semibold">Desenvolvedor Web</h2>
        </article>
        <Botao />
    </section>
  )
}
