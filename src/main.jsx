import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import About from './about/About';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Appo from './appointment/Appo';
import Blog from './Blog/Blog';
import Department from './Department/Department';
import OurDoctor from './Doctor/OurDoctor';
import Doc1 from './Doctor/Doc1';
import Doc2 from './Doctor/Doc2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appo",
        element: <Appo></Appo>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/depart",
        element: <Department></Department>,
      },
      {
        path: "/doc",
        element: <OurDoctor></OurDoctor>,
      },
      {
        path: "/doc1",
        element: <Doc1></Doc1>,
      },
      {
        path: "/doc2",
        element: <Doc2></Doc2>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)


