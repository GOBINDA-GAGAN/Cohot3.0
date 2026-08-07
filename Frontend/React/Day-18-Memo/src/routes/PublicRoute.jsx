

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
    const { isLogin } = useContext(Auth);

    if (isLogin) {
        return <Navigate to="/"/>;
    }

    return <Outlet />;
};

export default PublicRoute;













