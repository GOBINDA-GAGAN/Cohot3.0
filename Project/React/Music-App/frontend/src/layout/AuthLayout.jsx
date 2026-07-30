import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">


   
          <Outlet />
        
      </div>
    </div>
  );
};

export default AuthLayout;