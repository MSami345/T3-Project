import React from 'react'
import AddPostComp from '~/components/AddPostComp'
import PostDisplay from '~/components/PostDisplay'
import { getPost } from '~/server/queries'

// export const dynamic = 'force-dynamic';

const page = async () => {
    const posts = await getPost();

    return (
        <div className='flex flex-col min-h-screen items-center gap-10 py-10'>
            <p className="text-2xl font-bold shadow-lg p-3">POSTS From vercel postgres</p>
            {posts?.length ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
                    {posts.map((post) =>
                        <PostDisplay key={post.id} post={post} />)}
                </div>
                :
                <p>No posts available</p>
            }
            <AddPostComp />
        </div>
    )
}

export default page
