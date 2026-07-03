import React from "react";
import { Mail, User, Lock } from "lucide-react";

const UserCard = ({ user }) => {
    console.log(user);
    
  return (
    <div className="w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg hover:shadow-xl transition">
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </div>

      <h2 className="mt-4 text-center text-xl font-semibold">
        {user?.name}
      </h2>

      <div className="mt-5 space-y-3 text-gray-600">

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-sky-500" />
          <span>{user?.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Lock size={18} className="text-sky-500" />
          <span>{user?.password}</span>
        </div>

      </div>
    </div>
  );
};

export default UserCard;