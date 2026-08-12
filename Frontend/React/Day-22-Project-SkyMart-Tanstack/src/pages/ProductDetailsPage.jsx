import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Star,
  Tag,
  Package,
  Truck,
  ShieldCheck,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Check,
} from "lucide-react";
import PageTransition from "../components/PageTransition";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(res.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <PageTransition>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <ProductDetailsSkeleton />
        </div>
      </PageTransition>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">
          Product not found
        </p>
      </div>
    );
  }

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const increaseQuantity = () => {
    setQuantity((prev) =>
      Math.min(product.stock, prev + 1)
    );
  };

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      Math.max(1, prev - 1)
    );
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 flex items-center gap-2 text-sm text-gray-500 transition hover:text-primary"
        >
          <ArrowLeft size={17} />
          Back to Shop
        </button>

        {/* Product */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT - Images */}
          <div>

            {/* Main Image */}
            <div className="aspect-square overflow-hidden  bg-gray-50">
              <img
                src={
                  product.images?.[selectedImage] ||
                  product.thumbnail
                }
                alt={product.title}
                className="h-full w-full object-contain p-8 sm:p-12"
              />
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="mt-3 flex gap-3 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    className={`h-20 w-20 shrink-0 overflow-hidden  border-2 bg-gray-50 ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Details */}
          <div className="flex flex-col">

            {/* Category */}
            <div className="flex items-center gap-2">
              <span className=" bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
                {product.category}
              </span>

              <span className="flex items-center gap-1 text-sm text-yellow-500">
                <Star
                  size={15}
                  fill="currentColor"
                />
                {product.rating}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>

            {/* Brand */}
            <p className="mt-2 text-sm text-gray-500">
              Brand:{" "}
              <span className="font-semibold text-gray-800">
                {product.brand}
              </span>
            </p>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-gray-600">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price}
              </span>

              <span className="text-base text-gray-400 line-through">
                ₹{originalPrice}
              </span>

              <span className=" bg-green-100 px-2 py-1 text-xs font-bold text-green-600">
                {product.discountPercentage.toFixed(0)}% OFF
              </span>
            </div>

            {/* Stock */}
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="h-2 w-2  bg-green-500 rounded-full" />

              <span className="font-medium text-green-600 ">
                {product.availabilityStatus}
              </span>

              <span className="text-gray-400">
                · {product.stock} available
              </span>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.tags?.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1  bg-gray-100 px-3 py-1.5 text-xs text-gray-600"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-2 text-sm font-semibold">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden  border border-gray-200">

                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-100 disabled:opacity-40"
                >
                  <Minus size={15} />
                </button>

                <span className="flex h-10 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-100 disabled:opacity-40"
                >
                  <Plus size={15} />
                </button>

              </div>
            </div>

            {/* Add Cart */}
            <button className="mt-5 flex w-full items-center justify-center gap-2  bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            {/* Extra Information */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3  bg-gray-50 p-3">
                <Truck
                  size={19}
                  className="text-primary"
                />

                <div>
                  <p className="text-xs font-semibold">
                    Shipping
                  </p>

                  <p className="text-[11px] text-gray-500">
                    {product.shippingInformation}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3  bg-gray-50 p-3">
                <ShieldCheck
                  size={19}
                  className="text-green-500"
                />

                <div>
                  <p className="text-xs font-semibold">
                    Warranty
                  </p>

                  <p className="text-[11px] text-gray-500">
                    {product.warrantyInformation}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3  bg-gray-50 p-3">
                <Package
                  size={19}
                  className="text-primary"
                />

                <div>
                  <p className="text-xs font-semibold">
                    Minimum Order
                  </p>

                  <p className="text-[11px] text-gray-500">
                    {product.minimumOrderQuantity} units
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3  bg-gray-50 p-3">
                <Check
                  size={19}
                  className="text-green-500"
                />

                <div>
                  <p className="text-xs font-semibold">
                    Returns
                  </p>

                  <p className="text-[11px] text-gray-500">
                    {product.returnPolicy}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const ProductDetailsSkeleton = () => {
  return (
    <div className="grid animate-pulse grid-cols-1 gap-8 lg:grid-cols-2">

      <div>
        <div className="aspect-square  bg-gray-200" />

        <div className="mt-3 flex gap-3">
          <div className="h-20 w-20  bg-gray-200" />
          <div className="h-20 w-20  bg-gray-200" />
          <div className="h-20 w-20  bg-gray-200" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-6 w-24  bg-gray-200" />
        <div className="h-10 w-3/4  bg-gray-200" />
        <div className="h-4 w-32  bg-gray-200" />
        <div className="h-20 w-full  bg-gray-200" />
        <div className="h-10 w-40  bg-gray-200" />
        <div className="h-12 w-full  bg-gray-200" />
        <div className="h-20 w-full  bg-gray-200" />
      </div>

    </div>
  );
};

export default ProductDetailsPage;