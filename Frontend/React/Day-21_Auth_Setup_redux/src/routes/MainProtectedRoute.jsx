import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const MainProtectedRoute = () => {
  let { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default MainProtectedRoute;
