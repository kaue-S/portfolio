

import Link from 'next/link'
import React from 'react'
import Navegacao from './Navegacao'


export default function Cabecalho() {
  return (
    <header className="bg-white lg:w-4/5 m-auto mt-4 h-14 px-1 flex justify-between rounded-3xl items-center">
        <div className="bg-black rounded-full py-3 px-1 text-white">Logo</div>
        
       <Navegacao />
    </header>
  )
}
