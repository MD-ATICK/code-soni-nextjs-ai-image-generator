"use client"

import { useTheme } from "next-themes"

import night from '@/assets/night.png'
import sun from '@/assets/sun-black.png'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function ThemeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size={'icon'} >
                    <Image src={sun} height={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" alt="Light Theme" title="Light Theme" />
                    <Image src={night} height={20} className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" alt="Dark Theme" title="Dark Theme" />
                    {/* <p className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" >Light</p>
                    <p className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">Dark</p> */}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
