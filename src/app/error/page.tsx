
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ErrorPage() {
    return (
        <div className=" flex items-center  flex-col gap-y-4 justify-center h-40">
            <p className=" font-medium  text-gray-500">something is wrong!</p>
            <Button>
                <Link href={'/'} className=" h-full w-full">back to home!</Link>
            </Button>
        </div>
    )
}
