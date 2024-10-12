import 'server-only'
import { db } from "./db"

export const getPost = async () => {
    return await db.query.posts.findMany()
}