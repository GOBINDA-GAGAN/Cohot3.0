import React from "react";
import { Mail, Lock, Eye, SquareArrowOutUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PageTransition from "../components/PageTransition";
const LoginPage = () => {
  const { navigate, register, handleSubmit, errors,loginForm } = useAuth();
  return (
    <PageTransition>
     <div className="min-h-screen bg-background flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white shadow-xl p-8 border border-border">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-foreground">
        Welcome Back 👋
      </h1>

      <p className="text-muted mt-2">
        Sign in to continue to your account
      </p>
    </div>

    <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-foreground">
          Email
        </label>

        <div className="flex items-center border border-border focus-within:border-primary">
          <Mail className="w-5 h-5 text-muted ml-3" />

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 outline-none bg-transparent text-foreground placeholder:text-muted"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-medium text-foreground">
          Password
        </label>

        <div className="flex items-center border border-border focus-within:border-primary">
          <Lock className="w-5 h-5 text-muted ml-3" />

          <input
            {...register("password", {
              required: "password is required",
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 outline-none bg-transparent text-foreground placeholder:text-muted"
          />

          <Eye className="w-5 h-5 text-muted mr-3 cursor-pointer" />
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer text-foreground">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="button"
          className="flex items-center gap-1 text-primary hover:underline"
        >
          Forgot Password
          <SquareArrowOutUpRight size={16} />
        </button>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold flex items-center justify-center gap-2 transition"
      >
        Login
        <SquareArrowOutUpRight size={18} />
      </button>
    </form>

    <p className="text-center text-muted mt-6">
      Don't have an account?{" "}
      <button
        onClick={() => navigate("/register")}
        className="text-primary font-medium cursor-pointer hover:underline"
      >
        Register
      </button>
    </p>
  </div>
</div>
    </PageTransition>
  );
};

export default LoginPage;
