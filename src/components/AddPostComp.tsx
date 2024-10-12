'use client'
import React, { useEffect, useState } from 'react'
import { db } from '~/server/db';
import { posts } from '~/server/db/schema';

const AddPostComp = () => {
    const [flag, setFlag] = useState(false);

    const addPost = async () => {
        try {
            await db.insert(posts).values({ name: 'saad' })
        } catch (error) {
            console.log(error)
            alert("error adding posts in database")
        }
    }

    useEffect(() => {
        if (flag) {
            addPost().catch(err => console.log("error adding post"))
        }
    }, [flag])
    return (
        <div>

            <button onClick={() => setFlag(!flag)}>{flag ? 'created' : 'create'}</button>
        </div>
    )
}

export default AddPostComp
