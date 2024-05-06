"use client"

import Link from "next/link";
import { HeartIcon, IdentificationIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react";

export const Nav = () => {
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            if (path === "/") {
                setSelected("button1");
            } else if (path === "/socios") {
                setSelected("button2");
            } else if (path === "/midias") {
                setSelected("button3");
            }
        }
    }, []);

    return (
        <nav className="w-full">
            <section className="flex justify-around gap-4 p-4 h-32 bg-[#16C6D1]">
                <Link href="/" passHref>
                    <div
                        onClick={() => setSelected("button1")}
                        className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === "button1" ? "bg-white" : "bg-[#131428]"}`}
                    >
                        <UserGroupIcon className={`w-12 h-12 ${selected === "button1" ? "text-[#131428]" : "text-white"}`} />
                        <p className={`p-1 text-[10px] font-bold ${selected === "button1" ? "text-[#131428]" : "text-white"}`}>Público</p>
                    </div>
                </Link>
                <Link href="/socios" passHref>
                    <div
                        onClick={() => setSelected("button2")}
                        className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === "button2" ? "bg-white" : "bg-[#131428]"}`}
                    >
                        <IdentificationIcon className={`w-12 h-12 ${selected === "button2" ? "text-[#131428]" : "text-white"}`} />
                        <p className={`p-1 text-[10px] font-bold ${selected === "button2" ? "text-[#131428]" : "text-white"}`}>Sócios</p>
                    </div>
                </Link>
                <Link href="/midias" passHref>
                    <div
                        onClick={() => setSelected("button3")}
                        className={`bg-[#131428] w-20 h-24 flex flex-col justify-center items-center rounded-xl ${selected === "button3" ? "bg-white" : "bg-[#131428]"}`}
                    >
                        <HeartIcon className={`w-12 h-12 ${selected === "button3" ? "text-[#131428]" : "text-white"}`} />
                        <p className={`p-1 text-[10px] font-bold ${selected === "button3" ? "text-[#131428]" : "text-white"}`}>Mídias</p>
                    </div>
                </Link>
            </section>
        </nav>
    );
};
