import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const notifyCreation = () => toast(` All fields are required`);
    const navigate = useNavigate();
    const onSubmit = data => {

        const response = fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                "author": data.author,
                "title": data.title,
                "content": data.content,
                "cover": data.cover
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });

        
        navigate('/');
    };




    return (
        <div className="py-2 bg-sky-100 dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <div className='w-full max-w-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-sky-700 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-md border-2 border-white'>
                    <input {...register("author", { required: true })} placeholder="Author" className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <input {...register("title", { required: true })} placeholder="Title" className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <input {...register("cover", { required: true })} placeholder="Cover Image URL" className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <textarea {...register("content", { required: true })} placeholder="Content" className='mb-4 p-2 rounded-md h-32 dark:bg-gray-700 dark:text-gray-300' />
                    <input type="submit" value='Create new post' onClick={notifyCreation} className='bg-white text-sky-700 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300' />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreatePost;