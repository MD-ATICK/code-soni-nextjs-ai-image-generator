"use server"
import { prisma } from "./prisma";

export const getSingleUser = async (id: string) => {

    const user = await prisma.user.findFirst({ where: { id }, include: { posts: true } })
    if (!user) {
        return null;
    }

    return user;
}