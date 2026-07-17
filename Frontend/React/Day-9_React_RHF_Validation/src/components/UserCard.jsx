import React from "react";

const UserCard = ({ user }) => {
    console.log(user);
    
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg p-5">
            {/* User Image */}
            <img
                src={user.img}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-pink-500"
            />

            {/* User Details */}
            <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.mobile}</p>
                <p className="text-gray-600">+91 {user.contact}</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Update
                </button>

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;