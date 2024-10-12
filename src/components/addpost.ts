import 'server-only'

import { db } from "~/server/db"
import { posts } from "~/server/db/schema"

export const addPost = async () => {
    try {
        await db.insert(posts).values({ name: 'saad' })
    } catch (error) {
        console.log(error)
        alert("error adding posts in database")
    }
}