import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const Filter = () => {

    return (
        <div className="flex justify-around my-6">
            <Select>
                <SelectTrigger className="w-[180px] font-bold flex flex-col h-16 rounded-3xl">
                    <span className="text-[#16C6D1]">Filtre por Ano</span>
                    <SelectValue placeholder="2024" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="font-bold">
                        <SelectLabel>2024</SelectLabel>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] font-bold flex flex-col h-16 rounded-3xl">
                <span className="text-[#16C6D1]">Filtre por Mês</span>
                    <SelectValue placeholder="Maio" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="font-bold">
                        <SelectItem value="janeiro">Janeiro</SelectItem>
                        <SelectItem value="fevereiro">Fevereiro</SelectItem>
                        <SelectItem value="marco">Março</SelectItem>
                        <SelectItem value="abril">Abril</SelectItem>
                        <SelectItem value="maio">Maio</SelectItem>
                        <SelectItem value="junho">Junho</SelectItem>
                        <SelectItem value="julho">Julho</SelectItem>
                        <SelectItem value="agosto">Agosto</SelectItem>
                        <SelectItem value="setembro">Setembro</SelectItem>
                        <SelectItem value="outubro">Outubro</SelectItem>
                        <SelectItem value="novembro">Novembro</SelectItem>
                        <SelectItem value="dezembro">Dezembro</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}