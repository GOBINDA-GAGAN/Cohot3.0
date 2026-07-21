import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const Navbar = () => {


  const { isLogin, setIsLogin, login } = useContext(Auth);


  const handelLogout = () => {
    setIsLogin(false);
  }


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Link<span className="text-blue-600">Hub</span>
        </h1>

        {/* Navigation */}
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>
        </div>


        {
          isLogin ? (
            <div className="flex gap-6 justify-center items-center">
              <div className=" h-10 w-10 text-2xl items-center flex justify-center rounded-full bg-amber-300 font-semibold">
                <p>
                  {login.name.trim()[0]}
                </p></div>
              <button
                onClick={handelLogout}
                className="py-2 px-4 border-red-400 border rounded-xl text-shadow-2xs font-semibold duration-300  hover:bg-red-300">Logout</button>
            </div>)
            : (<div className="flex gap-4">
              <Link to="/auth/login" className="text-gray-700 hover:text-blue-600 transition">
                Login
              </Link>
              <Link to="/auth/register" className="text-gray-700 hover:text-blue-600 transition">
                Register
              </Link>
            </div>)
        }






      </div >
    </nav >
  );
};

export default Navbar;