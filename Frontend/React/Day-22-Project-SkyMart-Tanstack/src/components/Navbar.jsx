import { ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const Navbar = () => {
  const { logOut } = useAuth();
  let { user } = useSelector((store) => store.auth);

  const [isCartOpen, setOpencart] = useState(false);

  

  const handelLogout = () => {
    logOut();
  };

  const handelCartOpen = () => {
    setOpencart((prev) => !prev);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-white/20 backdrop-blur-3xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-primary">SkyMart</h1>

          <div className="flex items-center gap-6">
            <Link to="/" className=" font-semibold text-foreground hover:text-primary">
              Home
            </Link>

            <Link to="/shop" className=" font-semibold text-foreground hover:text-primary">
              Shop
            </Link>

            <Link to="/about" className=" font-semibold text-foreground hover:text-primary">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span>
              Hi, <span className="font-bold">{user?.name?.split(" ")[0]}</span>
            </span>

            <button
              onClick={handelCartOpen}
              className="p-2 hover:bg-primary/10"
            >
              <ShoppingCart size={20} />
            </button>

            <button
              onClick={handelLogout}
              className="bg-red-400/10 p-2 hover:bg-red-500/10 hover:text-red-500"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart system */}
      {isCartOpen && (
        <div
          onClick={() => setOpencart(false)}
          className="fixed inset-0 z-[90] bg-black/10 backdrop-blur-md"
        />
      )}

      {/* Cart drawer */}
      <div
        className={`
      fixed top-0 right-0 z-100 h-screen 
      bg-white shadow-2xl
      transition-transform duration-500 ease-in-out
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <Cart setOpencart={setOpencart} />
      </div>
    </>
  );
};

export default Navbar;
