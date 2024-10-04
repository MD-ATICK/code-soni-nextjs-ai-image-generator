
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Post } from "@prisma/client"
import NextAuth from 'next-auth'
import google from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    callbacks: {
        async jwt({ token }) {
            const user = await prisma.user.findUnique({
                where: { id: token.sub }, include: {
                    posts: {
                        orderBy: {
                            createdAt: 'desc'
                        },
                        take: 20
                    }
                }
            })
            token.posts = user?.posts;
            return token;
        },
        async session({ token, session }) {

            if (token.sub && token.posts && session.user) {
                session.user.id = token.sub
                session.user.posts = token.posts as Post[]
            }

            return session;
        }
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' }
})