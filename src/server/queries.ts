import 'server-only'
import { db } from "./db"
import { posts } from './db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { redirect } from 'next/dist/server/api-utils';
export const fetchCache = 'force-no-store';


export const getPost = async () => {
    return await db.query.posts.findMany()
}

export const postDelete = async (id: number) => {

    await db.delete(posts).where(eq(posts.id, id))

    revalidatePath('/all-posts')
    redirect('/all-posts')
}