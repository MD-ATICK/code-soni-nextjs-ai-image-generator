"use client"

import { signOut } from "next-auth/react"
import { DropdownMenuItem } from "./ui/dropdown-menu"

export default function LogoutBtnClient() {
    return (
        <DropdownMenuItem onClick={async () => await signOut({ redirectTo: '/' })}>
            Logout
        </DropdownMenuItem>
    )
}
