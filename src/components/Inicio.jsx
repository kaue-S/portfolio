import Image from 'next/image'
import React from 'react'
import { Download } from 'lucide-react'


export default function Inicio() {

  return (
    <section className="mb-10 lg:mt-64">

      <article  className="flex flex-col-reverse md:flex-row justify-center items-center gap-7 md:gap-20">
            <div className="flex flex-col items-center justify-center lg:gap-3">
              <Image className="lg:w-16 lg:h-16" src={"/images/mao.png"} alt='icone de uma mão acenando' width={40} height={60}/>
              <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-center ">Olá, sou o <span className="text-amber-400 ">Kauê Evangelista</span></h1>
              <h2 className="text-center xl:text-4xl lg:text-3xl sm:text-2xl text-lg font-semibold">Desenvolvedor Web</h2>
              <div className="flex gap-5 mt-5 flex-wrap justify-center">
                <a className="bg-white text-black flex items-center gap-1 font-semibold p-2 px-3 rounded-full shadow-sm" href={"https://github.com/kaue-S"} target='blank'>
                    <Image src={"/images/github.png"} alt={"Figura do github"} width={25} height={25}/>
                    <p>GitHub</p>
                </a>
                <a className="bg-white text-black flex items-center gap-1 font-semibold p-2 px-3 rounded-full" href={"https://www.linkedin.com/in/kau%C3%AA-evangelista/"} target='blank'>
                    <Image src={"/images/linkedin.png"} alt={"Icone do Linkedin"} width={25} height={25}/>
                    <p>LinkedIn</p>
                </a>
                <a className="bg-white text-black flex items-center gap-1 font-semibold p-2 px-3 rounded-full" href={"https://www.instagram.com/kauesilva5/"} target='blank'>
                    <Image src={"/images/instagram.png"} alt={"logotipo do instagram"} width={25} height={25}/>
                    <p>Instagram</p>
                </a>
              </div>

              <a className='mt-10 animate-bounce' href="/images/curriculo.pdf" download>
                <button className='flex gap-2 items-center font-semibold text-amber-400 p-3 rounded-full border-2 border-amber-400 hover:text-black bg-amber-400 bg-opacity-30 hover:bg-amber-400 hover:transition-colors'>
                <Download /> Baixar CV
                </button>
              </a>
            </div>

            <div className="border-4 animate-fade-down border-amber-400 rounded-full p-1 md:mb-28">
              <figure className="w-40 h-40 md- lg:w-52 lg:h-52 rounded-full overflow-hidden">
                <Image className='' src={"/images/foto.jpeg"} alt='minha foto' width={1186} height={1599} priority/>
              </figure>
            </div>
      </article>
     
    </section>
  )
}
