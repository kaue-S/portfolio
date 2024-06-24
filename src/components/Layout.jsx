import React from 'react'
import Cabecalho from './Cabecalho'

export default function Layout({children}) {
  return (
    <div className="max-lg:mx-3 mx-3">
        <Cabecalho />
        {children}
    </div>
  )
}
