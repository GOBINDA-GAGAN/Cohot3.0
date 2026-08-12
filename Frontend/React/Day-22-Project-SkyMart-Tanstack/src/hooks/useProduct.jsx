import { useQuery } from "@tanstack/react-query";
import { getProductDataAPI } from "../api/productApi";
import { useEffect, useState } from "react";

export const userProductAPI = () => {
  const [filterProducts, setFilterProducts] = useState(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataAPI,
    staleTime: 1000,
  });

  const searchProduct = (searchParams) => {
    if (!data) return;

    const filterdata = data.filter((value) =>
      value.title
        .toLowerCase()
        .includes(searchParams.toLowerCase())
    );

    setFilterProducts(filterdata);
  };

  return {
    data,
    isPending,
    error,
    searchProduct,
    filterProducts,
  };
};