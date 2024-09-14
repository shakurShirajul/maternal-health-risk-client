import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './layout/Root';
import Home from './pages/Home/Home';
import TestHealth from './pages/TestHealth/TestHealth';
import Blogs from './pages/Blogs/Blogs';
import BlogOne from './pages/Blogs/BlogOne';
import BlogTwo from './pages/Blogs/BlogTwo';
import BlogThree from './pages/Blogs/BlogThree';
import ContactUs from './ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/test",
        element: <TestHealth></TestHealth>
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blogone",
        element: <BlogOne />
      },
      {
        path: "/blogtwo",
        element: <BlogTwo />
      },
      {
        path: "/blogthree",
        element: <BlogThree />
      },
      {
        path: "/contactus",
        element: <ContactUs/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);