"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const Nav = () => {

    const [clicked, setClicked] = useState<string | null>(null)

    const handleClick1 = (buttonId: string) => {
        setClicked(buttonId)
    }

    const handleClick2 = (buttonId: string) => {
        setClicked(buttonId)
    }

    const handleClick3 = (buttonId: string) => {
        setClicked(buttonId)
    }

    return (
        <nav className="w-full">
            <section className="flex justify-around gap-4 p-4 bg-[#16C6D1]">
                <Link href="/" onClick={() => handleClick1('button1')} className={`bg-[#131428] w-20 h-20 flex flex-col justify-center items-center rounded-md ${clicked === 'button1' ? 'bg-red-300' : 'bg-green-300'}}`}>
                    <Image src="/assets/publico.png" width={50} height={50} alt="Logo" className="bg-[#131428] p-1 w-10 h-10" />
                    <p className="text-white p-1 text-[10px]">Público</p>
                </Link>
                <Link href="/socios" onClick={() => handleClick2('button2')} className={`bg-[#131428] w-20 h-20 flex flex-col justify-center items-center rounded-md ${clicked === 'button2' ? 'bg-red-300' : 'bg-green-300'}}`}>
                    <Image src="/assets/socios.png" width={50} height={50} alt="Logo" className="bg-[#131428] p-1 w-10 h-10" />
                    <p className="text-white p-1 text-[10px]">Sócios</p>
                </Link>
                <Link href="/midias" onClick={() => handleClick3('button3')} className={`bg-[#131428] w-20 h-20 flex flex-col justify-center items-center rounded-md ${clicked === 'button3' ? 'bg-red-300' : 'bg-green-300'}}`}>
                    <Image src="/assets/midias-sociais.png" width={50} height={50} alt="Logo" className="bg-[#131428] p-1 w-10 h-10" />
                    <p className="text-white p-1 text-[10px] text-center">Redes Sociais</p>
                </Link>
            </section>
        </nav>
    )
}
