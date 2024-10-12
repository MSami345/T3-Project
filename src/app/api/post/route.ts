import { eq } from "drizzle-orm"
import { type NextRequest } from "next/server"
import { db } from "~/server/db"
import { posts } from "~/server/db/schema"

export const GET = async () => {
    try {
        await db.insert(posts).values({ name: 'sadiq' })
    } catch (error) {
        return Response.json(error)
    }

    return Response.json({ 'message': 'post added successfully' })
}

export const POST = async (request: NextRequest) => {

    const res = await request.json() as { name: string | null }
    // console.log(res)
    try {
        await db.insert(posts).values({ name: res.name })
    } catch (error) {
        return Response.json(error)
    }

    // console.log(name)

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

