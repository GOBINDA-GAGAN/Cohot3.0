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
import PublicRoute from './PublicRoute'
import { User } from '../pages/User'
import Product from '../pages/Product'


const AppRoute = () => {

    let router = createBrowserRouter([
        {

            path: "/",
            element: <ProtectedRoute />,
            children: [{
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '',
                        element: <Home />
                    },

                    {
                        path: 'about',
                        element: <About />
                    },

                    {
                        path: 'contact',
                        element: <Contact />
                    },
                    {
                        path: 'user',
                        element: <User/>
                    },
                    {
                        path: 'product',
                        element: <Product/>
                    }
                ],
            }]


        }, {

            path: "/",
            element: <PublicRoute />,
            children: [{
                path: "auth",
                element: <AuthLayout />,
                children: [{
                    path: 'login',
                    element: <LoginPage />
                }, {
                    path: 'register',
                    element: <RegisterPage />
                }]
            },
            ]
        }

    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoute