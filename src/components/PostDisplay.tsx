'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useToast } from '~/hooks/use-toast'
interface POST {
    id: number
    name: string | null
    createdAt: Date
    updatedAt: Date | null
}

const PostDisplay = ({ post }: { post: POST }) => {
    const router = useRouter();
    const { toast } = useToast()
    const deletePost = async (id: number) => {
        try {
            await fetch(`/api/post?id=${id}`, { method: "DELETE" })
        } catch (error) {
            alert('failed to delete post')
        }
    }

    return (
        <div className='flex flex-col gap-2 p-5 shadow-xl rounded-lg text-base'>

            <p className='font-normal'>
                name : <strong>{post.name}</strong>
                <br />
                <span>created At : <strong>{post.createdAt.toDateString()}</strong></span>
            </p>
            <button
                className='bg-red-700 text-white p-2 rounded-lg'
                onClick={() => {
                    deletePost(Number(post.id)).then(() => {
                        router.refresh()
                        toast({
                            title: "Post deleted successfully"
                        })
                    })
                        .catch(error => console.log(error))
                }}
            >
                Delete Post
            </button>
        </div>
    )
}

export default PostDisplay
