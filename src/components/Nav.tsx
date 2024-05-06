"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HeartIcon, IdentificationIcon, UserGroupIcon } from "@heroicons/react/16/solid"

export const Nav = () => {

    const [selected, setSelected] = useState<string | null>(null)

    const handleSelected1 = (buttonId: string) => {
        setSelected(buttonId)
    }

    const handleSelected2 = (buttonId: string) => {
        setSelected(buttonId)
    }

    const handleSelected3 = (buttonId: string) => {
        setSelected(buttonId)
    }


    return (
        <nav className="w-full">
            <section className="flex justify-around gap-4 p-4 h-32 bg-[#16C6D1]">
                <Link href="/" onClick={() => handleSelected1('button1')} className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === 'button1' ? 'bg-white' : 'bg-[#131428]'}`}>
                    <UserGroupIcon className={`w-12 h-12 text-white ${selected === 'button1' ? 'text-[#131428]' : 'text-white'}`} />
                    <p onClick={() => handleSelected1('button1')} className={`text-white p-1 text-[10px] ${selected === 'button1' ? 'text-[#131428]' : 'text-white'}`}>Público</p>
                </Link>
                <Link href="/socios" onClick={() => handleSelected2('button2')} className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === 'button2' ? 'bg-white' : 'bg-[#131428]'}`}>
                    <IdentificationIcon className="w-12 h-12 text-white" />
                    <p className="text-white p-1 text-[10px]">Sócios</p>
                </Link>
                <Link href="/midias" onClick={() => handleSelected3('button3')} className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === 'button3' ? 'bg-white' : 'bg-[#131428]'}`}>
                    <HeartIcon className={`w-12 h-12 text-white ${selected === 'button3' ? 'text-[#131428]' : 'text-white'}`} />
                    <p className={`text-white p-1 text-[10px] text-center  ${selected === 'button3' ? 'text-[#131428]' : 'text-white'}`}>Redes Sociais</p>
                </Link>
            </section>
        </nav>
    )
}
