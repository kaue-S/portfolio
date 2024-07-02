import { CalendarDays, Triangle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



export default function Experiencia() {
  return (
    <section className='mb-10 lg:mt-40 '>
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Experiência</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Experiência</h1>
        </div>

        <article className="bg-white p-4 md:p-6 rounded-3xl lg:w-4/5 m-auto mt-10">
            <div className="flex items-center flex-wrap justify-between gap-5">
                <figure className="bg-black flex items-center rounded-full p-1 pr-3 gap-1 justify-around shadow-lg">
                    <Image src={"/images/soldiesel.jfif"} alt="logotipo de uma empresa" width={55} height={55} className="rounded-full"/>
                        <figcaption>
                            <p className="text-amber-400 font-bold text-nowrap text-xl">Soldiesel comércio </p>
                        </figcaption>
                </figure>
                    
                <p className="text-black flex items-center border text-center rounded-full p-2 bg-amber-200 shadow-lg font-bold">
                    <CalendarDays />
                    <time className="mx-1" datetime="2013-07">Jul 2013</time> - <time className="ml-1" datetime="2020-12">Dez 2020</time>
                </p>
            </div>

            <figure className="mt-5 mb-5 flex items-center gap-1">
                <Image src={"/images/man.png"} alt="figura personagem" width={50} height={50}/>
                <figcaption><h2 className="font-bold text-lg text-black">Auxiliar de Expedição</h2></figcaption>
            </figure>
     
            <article className="flex flex-col gap-5  text-black">
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Separação de mercadorias e empacotamento</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Recebimeto de mercadorias</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Organização de estoque</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Despacho para transporte</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Controle de pedidos e mercadorias através do sistema ERP PROTHEUS da TOTVS</p>
                </div>
                
            </article>
        </article>
        <article className="bg-white p-4 md:p-6 rounded-3xl lg:w-4/5 m-auto mt-10">
            <div className="flex items-center flex-wrap justify-between gap-5">
                <figure className="bg-black flex items-center rounded-full p-1 pr-3 gap-1 justify-around shadow-lg">
                    <Image src={"/images/motoboy.png"} alt="logotipo de uma empresa" width={55} height={55} className="rounded-full"/>
                        <figcaption>
                            <p className="text-amber-400 font-bold text-nowrap text-xl">Motoboy Autônomo</p>
                        </figcaption>
                </figure>
                    
                <p className="text-black flex items-center border text-center rounded-full p-2 bg-amber-200 shadow-lg font-bold">
                    <CalendarDays />
                    <time className="mx-1" datetime="2013-07">Dez 2020</time> - <time className="ml-1" datetime="2020-12">atualmente</time>
                </p>
            </div>

            <figure className="mt-5 mb-5 flex items-center gap-1">
                <Image src={"/images/man.png"} alt="figura personagem" width={50} height={50}/>
                <figcaption><h2 className="font-bold text-lg text-black">Auxiliar de Expedição</h2></figcaption>
            </figure>
     
            <article className="flex flex-col gap-5  text-black">
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Separação de mercadorias e empacotamento</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Recebimeto de mercadorias</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Organização de estoque</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Despacho para transporte</p>
                </div>
                <div className='flex items-start'>
                    <Triangle className="rotate-90 min-w-8" strokeWidth={1}/>
                    <p>Controle de pedidos e mercadorias através do sistema ERP PROTHEUS da TOTVS</p>
                </div>
                
            </article>
        </article>
    </section>
  )
}
