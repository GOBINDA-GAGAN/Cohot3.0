import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {

}
return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Add Product
                </h1>

                <form className="space-y-4" onSubmit={handleSubmit((data) => console.log(data))}>
                    <input

                        type="text"
                        placeholder="Product Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input

                        type="number"
                        placeholder="Product Price"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select

                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="kids">Kids</option>
                    </select>

                    <input

                        type="text"
                        placeholder="Image URL"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>

    </div>
)
}

export default RHF