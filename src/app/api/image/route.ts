import { currentUserServer } from "@/lib/currentUserServer";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {


    const session = await currentUserServer()
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized - Please login!' }, { status: 401 })
    }

    if (session.posts.length >= 20) {
        return NextResponse.json({ error: 'You have been generated max limit!' }, { status: 401 })
    }

    const { prompt } = await request.json()

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100000000) + 1;
    }

    const imageUrl = `${process.env.NEXT_AI_API_BASE_URL}/prompt/${encodeURIComponent(prompt)}?seed=${generateRandomNumber()}&width={512}&height={512}&nologo=True`


    await prisma.post.create({
        data: {
            prompt,
            url: imageUrl,
            userId: session.id,
        },
    })


    return NextResponse.json({ message: 'generate image succeed', url: imageUrl, prompt, session })
}
