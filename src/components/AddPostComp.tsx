'use client'
import React, { useEffect, useState } from 'react'
// import { addPost } from './addpost';

const AddPostComp = () => {
    const [flag, setFlag] = useState(false);

    const addPost = async () => {
        try {
            await fetch('/api/post')
            // alert("post added successfully")
        } catch (error) {
            console.log(error)
            alert("error adding posts in database")
        }
    }

    useEffect(() => {
        if (flag) {
            addPost().catch(error=>console.log(error))
        }
    }, [flag])


    return (
        <div>
            <button onClick={() => setFlag(!flag)}>{flag ? 'created' : 'create'}</button>
        </div>
    )
}

export default AddPostComp
