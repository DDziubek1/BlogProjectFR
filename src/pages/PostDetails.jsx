import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editPost from '../img/edit.png';
import deletePost from '../img/delete.png';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const PostDetails = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:3000/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };

        fetchPost();
    }, [id]);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    if (!post) {
        return <p className="p-60">POST NOT FOUND</p>;
    }

    const notifyDeletion = () => toast("Deleted the post!");
    const handleDelete = async () => {

        try {
            const response = await fetch(`http://localhost:3000/posts/${id}`, {
                method: "DELETE",

                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const data = await response.json();
            // console.log(data);
            console.log(data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        notifyDeletion();
        setTimeout(() => {
            navigate('/');
        }, "2000");
    };






    return (
        <>
            <div className="pt-20 pb-12 h-screen bg-blue-200 dark:bg-gray-900">
                <div className="flex gap-4 mt-2 p-4 h-5/6  justify-center dark:text-white">
                    <div
                        key={post.id}
                        className=" border border-blue-700 dark:border-gray-700 rounded shadow-lg bg-slate-100 dark:bg-gray-800 w-4/6 max-w-4/6 flex "
                    >
                        <div className="w-5/12">
                            {post.cover ? (
                                <img
                                    className="h-full w-full  border-r-2 border-blue-500 dark:border-gray-600 dark:text-white object-scale-down"
                                    src={post.cover}
                                    alt={post.title}
                                />
                            ) : (
                                <div className=" h-[100%] bg-gray-200  dark:bg-gray-700 border-r-2 border-blue-700 dark:border-gray-60 flex items-center justify-center rounded">
                                    <span className="text-gray-500 dark:text-gray-400">No Image Available</span>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col w-7/12 ">
                            <div className="flex bg-sky-700 dark:bg-sky-800 text-end">
                                <div className="flex ml-auto">
                                    <NavLink to={`/posts/${id}/edit`}>
                                        <img src={editPost} alt="Edit" className='w-10 h-10 p-2' />
                                    </NavLink>
                                    <img src={deletePost} onClick={togglePopup} alt="Delete" className='w-10 h-10 p-2 hover:cursor-pointer' />
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <p className="text-gray-500 text-end">
                                    {new Date(post.date_created).toLocaleString("en-eu", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </p>
                                {/* {post.date ? <p className="text-gray-500 text-sm text-end">
                Last edition: 
              {new Date(post.date).toLocaleString("en-eu", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p> : ""} */}
                                <h2 className="text-xl font-bold mb-2 text-end">
                                    {post.author}
                                </h2>
                                <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>
                                <p className="text-base m-2 text-left text-wrap">{post.content}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg text-center">
                        <h2 className="text-xl font-bold mb-4 dark:text-gray-300">Are you sure you want to delete this post?</h2>
                        <button onClick={handleDelete} className="bg-sky-700 hover:bg-sky-900 text-white dark:text-gray-300 p-2 rounded mr-4">Yes, Delete</button>
                        <button onClick={togglePopup} className="bg-sky-700 hover:bg-sky-900 text-white dark:text-gray-300 p-2 rounded">Cancel</button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default PostDetails;
