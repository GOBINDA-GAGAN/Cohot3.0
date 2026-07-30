import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { isLogin } = useContext(Auth);
   


    if (!isLogin) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;