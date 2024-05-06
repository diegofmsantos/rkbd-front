import { Filter } from "@/components/Filter";
import { Nav } from "@/components/Nav";
import { TableSocios } from "@/components/TableSocios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Page = () => {
    return (
        <div>
            <Nav />
            <Tabs defaultValue="socios" className="w-full">
                <Filter />
                <TabsContent value="socios">
                    <TableSocios />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Page;
