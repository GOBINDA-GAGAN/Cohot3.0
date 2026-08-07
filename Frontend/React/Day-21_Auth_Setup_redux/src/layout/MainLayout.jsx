import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet, useLocation, } from 'react-router-dom'
import { pre } from 'framer-motion/client';

const Layout = () => {

    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Navbar */}

            <div className='sticky top-0 left-0 z-100'>

            <Navbar />
            </div>

            {/* Below Navbar */}
            <div className="flex">

                {/* Sidebar */}
                <aside className="sticky top-18 h-[calc(100vh-4rem)] w-62.5 shrink-0 border-r-3 border-gray-800 bg-blue-100 p-2">

                    <div className="flex flex-col gap-2 mt-4">

                        <Link to="/user">
                            <div className="flex items-center justify-between rounded-md bg-blue-400 p-2">
                                <span className="text-sm font-semibold">User</span>

                                {location.pathname === "/user" && (
                                    <div className="h-6 w-1 rounded-full bg-red-600" />
                                )}
                            </div>
                        </Link>

                        <Link to="/product">
                            <div className="flex items-center justify-between rounded-md bg-blue-400 p-2">
                                <span className="text-sm font-semibold">Product</span>

                                {location.pathname === "/product" && (
                                    <div className="h-6 w-1 rounded-full bg-red-600" />
                                )}
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="flex items-center justify-between rounded-md bg-blue-400 p-2">
                                <span className="text-sm font-semibold">Home</span>

                                {location.pathname === "/" && (
                                    <div className="h-6 w-1 rounded-full bg-red-600" />
                                )}
                            </div>
                        </Link>

                    </div>
                </aside>

                {/* Page Content */}
                <main className="min-w-0 flex-1 p-3">
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default Layout