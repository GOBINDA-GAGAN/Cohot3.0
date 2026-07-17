import React from "react";

const Navbar = ({ setToogle }) => {


    return (
        <nav className="bg-black text-white flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <h1 className="text-2xl font-bold">LOGO</h1>

            {/* Menu */}
            <div className="flex items-center gap-8">
                <p className="cursor-pointer hover:text-pink-400">Home</p>
                <p className="cursor-pointer hover:text-pink-400">About</p>
                <p className="cursor-pointer hover:text-pink-400">Contact</p>
            </div>

            {/* Button */}
            <button onClick={() => {
                setToogle((prev) => !prev)
            }} className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition">
                Create User
            </button>
        </nav>
    );
};

export default Navbar;