import React from "react";
import { User, Mail, Lock, Eye, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PageTransition from "../components/PageTransition";
import loginpage from "../../public/loginPage.png";

const RegisterPage = () => {
  const { navigate, register, handleSubmit, errors, registerForm } = useAuth();
  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-4xl bg-white shadow-lg grid grid-cols-2 border border-border">
          {/* Left Side */}
          <div className="bg-primary text-white flex flex-col justify-center items-center">
            <img src={loginpage} alt="login" className="object-fill h-full w-full" />
          </div>

          {/* Right Side */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Register
            </h2>

            <form onSubmit={handleSubmit(registerForm)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground">
                  Full Name
                </label>

                <div className="flex items-center border border-border focus-within:border-primary">
                  <User className="w-5 h-5 text-muted ml-3" />

                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 outline-none bg-transparent text-foreground placeholder:text-muted"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground">
                  Email
                </label>

                <div className="flex items-center border border-border focus-within:border-primary">
                  <Mail className="w-5 h-5 text-muted ml-3" />

                  <input
                    {...register("email", {
                      required: "email is required",
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
                    placeholder="Create a password"
                    className="w-full px-4 py-3 outline-none bg-transparent text-foreground placeholder:text-muted"
                  />

                  <Eye className="w-5 h-5 text-muted mr-3 cursor-pointer" />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground">
                  Confirm Password
                </label>

                <div className="flex items-center border border-border focus-within:border-primary">
                  <Lock className="w-5 h-5 text-muted ml-3" />

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 outline-none bg-transparent text-foreground placeholder:text-muted"
                  />

                  <Eye className="w-5 h-5 text-muted mr-3 cursor-pointer" />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold flex items-center justify-center gap-2 transition"
              >
                <UserPlus size={20} />
                Create Account
              </button>

              <p className="text-center text-muted">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-primary font-medium cursor-pointer hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RegisterPage;
