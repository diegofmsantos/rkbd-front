import { Nav } from "@/components/Nav";
import { TableFace } from "@/components/TableFace";
import { TableInsta } from "@/components/TableInsta";
import { TableTik } from "@/components/TableTik";
import { TableTwitter } from "@/components/TableTwitter";
import { TableYou } from "@/components/TableYou";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Page = () => {
    return (
        <div>
            <Nav />
            <Tabs defaultValue="instagram" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="instagram">Instagram</TabsTrigger>
                    <TabsTrigger value="twitter">Twitter</TabsTrigger>
                    <TabsTrigger value="facebook">Facebook</TabsTrigger>
                    <TabsTrigger value="youtube">Youtube</TabsTrigger>
                    <TabsTrigger value="tiktok">TikTok</TabsTrigger>
                </TabsList>
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
