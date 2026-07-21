import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../layout/Layout'
import Contact from '../pages/Contact'


const AppRoute = () => {

    let router = createBrowserRouter([
        {
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
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoute