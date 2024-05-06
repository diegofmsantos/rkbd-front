"use client"

import { Filter } from "@/components/Filter";
import { Nav } from "@/components/Nav";
import { TableFace } from "@/components/TableFace";
import { TableInsta } from "@/components/TableInsta";
import { TableTik } from "@/components/TableTik";
import { TableTwitter } from "@/components/TableTwitter";
import { TableYou } from "@/components/TableYou";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";

const Page = () => {

    useEffect(() => {
        handleSelected1('button1')
    }, [])

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
    const handleSelected4 = (buttonId: string) => {
        setSelected(buttonId)
    }
    const handleSelected5 = (buttonId: string) => {
        setSelected(buttonId)
    }

    return (
        <div>
            <Nav />
            <Tabs defaultValue="instagram" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger onClick={() => handleSelected1('button1')} value="instagram" className={`border-b-4 ${selected === 'button1' ? 'border-b-[#16C6D1]' : 'border-b-[#F5F5F5]'}`}>Instagram</TabsTrigger>
                    <TabsTrigger onClick={() => handleSelected2('button2')} value="twitter" className={`border-b-4 ${selected === 'button2' ? 'border-b-[#16C6D1]' : 'border-b-[#F5F5F5]'}`}>Twitter</TabsTrigger>
                    <TabsTrigger onClick={() => handleSelected3('button3')} value="facebook" className={`border-b-4 ${selected === 'button3' ? 'border-b-[#16C6D1]' : 'border-b-[#F5F5F5]'}`}>Facebook</TabsTrigger>
                    <TabsTrigger onClick={() => handleSelected4('button4')} value="youtube" className={`border-b-4 ${selected === 'button4' ? 'border-b-[#16C6D1]' : 'border-b-[#F5F5F5]'}`}>Youtube</TabsTrigger>
                    <TabsTrigger onClick={() => handleSelected5('button5')} value="tiktok" className={`border-b-4 ${selected === 'button5' ? 'border-b-[#16C6D1]' : 'border-b-[#F5F5F5]'}`}>TikTok</TabsTrigger>
                </TabsList>
                <Filter />
                <TabsContent value="instagram">
                    <TableInsta />
                </TabsContent>
                <TabsContent value="twitter">
                    <TableTwitter />
                </TabsContent>
                <TabsContent value="facebook">
                    <TableFace />
                </TabsContent>
                <TabsContent value="youtube">
                    <TableYou />
                </TabsContent>
                <TabsContent value="tiktok">
                    <TableTik />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Page;
