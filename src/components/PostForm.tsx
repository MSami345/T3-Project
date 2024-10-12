'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { type FormEvent } from 'react'

const PostForm = () => {
    const [name, setName] = useState('')
    const router = useRouter()

    const addPost = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/post', {
                method: "POST",
                body: JSON.stringify({ name }),
                headers: { 'content-type': 'application/json' }
            })
            if (res.ok) {
                router.push('/all-posts')
            }
        } catch (error) {
            console.log(error)
            alert("error adding posts in database")
        }
    }

    return (
        <div className='flex flex-col gap-4 items-center shadow-lg p-5 rounded-lg'>
            <p className='text-xl font-bold py-5'>Create a new Post</p>
            <form onSubmit={addPost} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Name" className="text-md text-black font-semibold">
                        Name
                    </label>
                    <input className='border border-slate-300 rounded-lg p-2' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type='submit' className="p-3 bg-red-600 text-white rounded-lg">submit</button>
            </form>

        </div>
    )
}

export default PostForm
