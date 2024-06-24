import React, { useState } from 'react'
import { Menu, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false)

  function toggleMenu(){
    return setMenuAberto(!menuAberto)
  }
 

  return (
    <>
      <nav className="mr-6 lg:w-3/5 xl:w-2/5 max-lg:hidden">
        <ul className="flex justify-around text-xl font-semibold">
            <li className="hover:text-amber-400"><Link href={""}>Sobre</Link></li>
            <li className="hover:text-amber-500"><Link href={""}>Projetos</Link></li>
            <li className="hover:text-amber-500"><Link href={""}>Certificados</Link></li>
            <li className="hover:text-amber-500"><Link href={""}>Contato</Link></li>
        </ul>
      </nav>

      <button onClick={toggleMenu} className="border rounded-full bg-amber-400 p-2 hover:bg-amber-300 lg:hidden">
        {menuAberto ?  <X strokeWidth={1}/> : <MenuIcon strokeWidth={1}/>}
        
      </button>

      {menuAberto && (
        <nav className="bg-white absolute top-0 mt-12 mr-11 right-0 w-60 h-60 shadow-md border">
          <ul className="flex flex-col justify-around text-start h-full text-xl text-black">
              <li className="hover:text-white py-2 hover:bg-amber-400"><Link className="pl-16" href={""}>Sobre</Link></li>
              <li className="hover:text-white py-2  hover:bg-amber-400"><Link className="pl-16" href={""}>Projetos</Link></li>
              <li className="hover:text-white py-2  hover:bg-amber-400"><Link className="pl-16" href={""}>Certificados</Link></li>
              <li className="hover:text-white py-2 hover:bg-amber-400"><Link className="pl-16" href={""}>Contato</Link></li>
          </ul>
        </nav>
      ) }
    </>
  )
}
