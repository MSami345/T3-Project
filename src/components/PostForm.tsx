'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { type FormEvent } from 'react'
import { useToast } from '~/hooks/use-toast'

const PostForm = () => {
    const [name, setName] = useState('')
    const router = useRouter()
    const { toast } = useToast()

    const addPost = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/post', {
                method: "POST",
                body: JSON.stringify({ name }),
                headers: { 'content-type': 'application/json' }
            })
            if (res.ok) {

                router.replace('/all-posts')
                router.refresh()
                toast({
                    title: "Post Added successfully"
                })

            }
        } catch (error) {
            console.log(error)
            alert("error adding posts in database")
        }
    }

    return (
        <div className='flex flex-col gap-4 h-screen items-center justify-center shadow-lg p-5 rounded-lg'>
            <p className='text-xl font-bold py-5'>Create a new Post</p>

            <form onSubmit={addPost} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="Name" className="text-md font-semibold">
                        Name
                    </label>
                    <input className='border border-slate-300 rounded-lg p-2 text-violet-500' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type='submit' className="p-3 bg-red-600 text-white rounded-lg">submit</button>
            </form>

        </div>
    )
}

export default PostForm
