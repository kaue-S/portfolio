import Image from 'next/image'
import React from 'react'
import { Download } from 'lucide-react'
import { stackDados } from '@/api/stacks'

export default function Inicio() {

  return (
    <section className="">

      <article  className="flex flex-col-reverse md:flex-row justify-center items-center gap-7 md:gap-20 md:h-80">
            <div className="flex flex-col items-center justify-center lg:gap-3">

                <Image className="lg:w-16 lg:h-16" src={"/images/mao.png"} alt='icone de uma mão acenando' width={40} height={60}/>

                <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-center ">Olá, sou o <span className="text-amber-400 ">Kauê Evangelista</span></h1>

                <h2 className="text-center xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-semibold">Desenvolvedor Web</h2>

              <a className='mt-4' href="/images/curriculo.pdf" download>
                <button className='flex gap-2 items-center font-semibold text-amber-400 p-3 rounded-full border-2 border-amber-400 hover:text-black bg-amber-400 bg-opacity-30 hover:bg-amber-400 hover:transition-colors'>
                <Download /> Currículo
                </button>
              </a>

            </div>

            <div className="border-4 animate-fade-down border-amber-400 rounded-full p-1">
              <figure className="w-40 h-40 md- xl:w-52 xl:h-52 rounded-full overflow-hidden">
                <Image className='' src={"/images/foto.jpeg"} alt='minha foto' width={1186} height={1599} priority/>
              </figure>
            </div>
      </article>

      <article className=" mt-10 flex justify-center gap-5">
        <h1 className="text-2xl font-bold">Sobre Mim</h1>
      </article>

      <article className="flex flex-wrap justify-center gap-6">

        {stackDados.map((item, index) =>(
          <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full" key={index}>
            <Image src={item.icone} alt={`icone do ${item.nome}`} width={25} height={25}/>
            <p>
              {item.nome}
            </p>
          </div>
        ))}
      </article>
    </section>
  )
}
