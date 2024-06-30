import { CalendarDays, MapPin, School } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Formacao() {
  return (
    <section className=" lg:w-4/5 m-auto mb-10 ">
      <div className=" relative flex justify-center sm:mt-10 lg:mt-28">
        <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Formação</span>
        <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Formação</h1>
      </div>

      <article className="fundoCards w-1/3 p-6 rounded-2xl flex flex-col justify-around h-56">
        <div className="flex justify-between">
          <p className="text-amber-400 font-semibold bg-black px-4 py-1 flex items-center rounded-full gap-2"><CalendarDays width={20}/> 2023 - 2024</p>
          <p className="text-black font-semibold flex items-center bg-white px-4 rounded-full gap-2"><Image src={"/images/education.png"} alt="figura de formatura" width={20} height={20}/>Técnico</p>
        </div>
        <h1 className="text-black font-bold text-xl">Técnico em informática para internet</h1>

        <div className="flex gap-3 items-center">
          <div><Image src={"/images/school.png"} width={40} height={40} alt='figura de escola' className="text-amber-400 bg-white p-2 rounded-full"/></div>
          <p className="text-black font-semibold">Senac</p>
        </div>

        <div className="flex gap-3 items-center">
          <div><Image src={"/images/gps.png"} alt='icone localização' width={40} height={40} className="text-amber-400 bg-white p-2 rounded-full"/></div>
          <p className="text-black font-semibold">São Paulo - SP</p>
        </div>

      </article>

    
        
    </section> 
  )
}

