import { Trash2, Plus, Minus } from "lucide-react";

const CartItem = ({ product }) => {


  return (
    <div className="flex gap-3 border-b border-gray-200 py-3">
      {/* Image */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Name + Delete */}
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-gray-900">
              {product.name}
            </h2>

            <p className="text-[11px] text-gray-500">{product.size}</p>
          </div>

          <button className="ml-2 text-gray-400 hover:text-red-500">
            <Trash2 size={15} />
          </button>
        </div>

        {/* Price */}
        <div className="mt-1 flex items-center gap-1.5">
          <span className="text-sm font-bold">${product.price}</span>

          <span className="text-[11px] text-gray-400 line-through">
            ${product.originalPrice}
          </span>

          <span className="text-[10px] font-semibold text-green-600">
            {product.discount}% OFF
          </span>
        </div>

        {/* Bottom row */}
        <div className="mt-2 flex items-center justify-between">
          <p className="max-w-[150px] truncate text-[11px] text-gray-500">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-md border border-gray-200">
            <button className="flex h-6 w-6 items-center justify-center hover:bg-gray-100">
              <Minus size={11} />
            </button>

            <span className="flex h-6 w-7 items-center justify-center border-x border-gray-200 text-xs font-medium">
              {product.quantity}
            </span>

            <button className="flex h-6 w-6 items-center justify-center hover:bg-gray-100">
              <Plus size={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
