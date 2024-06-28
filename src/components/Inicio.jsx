import Image from 'next/image'
import React from 'react'
import { Download } from 'lucide-react'
import { stackDados } from '@/api/stacks'

export default function Inicio() {
  const primeirosQuatros = stackDados.slice(0, 4);
  const ultimosQuatros = stackDados.slice(4, 8);

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
            <button className='flex gap-2 items-center font-semibold text-amber-400 p-3 rounded-full border-2 border-amber-400 hover:text-black bg-amber-400 bg-opacity-30 hover:bg-amber-400 hover:transition-colors'>
              <Download /> Currículo
            </button>
          </a>

          <a href="">
            <button className='flex gap-2 items-center font-bold text-black p-3 px-5 rounded-full border-2 border-amber-400 bg-amber-400'>
              Sobre Mim
            </button>
          </a>
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

      {/* <div className="flex justify-center items-center gap-6">

      <div className='flex justify-between flex-col gap-7'>
        {primeirosQuatros.map((item, index) =>(
          <div key={index} className='flex bg-white text-black items-center gap-1 font-semibold p-3 rounded-full'>
            <Image src={item.icone} alt={`icone do ${item.icone}`} width={25} height={25}/>
            <p>{item.nome}</p>
          </div>
        ))}

      </div>

      <figure className="w-1/5 h-2/5 ">
        <Image className="" src={"/images/foto.jpeg"} alt="foto do de perfil do" width={1156} height={1599} priority/>
      </figure>

      <div>
        {ultimosQuatros.map((item, index) =>(
          <div key={item} className='flex bg-white text-black items-center gap-1 font-semibold p-3 rounded-full'>
            <Image src={item.icone} alt={`icone do ${item.icone}`} width={25} height={25}/>
            <p>{item.nome}</p>
          </div>
        ))}
      </div>
      </div> */}


    </section>
  )
}
