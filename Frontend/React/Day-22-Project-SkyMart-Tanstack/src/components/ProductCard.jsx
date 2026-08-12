import { Tag, Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="w-full overflow-hidden border border-border bg-background">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden bg-gray-50">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="h-full w-full object-contain p-5 transition duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-2.5 sm:p-3">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-1.5 sm:gap-2">
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xs font-semibold text-gray-900 sm:text-sm">
              {product.title}
            </h2>

            <p className="mt-0.5 truncate text-[10px] text-gray-500 sm:text-xs">
              {product.brand} · {product.category}
            </p>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-0.5 bg-yellow-50 px-1.5 py-1 text-[9px] text-yellow-600 sm:gap-1 sm:text-[10px]">
            <Star
              size={10}
              className="sm:h-[11px] sm:w-[11px]"
              fill="currentColor"
            />
            {product.rating}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-0.5 rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-medium text-primary sm:gap-1 sm:px-2 sm:py-1 sm:text-[9px]"
            >
              <Tag size={8} className="sm:h-[9px] sm:w-[9px]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
          <span className="text-base font-bold sm:text-lg">
            ₹{product.price}
          </span>

          <span className="text-[10px] text-gray-400 line-through sm:text-xs">
            ₹{originalPrice}
          </span>

          <span className="rounded bg-green-100 px-1 py-0.5 text-[8px] font-semibold text-green-600 sm:px-1.5 sm:text-[9px]">
            {product.discountPercentage.toFixed(0)}% OFF
          </span>
        </div>

        {/* Stock */}
        <p className="mt-1 text-[9px] font-medium text-green-600 sm:text-[10px]">
          ● {product.availabilityStatus}
        </p>

        {/* Controls */}
        <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3">
          {/* Quantity */}
          <div className="flex shrink-0 items-center overflow-hidden border border-gray-200">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="flex h-7 w-7 items-center justify-center hover:bg-gray-100 sm:h-8 sm:w-8"
            >
              <Minus size={11} className="sm:h-[13px] sm:w-[13px]" />
            </button>

            <span className="flex h-7 w-8 items-center justify-center border-x border-gray-200 text-xs font-semibold sm:h-8 sm:w-9 sm:text-sm">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => Math.min(product.stock, prev + 1))
              }
              className="flex h-7 w-7 items-center justify-center hover:bg-gray-100 sm:h-8 sm:w-8"
            >
              <Plus size={11} className="sm:h-[13px] sm:w-[13px]" />
            </button>
          </div>

          {/* Add to Cart */}
          <button className="flex min-w-0 flex-1 items-center justify-center gap-1  bg-primary px-2 py-2 text-[10px] font-semibold text-white transition hover:bg-primary-hover sm:gap-1.5 sm:px-3 sm:text-xs">
            <ShoppingCart
              size={12}
              className="shrink-0 sm:h-[14px] sm:w-[14px]"
            />

            <span className="truncate">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
