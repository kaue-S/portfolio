import Image from 'next/image'
import React from 'react'

export default function SobreMim() {
  return (
    <section className="mt-20 md:mt-40 lg:w-4/5 m-auto mb-20">
        <div className=" relative flex justify-center sm:mt-10 lg:mt-28">
            <span className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-transparent font-bold tracking-wider text-stroke text-stroke-laranja">Sobre Mim</span>
            <h1 className=" absolute xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold text-amber-400 tracking-wide">Sobre Mim</h1>
        </div>

        <article className=" mt-10 sobreMim p-3 md:p-10 rounded-2xl">
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
                        <Image src={"/images/002-money.png"} alt={"Figura de um pacote de dinheiro"} width={25} height={25}/>
                        <p>Dinheiro</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/001-beach-umbrella.png"} alt={`Figura de praia `} width={25} height={25}/>
                        <p>Praia</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/003-football.png"} alt={"Figura de uma bola de futebol"} width={25} height={25}/>
                        <p>Futebol</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/004-headphone.png"} alt={"Figura de fone de ouvido"} width={25} height={25}/>
                        <p>musica</p>
                    </div>
                    <div className="bg-white text-black flex items-center gap-1 font-semibold p-3 rounded-full">
                        <Image src={"/images/005-joystick.png"} alt={"Figura de um controle de video game"} width={25} height={25}/>
                        <p>Video game</p>
                    </div>
                </div>
            </div>
       
            <p className="rounded-xl sobreMim mt-10 p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ullam omnis blanditiis accusamus inventore quis, deleniti distinctio quos iure voluptate iste temporibus cum enim amet aliquid similique at obcaecati unde.
                Consequuntur, inventore distinctio cumque, atque aliquam qui accusantium perferendis eum totam quidem ullam, magnam expedita molestias perspiciatis praesentium iusto. Beatae sit ratione ducimus illum voluptas, iure voluptatum nisi minima tenetur.
                Dicta quasi debitis necessitatibus nulla velit reiciendis porro inventore, modi qui minus impedit voluptates vero similique dolorum temporibus voluptatibus, libero iure reprehenderit doloribus doloremque, quaerat sunt tempora quisquam. Ducimus, molestias!
            </p>
        </article>    
    </section>
  )
}

