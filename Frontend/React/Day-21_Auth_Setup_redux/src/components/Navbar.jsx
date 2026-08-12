import { ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { logOut } = useAuth();
  let { user } = useSelector((store) => store.auth);
  console.log(user.name.split(" ")[0]);

  const handelLogout = () => {
    logOut();
  };
  return (
    <nav className="border-b border-border bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">SkyMart</h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-foreground transition-colors hover:text-primary"
          >
            Home
          </a>

          <a
            href="/shop"
            className="text-foreground transition-colors hover:text-primary"
          >
            Shop
          </a>

          <a
            href="/about"
            className="text-foreground transition-colors hover:text-primary"
          >
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span className="text-foreground">
            Hi,<span className="font-bold">{user.name.split(" ")[0]}</span>
          </span>

          <button className="rounded-lg p-2 text-foreground transition hover:bg-primary/10 hover:text-primary">
            <ShoppingCart size={20} />
          </button>

          <button
            onClick={handelLogout}
            className="rounded-lg p-2 text-foreground transition hover:bg-red-500/10 hover:text-red-500"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
