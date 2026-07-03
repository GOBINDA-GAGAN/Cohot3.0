

import { Mail, Lock, Eye } from "lucide-react";

const Login = ({ setToogle }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200 p-6">
            <div className="w-full max-w-md  bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40 p-8">



                {/* Heading */}

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account -Login 🚀
                    </h1>
                </div>

                {/* Form */}
                <div className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-gray-200 bg-white px-4 h-12 focus-within:border-sky-500">
                            <Mail size={18} className="text-gray-400" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="ml-3 w-full bg-transparent outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-gray-200 bg-white px-4 h-12 focus-within:border-sky-500">
                            <Lock size={18} className="text-gray-400" />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="ml-3 flex-1 bg-transparent outline-none"
                            />

                            <Eye
                                size={18}
                                className="text-gray-400 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Remember */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <button className="text-sky-600 hover:text-sky-700 font-medium">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login */}
                    <button className="w-full h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                        Login
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-gray-300 flex-1"></div>

                        <span className="text-gray-500 text-sm">
                            OR
                        </span>

                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>






                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <span onClick={() => { setToogle(false) }
                        } className="text-sky-600 font-semibold cursor-pointer">
                            Create Account
                        </span>
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Login;