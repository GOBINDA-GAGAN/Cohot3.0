import { LogIn } from "lucide-react";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlices";
import PublicProtectedRoute from "./PublicProtectedRoute";
import MainProtectedRoute from "./MainProtectedRoute";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

let router = createBrowserRouter([
  {
    element: <PublicProtectedRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <MainProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
          {
            path: "product/:id",
            element: <ProductDetailsPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
]);

const AppRoute = () => {
  const dispatch = useDispatch();
  const hydredUser = () => {
    let logedInuser = JSON.parse(localStorage.getItem("logedInuser"));
    if (!logedInuser) {
      toast.error("Unauthorized user");
    }
    dispatch(addUser(logedInuser));
  };
  useEffect(() => {
    hydredUser();
  }, []);
  return <RouterProvider router={router} />;
};

export default AppRoute;
