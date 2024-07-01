import { CalendarDays, MapPin, School } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Formacao() {
  return (
    <section className="m-auto mb-20 lg:mt-40">
      <div className=" relative flex justify-center mt-16 ">
        <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Formação</span>
        <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Formação</h1>
      </div>

      <article className="fundoCards mt-10 m-auto sm:w-4/5 lg:w-[600px] p-4 md:p-6 rounded-3xl flex flex-col justify-around gap-5">
        <div className="flex justify-between">
          <p className="text-amber-400 font-semibold bg-zinc-900 px-3 md:px-4 py-2 flex items-center rounded-full gap-2 shadow-lg"><CalendarDays width={20}/> 2023 - 2024</p>
          <p className="text-black font-semibold flex items-center formacao px-2 md:px-4 rounded-full gap-2 shadow-lg "><Image src={"/images/education.png"} alt="figura de formatura" width={20} height={20}/>Técnico</p>
        </div>
        <h1 className="text-black font-bold text-2xl">Técnico em informática para internet</h1>

        <div className="flex gap-3 items-center">
          <div className="border-2 rounded-full">
            <Image src={"/images/school.png"} width={35} height={35} alt='figura de escola' className="text-amber-400 tag p-2 rounded-full shadow"/>
          </div>
          <p className="text-black font-semibold">Senac</p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="border-2 rounded-full"><Image src={"/images/gps.png"} alt='icone localização' width={35} height={35} className="text-amber-400 tag p-2 rounded-full shadow"/></div>
          <p className="text-black font-semibold">São Paulo - SP</p>
        </div>

      </article>

    </section> 

  )
}

