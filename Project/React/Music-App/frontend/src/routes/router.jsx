import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from "../layout/MainLayout"
import { path } from 'framer-motion/client';
import Favorite from '../pages/Favorite';
import RegisterPage from '../pages/RegisterPage';
import ArtistsDashbord from '../pages/ArtistsDashbord';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
export const router = createBrowserRouter([
    {

        path: "/",
        element: <MainLayout />,
        children: [{
            path: "",
            element: <Home />

        }, {
            path: "favorite",
            element: <Favorite />
        },
        {
            path: 'login',
            element:<LoginPage/> 
        },
        {
            path: 'register',
            element: <RegisterPage />
        },
        {
            path: 'artist-dashbord',
            element: <ArtistsDashbord />
        }


        ]
    },
])


