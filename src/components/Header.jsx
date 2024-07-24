import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import newPost from '../img/new-post.png';

const Header = () => {
    return (
        <div className='flex bg-sky-700 justify-between items-center p-4 fixed top-0 left-0 w-full'>
            <NavLink to='/'>
            <div className='flex items-center'>
               
                <img src={logo} alt="Logo" className='w-16 h-16 p-2'/>
                <p className='ml-2 text-white'>Fullstack Blog</p>
               
            </div>
            </NavLink>
            <NavLink to='/post/create'>
            <div className='flex items-center'>
            
            <p className='mr-2 text-white'>Add new post!</p>
                <img src={newPost} alt="New Post" className='w-16 h-16'/>
             
                
            </div>
            </NavLink>
        </div>
    );
};

export default Header;