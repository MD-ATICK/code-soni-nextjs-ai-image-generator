
import { prisma } from "./prisma";

export const GetUsers = async () => {
    "use server"

    const users = await prisma.user.findMany({ include: { posts: true } })
    return JSON.stringify(users);
}