import Image from "next/image"

export const Header = () => {

    return (
        <header className="bg-slate-800 w-full h-20 flex justify-center items-center">
            <Image src="/assets/logo-rkbd.png" width={106} height={35} alt="Logo" />
        </header>
    )
}