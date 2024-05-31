import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/pages/Blog.component";
import Home from "./components/pages/Home.component";
import Contact from "./components/pages/Contact.component";
import Navbar from "./components/nav/Navbar.component";
import ErrorPage from "./components/error/Error.component";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blogs",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
