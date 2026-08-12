import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { getProductDataAPI } from "../api/productApi";
import { useQueries, useQuery } from "@tanstack/react-query";
import { userProductAPI } from "../hooks/useProduct";
import FilterSidebar from "../components/Filter";
import ProductToolbar from "../components/ProductToolbar";

const ShopPage = () => {
  let { data, isPending, error,filterProducts } = userProductAPI();
const productsToShow = filterProducts === null ? data : filterProducts;
console.log(productsToShow);

  

  return (
    <PageTransition>
      <div className="mx-auto max-w-8xl px-6 py-10">
        <div className="flex">
          {/* Header */}
          <div className="mb-6">
            <div>
              <h1 className="text-2xl font-bold">Shop</h1>

              <p className="mt-1 text-sm text-gray-500">
                Explore our latest products
              </p>
              <FilterSidebar />
            </div>
          </div>
          <div className="p-3">
            <ProductToolbar />

            <div>
              <div
                className=" grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
  "
              >
                {isPending
                  ? Array.from({ length: 10 }).map((_, index) => (
                      <ProductCardSkeleton key={index} />
                    ))
                  : productsToShow?.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ShopPage;
