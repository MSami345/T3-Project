// 'use client'
import React, { useEffect, useState } from 'react'
import AddPostComp from '~/components/AddPostComp'
import { db } from '~/server/db'

// export const dynamic = 'force-dynamic'
export const dynamic = 'force-dynamic'

const page = async () => {
    const posts = await db.query.posts.findMany()


    // console.log(posts)
    return (
        <div className='flex flex-col items-center gap-10'>
            {/* <p>{process.env.POSTGRES_URL}</p> */}
            {posts.length && posts.map((post, index) => <p className='text-2xl font-normal' key={index}>
                name : <strong>{post.name}</strong>
                <br />
                <span>created At : <strong>{post.createdAt.toISOString()}</strong></span>
            </p>)
            }
            <AddPostComp />
        </div>
    )
}

export default page
