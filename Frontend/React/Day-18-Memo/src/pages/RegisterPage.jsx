import { Link, Navigate, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const navigate = useNavigate();

    const { setRegisterUser, registerUser } = useContext(Auth)

    let { register, handleSubmit, reset, formState: { errors } } = useForm();

    const formSubmit = (data) => {
        const existUser = registerUser.some(
            (user) => user.email === data.email
        );


        if (existUser) {
            toast.error("User already exists");
            return;
        }

        const updatedUsers = [...registerUser, data];

        setRegisterUser(updatedUsers);
        localStorage.setItem("registerUser", JSON.stringify(updatedUsers));
        toast.success("User register successfully");

        reset()


    }

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Register to get started
                    </p>

                    <form onSubmit={handleSubmit(formSubmit)}
                        className="mt-6 space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
                            />
                            <p className=" text-sm text-red-500">{errors.name && errors.name.message}</p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                {...register("email", { required: "email is required" })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
                            />
                            <p className=" text-sm text-red-500">{errors.email && errors.email.message}</p>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    }
                                }
                                )}
                                type="password"
                                placeholder="Create a password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-black"
                            />
                            <p className=" text-sm text-red-500">{errors.password && errors.password.message}</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-black py-2.5 text-white transition hover:opacity-90"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/auth/login")}
                            className="font-medium text-black hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </PageTransition>
    );
};

export default RegisterPage;