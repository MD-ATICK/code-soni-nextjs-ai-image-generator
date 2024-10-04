"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export default function LoginBtnClient() {
  return (
    <Button onClick={() => signIn('google', { callbackUrl: '/generate' })}>Login</Button>
  )
}
