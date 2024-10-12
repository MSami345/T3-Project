import { eq } from "drizzle-orm"
import { request } from "http"
import { NextRequest } from "next/server"
import { db } from "~/server/db"
import { posts } from "~/server/db/schema"

export const GET = async (request: NextRequest) => {
    try {
        await db.insert(posts).values({ name: 'sadiq' })

    } catch (error) {
        return Response.json(error)
    }

    return Response.json({ 'message': 'post added successfully' })
}

export const DELETE = async (request: NextRequest) => {
    const params = request.nextUrl.searchParams
    const id = params.get('id')
    // console.log(id)
    try {
        await db.delete(posts).where(eq(posts.id, Number(id)))
    } catch (error) {
        return Response.json(error)
    }

    return Response.json({ message: "post deleted successfully" })
}

