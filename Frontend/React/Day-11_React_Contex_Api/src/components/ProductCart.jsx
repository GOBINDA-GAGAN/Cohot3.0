import { Star, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Myshop } from "./context/Mycart";


const ProductCard = ({ product}) => {

  const {setCartItem}=useContext(Myshop);
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">
      {/* Product Image */}
      <div className="h-64 flex items-center justify-center bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button

          onClick={() => setCartItem((prev) => [...prev,product])}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;