
import { Post } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
    posts: Post[]
}


declare module 'next-auth' {
    interface Session {
        user: ExtendedUser
    }
}