import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../layout/MainLayout'
import Contact from '../pages/Contact'

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AuthLayout from '../layout/AuthLayout'
import ProtectedRoute from './ProtectedRoute'


const AppRoute = () => {

    let router = createBrowserRouter([
        {

            path:"/",
            element:<ProtectedRoute/>,
            children: [{
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },

                    {
                        path: 'about',
                        element: <About />
                    },

                    {
                        path: 'contact',
                        element: <Contact />
                    }
                ],
            }]


        }, {
            path: "/auth",
            element: <AuthLayout />,
            children: [{
                path: 'login',
                element: <LoginPage />
            }, {
                path: 'register',
                element: <RegisterPage />
            }]
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoute