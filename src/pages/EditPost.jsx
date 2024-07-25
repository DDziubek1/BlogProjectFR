import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function EditPost() {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const notifyEdition = () => toast("Edited the post!");
    const navigate = useNavigate();
    const onSubmit = data => {
        const date = new Date();
        const response = fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                "author": data.author,
                "title": data.title,
                "content": data.content,
                "cover": data.cover,
                "date": date
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            });

        navigate(`/posts/${id}`);

    };




    return (
        <div className="py-2 bg-sky-100 min-h-screen flex justify-center items-center">
            <div className='w-full max-w-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-sky-700 p-4 rounded-md border-2 border-white'>
                    <input {...register("author")} placeholder="Author" className='mb-4 p-2 rounded-md' />
                    <input {...register("title")} placeholder="Title" className='mb-4 p-2 rounded-md' />
                    <input {...register("cover")} placeholder="Cover Image URL" className='mb-4 p-2 rounded-md' />
                    <textarea {...register("content")} placeholder="Content" className='mb-4 p-2 rounded-md h-32' />
                    <input type="submit" onClick={notifyEdition} value='Edit your post!' className='bg-white text-sky-700 p-2 rounded-md cursor-pointer hover:bg-gray-200' />
                    <ToastContainer />
                </form>
            </div>

        </div>
    );
}

export default EditPost;