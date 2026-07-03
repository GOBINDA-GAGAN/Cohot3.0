// Register.jsx

import { User, Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";

const Register = ({ setToogle, setUser }) => {


    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: ""
    })


    const hendelonChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const submitForm = (e) => {
        e.preventDefault()

        setUser((prev) => [...prev, formData]);



        setFormData({
            name: "",
            password: "",
            email: ""
        })
        console.log(formData);


    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200 p-6">
            <div className="w-full max-w-md  border border-white/40 bg-white/80 backdrop-blur-xl shadow-2xl p-8">

                {/* Logo */}


                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account -Register 🚀
                    </h1>
                </div>

                {/* Form */}
                <form>


                    <div className="space-y-5 grid grid-cols-2 gap-2">

                        {/* Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <div className="mt-2 flex items-center h-12 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-sky-500">
                                <User size={18} className="text-gray-400" />

                                <input onChange={hendelonChange}
                                    name="name"
                                    value={formData.name}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="ml-3 w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <div className="mt-2 flex items-center h-12 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-sky-500">
                                <Mail size={18} className="text-gray-400" />

                                <input onChange={hendelonChange}
                                    name="email"
                                    value={formData.email}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="ml-3 w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <div className="mt-2 flex items-center h-12 rounded-xl border border-gray-200 bg-white px-4 focus-within:border-sky-500">
                                <Lock size={18} className="text-gray-400" />

                                <input onChange={hendelonChange}
                                    name="password"
                                    value={formData.password}
                                    type="password"
                                    placeholder="Create password"
                                    className="ml-3 flex-1 bg-transparent outline-none"
                                />

                                <Eye size={18} className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>

                    </div>
                    {/* Terms */}
                    <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="mt-1" />
                        <span>
                            I agree to the{" "}
                            <span className="text-sky-600 font-medium">
                                Terms & Conditions
                            </span>{" "}
                            and{" "}
                            <span className="text-sky-600 font-medium">
                                Privacy Policy
                            </span>.
                        </span>
                    </label>


                    {/* Register Button */}
                    <button onClick={submitForm} className="w-full h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                        Create Account
                    </button>
                </form>
                {/* Divider */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>



                {/* Footer */}
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <span onClick={() => { setToogle(true) }} className="font-semibold text-sky-600 cursor-pointer">
                        Login
                    </span>
                </p>

            </div>
        </div>

    );
};

export default Register;