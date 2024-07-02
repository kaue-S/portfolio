import { CalendarDays, Eye } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



export default function Certificados() {
  return (
    <section className="mb-10 mt-20">
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Certificados</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Certificados</h1>
        </div>

        <div className="mt-10 lg:w-4/5 m-auto">
            <article className=" bg-slate-50 rounded-3xl p-6">
                <div className="flex items-center flex-wrap justify-between gap-5">
                    <figure className="bg-black flex items-center rounded-full p-1 pr-3 gap-2 justify-around shadow-lg">
                        <Image src={"/images/senac1.png"} alt="logotipo da instituição senac" width={50} height={55} className="rounded-full bg-white"/>
                            <figcaption>
                                <p className="text-amber-400 font-bold text-nowrap text-xl pr-5">Senac </p>
                            </figcaption>
                    </figure>
                        
                    <Image src={"/images/diploma.png"} alt="figura de um diploma" width={50} height={50}/>
                </div>

                <h1 className="text-black font-bold text-2xl mt-8 mb-8">Desenvolvimento Front - End</h1>
                
                <a href="" className="bg-gray-300 inline-flex border p-3 gap-2 border-black text-black font-semibold rounded-full w-40">
                    <Eye strokeWidth={2}/> Ver diploma
                </a>
            </article>

            <article className="bg-slate-50 rounded-3xl p-6">
                <div className="flex items-center flex-wrap justify-between gap-5">
                    <figure className="bg-black flex items-center rounded-full p-1 pr-3 gap-2 justify-around shadow-lg">
                        <Image src={"/images/senac1.png"} alt="logotipo da instituição senac" width={50} height={55} className="rounded-full bg-white"/>
                            <figcaption>
                                <p className="text-amber-400 font-bold text-nowrap text-xl pr-5">Senac </p>
                            </figcaption>
                    </figure>
                        
                    <Image src={"/images/diploma.png"} alt="figura de um diploma" width={50} height={50}/>
                </div>

                <h1 className="text-black font-bold text-2xl mt-8 mb-8">Desenvolvimento Back - End</h1>
                
                <a href="" className="bg-gray-300 inline-flex border p-3 gap-2 border-black text-black font-semibold rounded-full w-40">
                    <Eye strokeWidth={2}/> Ver diploma
                </a>
            </article>

            <article className=" bg-slate-50 rounded-3xl p-6">
                <div className="flex items-center flex-wrap justify-between gap-5">
                    <figure className="bg-black flex items-center rounded-full p-1 pr-3 gap-2 justify-around shadow-lg">
                        <Image src={"/images/senac1.png"} alt="logotipo da instituição senac" width={50} height={55} className="rounded-full bg-white"/>
                            <figcaption>
                                <p className="text-amber-400 font-bold text-nowrap text-xl pr-5">Senac </p>
                            </figcaption>
                    </figure>
                        
                   <Image src={"/images/diploma.png"} alt="figura de um diploma" width={50} height={50}/>
                </div>

                <h1 className="text-black font-bold text-2xl mt-8 mb-8">Desenvolvimento Mobile</h1>
                
                <a href="" className="bg-gray-300 inline-flex border p-3 gap-2 border-black text-black font-semibold rounded-full w-40">
                    <Eye strokeWidth={2}/> Ver diploma
                </a>
            </article>
        </div>
    </section>
  )
}
