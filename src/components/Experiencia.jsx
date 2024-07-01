import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



export default function Experiencia() {
  return (
    <section>
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Experiência</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Experiência</h1>
        </div>

        <article className="border">
            <div>
                <div>
                    <Image src={"/images/soldiesel.jfif"} alt="logotipo de uma empresa" width={30} height={30}/>
                    <p>Soldiesel Comércio</p>
                </div>
                <p><CalendarDays />Jul 2013 - Dez 2020</p>
            </div>
            <div>
                <Image src={"/images/man.png"} alt="figura personagem"/>
                <h2></h2>
            </div>

        </article>
    </section>
  )
}
