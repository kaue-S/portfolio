import Image from 'next/image'
import React from 'react'

export default function SobreMim() {
  return (
    <section>
        <div className=" relative flex justify-center sm:mt-10 lg:mt-28">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Sobre Mim</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Sobre Mim</h1>
        </div>

        <article className="border">
            <div className='flex items-center gap-5 '>
                <div className="border-4 animate-fade-down border-amber-400 rounded-full p-1">
                    <figure className="w-10 h-10 xl:w-20 xl:h-20 rounded-full overflow-hidden">
                        <Image className='' src={"/images/foto.jpeg"} alt='minha foto' width={1186} height={1599} priority/>
                    </figure>
                </div>
                <div className=" relative flex justify-center">
                    <span className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Gosto de</span>
                    <h1 className=" absolute xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold text-amber-400 tracking-wide">Gosto de</h1>
                </div>
            
            </div>
            
            <div className="flex">
                <div className="flex flex-wrap gap-4 mt-5 justify-center">
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/002-money.png"} alt={`icone do `} width={25} height={25}/>
                        <p>Dinheiro</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/001-beach-umbrella.png"} alt={`icone do `} width={25} height={25}/>
                        <p>Praia</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/003-football.png"} alt={`icone do `} width={25} height={25}/>
                        <p>Futebol</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/004-headphone.png"} alt={`icone do `} width={25} height={25}/>
                        <p>musica</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/005-joystick.png"} alt={`icone do `} width={25} height={25}/>
                        <p>Video game</p>
                    </div>
                </div>
            </div>
        </article>
        
    </section>
  )
}
