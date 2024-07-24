import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/loader/Loading.component';
import { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('./components/nav/Navbar.component'));
const ErrorPage = lazy(() => import('./components/error/Error.component'));
const BlogItem = lazy(() => import('./components/pages/BlogItem.component'));
const Blog = lazy(() => import('./components/pages/Blog.component'));
const Home = lazy(() => import('./components/pages/Home.component'));
const Contact = lazy(() => import('./components/pages/Contact.component'));

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
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
