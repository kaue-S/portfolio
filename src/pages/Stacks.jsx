import Image from 'next/image'
import React from 'react'
import { stackDados } from '@/api/stacks'

export default function Stacks() {
  return (
    <section className="mt-20 mb-10 lg:mt-40 ">
         <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Skills</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Skills</h1>
        </div>

        <article className="mt-10 sm:w-4/5 m-auto">
            <article className="flex flex-wrap justify-center gap-2">
              
                {stackDados.map((item, index) =>(
                <div className="bg-white text-black flex items-center gap-2 font-semibold p-2 px-3 rounded-full" key={index}>
                    <Image src={item.icone} alt={`icone do ${item.nome}`} width={25} height={25}/>
                    <p>
                    {item.nome}
                    </p>
                </div>
                ))}
            </article>
        </article>
    </section>
  )
}
