'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useToast } from '~/hooks/use-toast'
import { postDelete } from '~/server/queries'
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
                <strong className='pr-4'> {post.id}:</strong>
                <strong>{post.name}</strong>
                <br />
                <span>created At : <strong>{post.createdAt.toDateString()}</strong></span>
            </p>
            {/* <form action={async () => {
                'use server'
                // console.log(post.id)
                await postDelete(post.id).then(() => { toast({ title: "post deleted successfully" }) }).catch(error => console.error(error))
            }}> */}
            <button
                type='submit'
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
            {/* </form> */}
        </div>
    )
}

export default PostDisplay
