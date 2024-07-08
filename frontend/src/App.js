import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/pages/Blog.component';
import Home from './components/pages/Home.component';
import Contact from './components/pages/Contact.component';
import Navbar from './components/nav/Navbar.component';
import ErrorPage from './components/error/Error.component';
import BlogItem from './components/pages/BlogItem.component';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'blogs',
          element: <Blog />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'blogs/:blogId',
          element: <BlogItem />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
