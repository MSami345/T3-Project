'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const AddPostComp = () => {
    const router = useRouter()

    return (
        <div>
            <button className='bg-blue-400 text-white p-3 rounded-xl' onClick={() => router.push('/create-post')}>
                Add Post
            </button>
        </div>
    )
}

export default AddPostComp
