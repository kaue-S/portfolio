import { CalendarDays, Triangle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



export default function Experiencia() {
  return (
    <section className='mb-10 mt-40 '>
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Experiência</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Experiência</h1>
        </div>

        <article className="bg-white p-4 md:p-6 rounded-3xl lg:w-4/5 m-auto mt-10">
            <div>
                <div>
                    <figure>
                        <Image src={"/images/soldiesel.jfif"} alt="logotipo de uma empresa" width={30} height={30}/>
                    </figure>
                    <p>Soldiesel Comércio</p>
                </div>
                <p><CalendarDays /><time datetime="2013-07">Jul 2013</time> - <time datetime="2020-12">Dez 2020</time></p>
            </div>
            <div>
                <figure>
                    <Image src={"/images/man.png"} alt="figura personagem" width={60} height={60}/>
                </figure>
                <h2>Auxiliar de Expedição</h2>
            </div>
            <article className="flex flex-col">
                <p className="flex"><Triangle className="rotate-90" strokeWidth={1}/>Recebimeto de mercadorias</p>
                <p className="flex"><Triangle className="rotate-90" strokeWidth={1}/>Organização de estoque</p>
                <p className="flex"><Triangle className="rotate-90" strokeWidth={1}/>Separação de mercadorias e empacotamento</p>
                <p className="flex"><Triangle className="rotate-90" strokeWidth={1}/>Despacho para transportadora</p>
                <p className="flex"><Triangle className="rotate-90" strokeWidth={1}/>Controle de pedidos e mercadorias através do sistema PROTHEUS da TOTVS</p>
            </article>
        </article>
    </section>
  )
}
