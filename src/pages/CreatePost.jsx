import React from 'react';
import { useForm } from "react-hook-form";

function CreatePost() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
        <div className="py-2 bg-sky-100 min-h-screen flex justify-center items-center">
            <div className='w-full max-w-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-sky-700 p-4 rounded-md border-2 border-white'>
                    <input {...register("author")} placeholder="Author" className='mb-4 p-2 rounded-md' />
                    <input {...register("title")} placeholder="Title" className='mb-4 p-2 rounded-md' />
                    <input {...register("coverImage")} placeholder="Cover Image URL" className='mb-4 p-2 rounded-md' />
                    <textarea {...register("content")} placeholder="Content" className='mb-4 p-2 rounded-md h-32' />
                    <input type="submit" value='Create new post' className='bg-white text-sky-700 p-2 rounded-md cursor-pointer hover:bg-gray-200' />
                </form>
            </div>
        </div>
    );
}

export default CreatePost;