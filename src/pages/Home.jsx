import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const Home = () => {
    const [allPosts, setAllPosts] = useState([]);
    const navigation = useNavigate();
    const { id } = useParams();
    //console.log(allPosts);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/posts", {
                    method: "GET",

                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                // console.log(data);
                setAllPosts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="pt-20 pb-12 min-h-screen bg-blue-200 dark:bg-gray-900">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2 p-4 ">
                    {allPosts.map((post) => (
                        <div key={post.id}>
                        <NavLink to={`/posts/${post.id}`}>
                            <div
                                
                                //onClick={navigation(`/posts/${post.id}`)}
                                className=" border rounded shadow hover:shadow-lg cursor-pointer bg-slate-100 dark:bg-gray-800"
                            >
                                <p className="text-gray-500 dark:text-gray-400 text-center">
                                    {new Date(post.date_created).toLocaleString("en-eu", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </p>
                                <h2 className="text-xl font-bold mb-2 text-center dark:text-gray-100">
                                    {post.author}
                                </h2>
                                <h2 className="text-xl font-bold mb-2 text-center dark:text-gray-100">
                                    {post.title}
                                </h2>
                                {post.cover ? (
                                    <img
                                        className="w-full h-40 object-cover "
                                        src={post.cover}
                                        alt={post.title}
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
                                        <span className="text-gray-500">No Image Available</span>
                                    </div>
                                )}
                            </div>
                        </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
