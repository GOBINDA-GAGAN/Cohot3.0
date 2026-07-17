import React, { useContext } from 'react'
import { ShoppingCart, Home } from "lucide-react";
import { Myshop } from './context/Mycart';
export const Navbar = () => {
    const { setToggle,cartItem } = useContext(Myshop)
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        Shop<span className="text-black">Kart</span>
                    </div>

                    {/* Menu */}
                    <div className="flex items-center gap-8">
                        <a
                            href="/"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </a>

                        <button
                            onClick={() => setToggle((prev) => !prev)}
                            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                        >
                            <ShoppingCart size={22} />
                            <span>Cart</span>

                            {/* Cart Badge */}
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartItem.length}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
