import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import newPost from '../img/new-post.png';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className='flex bg-sky-700 dark:bg-sky-900  justify-between items-center p-4 fixed top-0 left-0 w-full'>
            <NavLink to='/'>
            <div className='flex items-center'>
               
                <img src={logo} alt="Logo" className='w-16 h-16 p-2'/>
                <p className='ml-2 text-white dark:text-gray-300'>Fullstack Blog</p>
               
            </div>
            </NavLink>
            
            <div className='flex items-center'>
            <div className=''>
            <button onClick={toggleDarkMode} className="p-2 bg-sky-500 dark:bg-gray-700 text-white dark:text-gray-300 rounded m-4">
                {!isDarkMode ? "Dark Mode" : "Light Mode"}
            </button></div>

            <NavLink to='/post/create'>
            <div className='flex items-center'>
            <p className='mr-2 text-white dark:text-gray-300'>Add new post!</p>
                <img src={newPost} alt="New Post" className='w-16 h-16'/>
             </div>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Header;