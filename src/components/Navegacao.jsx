import React, { useState } from 'react'
import { GraduationCap, Laptop, Mail, Menu, MenuIcon, UserRound, X, github } from 'lucide-react'
import Link from 'next/link'
import Hamburger from 'hamburger-react'

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  function toggleMenu(){
    return setMenuAberto(!menuAberto)
  }
 
  return (
    <>
      <nav className="mr-6 lg:w-3/5 2xl:w-2/5 max-lg:hidden">
        <ul className="flex justify-around text-xl font-semibold">
            <li className="hover:bg-amber-400 px-3 rounded-md hover:shadow-md "><Link href={""}>Sobre</Link></li>
            <li className="hover:bg-amber-400 px-3 rounded-md hover:shadow-md"><Link href={""}>Projetos</Link></li>
            <li className="hover:bg-amber-400 px-3 rounded-md hover:shadow-md"><Link href={""}>Certificados</Link></li>
            <li className="hover:bg-amber-400 px-3 rounded-md hover:shadow-md"><Link href={""}>Contato</Link></li>
        </ul>
      </nav>

      <button onClick={toggleMenu} className="border rounded-full bg-amber-400 lg:hidden">
        {/* {menuAberto ?  <X strokeWidth={1}/> : <MenuIcon strokeWidth={1}/>} */}
        <Hamburger size={20} label="icone de abrir e fechar o menu"/>
      </button>

      {menuAberto && (
        <nav className="bg-white absolute top-0 mt-14 mr-12 right-0 w-60 h-60 shadow-md border animate-flip-down">
          <ul className="flex flex-col justify-around text-start h-full text-xl font-semibold text-black">
              <li className="py-3 hover:bg-amber-400"><Link className="pl-8 flex gap-4" href={""}><UserRound /> Sobre</Link></li>
              <li className="py-3 hover:bg-amber-400"><Link className="pl-8 flex gap-4" href={""}><Laptop /> Projetos</Link></li>
              <li className="py-3 hover:bg-amber-400"><Link className="pl-8 flex gap-4" href={""}><GraduationCap />Certificados</Link></li>
              <li className="py-3 hover:bg-amber-400"><Link className="pl-8 flex gap-4" href={""}><Mail /> Contato</Link></li>
          </ul>
        </nav>
      ) }
    </>
  )
}
