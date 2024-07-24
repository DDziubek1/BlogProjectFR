import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import RootLayout from './layout/RootLayout';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/post/create' element={<CreatePost/>}/>
      <Route path='/post/details' element={<PostDetails/>}/>
    </Route>
  ))

  return <RouterProvider router={router} />;
}

export default App
