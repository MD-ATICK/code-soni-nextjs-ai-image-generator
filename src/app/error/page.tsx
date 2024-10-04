"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function ErrorPage() {
    return (
        <div className=" flex items-center  flex-col gap-y-4 justify-center h-40">
            <p className=" font-medium  text-gray-500">something is wrong!</p>
            <Button aria-label="back to login" onClick={() => signIn('google', { callbackUrl: '/generate' })}>back to login!</Button>
        </div>
    )
}
