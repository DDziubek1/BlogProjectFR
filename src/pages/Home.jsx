import React from 'react';
import { useState, useEffect} from "react";
const Home = () => {
    const [allPosts, setAllPosts] = useState([]);
    console.log(allPosts);

    const posts = [{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    },{
        author: "Jane Smith",
        title: "Another post",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        coverImage: "https://example.com/another-book-cover.jpg",
        date: "2022-02-15"
    },{
        author: "Mark Johnson",
        title: "Third post",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        coverImage: "https://example.com/third-book-cover.jpg",
        date: "2022-03-30"
    },{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    },{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    },{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    },{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    },{
        author: "John Doe",
        title: "Sample post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coverImage: "https://example.com/book-cover.jpg",
        date: "2022-01-01"
    }];

    

return (
    <><div className="pt-20 pb-12 bg-sky-100 ">
   
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 p-4 ">
      {posts.map((post, index) => (
        <div
          key={index}
          
          className="p-4 border rounded shadow hover:shadow-lg cursor-pointer bg-gray-100"
        >
            {post.coverImage ? (
            <img
              className="w-full h-40 object-cover rounded"
              src={post.coverImage}
              alt={post.title}
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
          <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>
          <h2 className="text-xl font-bold mb-2 text-center">{post.author}</h2>
          <p className="text-gray-500 text-center">Date: {post.date}</p>
          <p className="text-gray-500 text-center"> {post.content}</p>

          
        </div>
      ))}
       
      
    </div>
    </div>
    </>
  );









}


export default Home;