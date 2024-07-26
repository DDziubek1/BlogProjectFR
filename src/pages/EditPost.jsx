
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditPost() {
    const [postData, setPostData]= useState([]);
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const notifyEdition = () => toast("All fields are required!");
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPostData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    

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
        <div className="py-2 bg-sky-100 dark:bg-gray-900 min-h-screen flex justify-center items-center">
            <div className='w-full max-w-lg '>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-sky-700 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-md border-2 border-white'>
                    <input {...register("author", { required: true })} placeholder={postData.author} className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <input {...register("title", { required: true })} placeholder={postData.title} className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <input {...register("cover", { required: true })} placeholder={postData.cover} className='mb-4 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300' />
                    <textarea {...register("content", { required: true })} placeholder={postData.content} className='mb-4 p-2 rounded-md h-32 dark:bg-gray-700 dark:text-gray-300' />
                    <input type="submit" onClick={notifyEdition} value='Edit your post!' className='bg-white text-sky-700 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300' />
                    <ToastContainer />
                </form>
            </div>

        </div>
    );
}

export default EditPost;