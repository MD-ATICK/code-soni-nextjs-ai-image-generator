
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFoundPage() {
    return (
        <div className=" flex items-center  flex-col gap-y-4 justify-center h-40">
            <p className=" font-medium  text-gray-500">page not found!</p>
            <Button>
                <Link href={'/'}>
                    back to Home!
                </Link>
            </Button>
        </div>
    )
}
