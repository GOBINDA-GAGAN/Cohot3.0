import React, { useContext } from 'react'
import { Myshop } from './context/Mycart';

const Cart = () => {
    const { cartItem } = useContext(Myshop)
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">My Cart</h1>

            {cartItem.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItem.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 border p-4 rounded-lg"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-contain"
                            />

                            <div className="flex-1">
                                <h2 className="font-semibold">{item.title}</h2>
                                <p className="text-green-600 font-bold">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
