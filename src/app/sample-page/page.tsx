// 'use client'
import React from 'react'
import { db } from '~/server/db'


const page = async () => {

    const posts = await db.query.posts.findFirst()
    // console.log(posts)
    return (
        <div>
            {posts?.name}
        </div>
    )
}

export default page
