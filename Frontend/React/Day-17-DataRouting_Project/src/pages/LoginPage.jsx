import { Link, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
    const navigate = useNavigate()
    let { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [error, setError] = useState("");

    const { registerUser, login, setLogin, isLogin, setIsLogin } = useContext(Auth);

    console.log("islogin", isLogin);
    localStorage.setItem("isLogin", JSON.stringify(isLogin));

    const formSubmit = (data) => {

        const user = registerUser.find((user) => user.email === data.email && user.password === data.password)
        if (!user) {
            setError("Invalid email or password");
            return
        }
        setLogin(user)
        setIsLogin(true);
        console.log("islogin", isLogin);

        localStorage.setItem("loginUser", JSON.stringify(user));
        localStorage.setItem("isLogin", JSON.stringify(true)); // ✅ Save login status
        toast.success("User logged in successfully");
        navigate("/")
        reset()

    }
    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-900">Login</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Sign in to your account
                    </p>

                    <form onSubmit={handleSubmit(formSubmit)} className="mt-6 space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                {...register("email", { required: "Name is required" })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
                            />
                            <p className=" text-sm text-red-500">{errors.name && errors.name.message}</p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
                            />
                            <p className=" text-sm text-red-500">{errors.password && errors.password.message}</p>
                        </div>
                        {
                            error && <p className="text-sm text-red-500">{error}</p>
                        }

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-black py-2.5 text-white transition hover:opacity-90"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/auth/register")}
                            className="font-medium text-black hover:underline"
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