
import Link from "next/link";
import LoginButton from "./LoginButton";
import { ThemeToggle } from "./ThemeToggle";
import ImageMotion from "./motion/ImageMotion";
import WebTitle from "./motion/WebTitle";

export default async function Navbar() {


    return (
        <div className=" h-16 md:h-20 bg-[#e1dfdf91] dark:bg-[#0000006f] sticky backdrop-blur-lg z-30 top-0 border-b-2 border-gray-200 dark:border-gray-800 ">
            <div className="  h-full flex justify-between items-center container mx-auto px-4">
                <Link href={'/'} className="flex items-center gap-x-2">
                    <ImageMotion />
                    <WebTitle variant={'medium'} />
                </Link>
                <div className="flex items-center gap-x-4">
                    <div className=" ">
                        <ThemeToggle />
                    </div>
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}
