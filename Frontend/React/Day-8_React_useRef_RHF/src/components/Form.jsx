import React, { useRef, useState } from 'react'

const Form = () => {

    const [productData, setProduct] = useState({});

    const inpRef = useRef({});

    const hendelSubmit = (e) => {

        console.log(productData);

        e.preventDefault();
        console.log();
        const obj = {
            pname: inpRef.current.productName.value,
            pPrice: inpRef.current.productPrice.value,
            pCatogory: inpRef.current.catogory.value,
            pimgURL: inpRef.current.imgUrl.value,
        }

        setProduct({obj})
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Add Product
                </h1>

                <form className="space-y-4" onSubmit={hendelSubmit}>
                    <input
                        ref={(e) => (inpRef.current.productName = e)}
                        type="text"
                        placeholder="Product Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        ref={(e) => (inpRef.current.price = e)}
                        type="number"
                        placeholder="Product Price"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                        ref={(e) => (inpRef.current.catogory = e)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="kids">Kids</option>
                    </select>

                    <input
                        ref={(e) => (inpRef.current.imgUrl = e)}
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
    )
}

export default Form