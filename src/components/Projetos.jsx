import Image from 'next/image'
import React from 'react'

export default function Projetos() {
  return (
    <section className="mt-20 mb-10 lg:mt-40 ">
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Projetos</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Projetos</h1>
        </div>

        <div className="rounded-3xl  mt-10 sm:w-4/5 m-auto">
            <article className=" p-5 bg-blue-500 flex rounded-3xl">
                <div className="rounded-3xl bg-blue-800 p-5 flex gap-2">
                    <div className="text-center">
                        <h1 className="text-xl font-semibold mb-5">Petshop</h1>
                        <Image className="w-32 rounded-3xl" src={"/projetos/petshop-mobile.png"} alt="tetet" width={500} height={500}/>
                    </div>
                    <Image className=" rounded-3xl" src={"/projetos/petshop2.png"} alt="tetet" width={400} height={400}/>
                </div>
                <h1>blblblblblblbblblblbl</h1>
            </article>
        </div>
    </section>
  )
}
