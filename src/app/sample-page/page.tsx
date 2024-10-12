import React from 'react'
import AddPostComp from '~/components/AddPostComp'
import PostDisplay from '~/components/PostDisplay'
import { db } from '~/server/db'

export const dynamic = 'force-dynamic'
export const revalidate = 1

const page = async () => {
    const posts = await db.query.posts.findMany()

    return (
        <div className='flex flex-col items-center gap-10 py-10'>

            <p className="text-2xl font-bold shadow-lg p-3">POSTS From vercel postgres</p>
            {posts.length && posts.map((post , index) =>
                <PostDisplay key={post.id} post={post} />
            )
            }
            <AddPostComp />
        </div>
    )
}

export default page
