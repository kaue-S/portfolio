import { Download } from 'lucide-react'
import React from 'react'

export default function Botao({children}) {
  return (
    <button className="bg-white text-black p-3 rounded-full">
      {children}
    </button>
  )
}
