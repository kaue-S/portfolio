import { stackDados } from '@/api/stacks'
import { Link } from 'lucide-react';
import Image from 'next/image'
import React from 'react'


export default function Projetos() {
  const tecnologias = ["Javascript", "React Hook Form", "ReactJs", "Nextjs", "Styled Components", "Firebase",];
  const tecnologiasFiltradas = stackDados.filter((item) => tecnologias.includes(item.nome))


  return (
    <section className="mt-20 mb-10 lg:mt-40 ">
        <div className=" relative flex justify-center mt-16 ">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Projetos</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Projetos</h1>
        </div>

        <div className="rounded-3xl  mt-10 sm:w-4/5 m-auto">
        <article className="md:p-5 p-3 bg-blue-800 bg-opacity-80 lg:flex rounded-3xl lg:gap-5">
                <div className="rounded-3xl max-sm:w-full bg-blue-600 flex justify-center md:p-5 p-2 lg:w-2/5 xl:w-2/5">
                    <div className="lg:w-1/3 mr-3 ">
                        <div className="flex justify-center items-center gap-1 mb-2 "> 
                            <Image className="max-[410px]:w-4" src={"/projetos/logo-petshop.png"} width={25} height={25} alt="aasdasdasd"/>
                            <p className="text-center font-semibold">Petshop</p>
                        </div>
                        <Image className="rounded-md w-full m-auto" src={"/projetos/petshop-mobile.png"} alt="tetet" width={500} height={500}/>
                    </div>
                    <Image className="rounded-md w-2/3" src={"/projetos/petshop2.png"} alt="tetet" width={500} height={500}/>
                </div>
                <div className=" lg:w-3/5 xl:w-3/5 flex flex-col justify-around gap-16" >
                    <h1 className="lg:text-4xl text-4xl max-lg:text-center font-semibold">Blog Petshop</h1>

                    <div>
                    <h2 className="text-2xl mb-5">Tecnologias utilizadas</h2>
                    <div className="flex gap-3 flex-wrap">
                        {tecnologiasFiltradas.map((item) =>(
                            <div key={item} className="bg-white text-black flex items-center gap-2 font-semibold p-2 px-3 rounded-full">
                                <Image src={item.icone} alt="icone" width={25} height={25}/>
                                <p>{item.nome}</p>
                            </div>
                        ))}
                    </div>

                    </div>

                    <a className="border-2 border-gray bg-opacity-30 bg-blue-300 p-3     rounded-full text-xl inline-flex w-64 gap-2 hover:bg-blue-500 transition" href="https://petshop-murex.vercel.app/" target='blank'>
                        <Link />
                        Ir para Petshop
                    </a>

                </div>
            </article>
            
            {/* <article className="md:p-5 p-2 bg-blue-800 bg-opacity-80 flex rounded-3xl ">
                <div className="rounded-3xl max-md:w-full bg-blue-600 flex gap-2 justify-center md:p-5">
                    <div className="w-1/3 text-center">
                        <div className="flex items-center gap-1 mb-2"> 
                            <Image className="max-[410px]:w-5" src={"/projetos/logo-petshop.png"} width={25} height={25} alt="aasdasdasd"/>
                            <h1 className=" font-semibold">Petshop</h1>
                        </div>
                        <Image className="rounded-md max-[410px]:w-28 w-32" src={"/projetos/petshop-mobile.png"} alt="tetet" width={500} height={500}/>
                    </div>
                    <Image className="rounded-md max-[410px]:w-40 max-[410px]:h-56 w-60 " src={"/projetos/petshop2.png"} alt="tetet" width={500} height={500}/>
                </div>
                <h1 className="text-3xl">blblblblblblbblblblbl</h1>
            </article> */}
        </div>
    </section>
  )
}
