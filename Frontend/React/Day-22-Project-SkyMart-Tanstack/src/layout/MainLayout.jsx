import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-17">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
