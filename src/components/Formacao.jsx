import { CalendarDays, MapPin, School } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Formacao() {
  return (
    <section className="m-auto mb-20 lg:mt-40">
      <div className=" relative flex justify-center mt-16 ">
        <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-3xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Formação</span>
        <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-3xl font-bold text-amber-400 tracking-wide">Formação</h1>
      </div>

      <article className=" bg-slate-50 mt-10 m-auto sm:w-4/5 lg:w-[600px] p-4 md:p-6 rounded-3xl flex flex-col justify-around ">
        <div className="flex justify-between">
          <p className="text-amber-400 font-semibold bg-zinc-900 px-3 md:px-4 py-2 flex items-center rounded-full gap-2 shadow-lg"><CalendarDays width={20}/> 2023 - 2024</p>
          <p className="text-black bg-amber-200 font-semibold flex items-center px-2 md:px-4 rounded-full gap-2 shadow-lg "><Image src={"/images/education.png"} alt="figura de formatura" width={20} height={20}/>Técnico</p>
        </div>
        <p className="bg-green-500 rounded-full w-32 text-center p-2 mt-8 font-semibold mb-3 shadow-lg">concluido</p>
        <h1 className="text-black font-bold text-2xl  mb-8">Técnico em informática para internet</h1>

        <div className="flex gap-2 items-center mb-5">
          <div className="">
            <Image src={"/images/school.png"} width={30} height={30} alt='figura de escola' className="text-amber-400"/>
          </div>
          <p className="text-black font-semibold">Senac</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className=""><Image src={"/images/gps.png"} alt='icone localização' width={30} height={30} className="text-amber-400"/></div>
          <p className="text-black font-semibold">São Paulo - SP</p>
        </div>

      </article>

    </section> 

  )
}

