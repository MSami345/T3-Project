import React from 'react'
import AddPostComp from '~/components/AddPostComp'
import PostDisplay from '~/components/PostDisplay'
import { getPost } from '~/server/queries'

export const dynamic = 'force-dynamic'
export const revalidate = 1

const page = async () => {
    const posts = await getPost();

    return (
        <div className='flex flex-col items-center gap-10 py-10'>
            <p className="text-2xl font-bold shadow-lg p-3">POSTS From vercel postgres</p>
            {posts?.length ? posts.map((post) =>
                <PostDisplay key={post.id} post={post} />
            ) : <p>No posts available</p>
            }
            <AddPostComp />
        </div>
    )
}

export default page
