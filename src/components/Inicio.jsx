import Image from 'next/image'
import React from 'react'
import Botao from './ui/Botao'
import { Download } from 'lucide-react'

export default function Inicio() {
  return (
    <section className="">

        <article className="">
            <div className="flex items-center justify-center lg:gap-3">
                <Image className="lg:w-16 lg:h-16 max-[402px]:ml-2" src={"/images/mao.png"} alt='icone de uma mão acenando' width={40} height={60}/>
                <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-center max-[402px]:pr-8">Olá, sou o <span className="text-amber-400 ">Kauê Evangelista</span></h1>
            </div>
            <h2 className="text-center xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-semibold">Desenvolvedor Web</h2>
        </article>

        <article className=" mt-10 flex justify-center gap-5">
          <a href="/images/curriculo.pdf" download>
            <button className='flex gap-2 items-center font-bold text-amber-400 p-3 rounded-full border-2 border-amber-400 hover:text-black bg-amber-400 bg-opacity-30 hover:bg-amber-400 hover:transition-colors'>
              <Download /> Currículo
            </button>
          </a>

          <a href="">
            <button className='flex gap-2 items-center font-bold text-black p-3 px-5 rounded-full border-2 border-amber-400 bg-amber-400'>
              Sobre Mim
            </button>
          </a>
        </article>

    </section>
  )
}
