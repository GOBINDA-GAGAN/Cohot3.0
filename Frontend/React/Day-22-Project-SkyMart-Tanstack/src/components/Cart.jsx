import {
  ArrowBigRight,
  ArrowRight,
  ClosedCaption,
  Cross,
  Delete,
  Trash2,
  X,
} from "lucide-react";
import React from "react";
import Cartitem from "./CartItem";

const Cart = ({ setOpencart }) => {
  const product = {
    id: 1,
    name: "My Product - 1",
    size: "100ML",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Fh4Bwd1OrJdODB9hEBVdvJkfNqg_NXec1XQ3abbRzw&s=10",
    price: 300,
    originalPrice: 400,
    discount: 20,
    description: "This is a short product description...",
    quantity: 2,
  };
  return (
<div className="flex h-screen w-100 flex-col bg-background">

  {/* Header */}
  <div className="flex shrink-0 items-center justify-between bg-foreground px-3 py-2 text-white">
    <h1 className="text-lg font-semibold">My Cart</h1>

    <button onClick={() => setOpencart((prev) => !prev)}>
      <X size={18} />
    </button>
  </div>

  {/* Scrollable content */}
  <div className="flex-1 overflow-y-auto">

    {/* Order Items */}
    <div className="px-3">
      <h2 className="py-2 text-sm font-semibold">
        Order items
      </h2>

      <Cartitem product={product} />
      <Cartitem product={product} />
      <Cartitem product={product} />
      <Cartitem product={product} />
    </div>

    {/* Bill Details */}
    <div className="border-t px-3 py-3">

      <h2 className="mb-3 text-sm font-semibold">
        Bill details
      </h2>

      {/* Items total */}
      <div className="flex justify-between text-xs">
        <span>Items total</span>

        <div className="flex gap-2">
          <span className="text-gray-400 line-through">
            ₹1028
          </span>
          <span className="font-medium">
            ₹940
          </span>
        </div>
      </div>

      {/* Saved */}
      <div className="mt-1 flex justify-between text-xs text-green-600">
        <span>Saved</span>
        <span>₹88</span>
      </div>

      {/* Delivery */}
      <div className="mt-2 flex justify-between text-xs">
        <span>Delivery charge</span>

        <div className="flex gap-2">
          <span className="text-gray-400 line-through">
            ₹12
          </span>
          <span className="font-medium text-green-600">
            FREE
          </span>
        </div>
      </div>

      {/* Handling */}
      <div className="mt-2 flex justify-between text-xs">
        <span>Handling charge</span>
        <span>₹2</span>
      </div>

      {/* Surge */}
      <div className="mt-2 flex justify-between text-xs">
        <span>High demand surge charge</span>

        <div className="flex gap-2">
          <span className="text-gray-400 line-through">
            ₹30
          </span>
          <span className="font-medium text-green-600">
            FREE
          </span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="mt-3 flex justify-between border-t pt-2 text-sm font-bold">
        <span>Grand total</span>
        <span>₹942</span>
      </div>

      {/* Savings */}
      <div className="mt-2 flex justify-between rounded-md bg-green-50 px-2 py-1.5 text-xs font-medium text-green-600">
        <span>Your total savings</span>
        <span>₹88</span>
      </div>

    </div>

  </div>

  {/* Fixed bottom button */}
  <div className="shrink-0 border-t bg-background p-3">
    <button className="flex w-full items-center justify-center  bg-primary py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
      Order Now
      <ArrowRight size={16} className="ml-2" />
    </button>
  </div>

</div>
  );
};

export default Cart;
