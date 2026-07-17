import React from "react";
import { useForm } from 'react-hook-form';

const Form = ({ setUser,setToogle }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode:"onChange"
    });


    const fromSubmit = (data) => {
   

        setUser((prev) => [...prev, data])
        setToogle((prev)=>{!prev})




    }
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-pink-500">
                Create User
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(fromSubmit)}>
                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input {...register("img", { required: "url is required" })}
                        type="text"
                        placeholder="Enter image URL"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {
                        errors.img && <p className="text-red-500">{errors.img.message}</p>
                    }

                </div>

                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input {...register("name", { required: "name is required" })}
                        type="text"
                        placeholder="Enter name"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {
                        errors.name && <p className="text-red-500">{errors.name.message}</p>
                    }
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input {...register("email", { required: "email is required" })}
                        type="email"
                        placeholder="Enter email"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {
                        errors.email && <p className="text-red-500">{errors.email.message}</p>
                    }
                </div>

                {/* Contact */}
                <div>
                    <label className="block mb-1 font-medium">Contact</label>
                    <input {...register("contact", {
                        required: "phone is required", minLength: {
                            value: 10,
                            message: "min 10  digits are required"
                        }
                        , maxLength: {
                            value: 10,
                            message: "max 10  digits are required"
                        }
                    })}
                        type="tel"
                        placeholder="Enter contact number"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {
                        errors.contact && <p className="text-red-500">{errors.contact.message}</p>
                    }
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                >
                    Create User
                </button>
            </form>
        </div>
    );
};

export default Form;