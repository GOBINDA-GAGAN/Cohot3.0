import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home/pages/Home";
import Login from "../modules/auth/pages/LoginPage";
import Register from "../modules/auth/pages/RegisterPage";
import Profile from "../modules/home/pages/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;