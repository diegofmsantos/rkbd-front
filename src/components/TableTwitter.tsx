"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import Image from "next/image"
import { api } from "@/api/api"
import { useEffect, useReducer } from "react"
import { timeReducer } from "@/reducer/timeReducer"
import { Time } from "@/types/Time"

export const TableTwitter = () => {

    const [times, dispatch] = useReducer(timeReducer, [])

    const loadTimes = async () => {
        const reponse = await api.get('/times/twitter')

        dispatch({ type: 'load', payload: reponse.data })
    }

    useEffect(() => {
        loadTimes()
    }, [])

    return (
        <Table className="text-center">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center pl-4">Pos</TableHead>
                    <TableHead className="text-center">Time</TableHead>
                    <TableHead className="text-center pr-4">Seguidores</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {times.map((time) => (
                    <TableRow key={time.id}>
                        <TableCell>{time.id}</TableCell>
                        <TableCell className="flex gap-2 items-center justify-center">
                            <Image src={`/assets/logos-times/${time.url}`} width={25} height={25} alt="Logo" />
                            <div className="w-24 pr-2">{time.nome}</div>
                        </TableCell>
                        <TableCell>{time.twitter.toFixed(3)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}