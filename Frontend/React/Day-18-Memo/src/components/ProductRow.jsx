const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative flex h-52 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="mb-1 text-xs text-gray-400">
          Product #{product.id}
        </p>

        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95">
            Add to cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;