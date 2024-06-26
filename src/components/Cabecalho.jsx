import React from 'react'
import Navegacao from './Navegacao'
import Image from 'next/image'


export default function Cabecalho() {
  return (
    <header className="bg-white m-auto lg:w-4/5 mt-4 h-14 px-1 flex justify-between rounded-3xl items-center">
      <div className="flex items-center">
        <div className="bg-black rounded-full py-3 px-2 text-white">
          <Image className="px-1" src={"/images/logo1.png"} alt='Logotipo com as letras K e E' width={33} height={0}/>
        </div>
        <p className="ml-1 flex">Kauê <span className=" ml-1 font-bold"> Evangelista</span></p>
      </div>
        
       <Navegacao />
    </header>
  )
}
