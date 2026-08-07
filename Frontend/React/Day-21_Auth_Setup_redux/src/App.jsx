import React, { useCallback, useEffect, useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import axios from "axios";
import { h1 } from "framer-motion/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setuser] = useState({
    name: "alok",
    id: 789,
  });

  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const greet = useCallback(() => {
    console.log(" good evening");
  }, []);

  let getProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

 

  console.log(searchProducts);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchProducts);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchProducts]);

   const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className=" flex  gap-40">
        <div className="">
          <h1>count is:{count}</h1>
          <button
            style={{
              border: "1px solid red",
              borderShape: `shape(
      from 1% 4%,
      line to 24% 1%,
      line to 49% 3%,
      line to 75% 1%,
      line to 99% 5%,
      line to 97% 30%,
      line to 99% 62%,
      line to 96% 97%,
      line to 70% 99%,
      line to 45% 96%,
      line to 19% 99%,
      line to 2% 95%,
      line to 3% 62%,
      line to 10% 34%,
      close
    )`,
            }}
            className="px-4 py-4 rounded-md"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            {" "}
            clic me{" "}
          </button>
        </div>

        <div className="mt-4 w-[600px]">
          <input
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
            className="w-full border-2  p-2"
            type="text"
            placeholder=" search product"
          />
          <div className="mt-3 bg-amber-50 w-full">
            <div className="">
              {filteredProducts.map((value, index) => {
                return (
                  <h1
                    className="p-3 bg-gray-100 space-y-1  hover:bg-red-200"
                    key={index}
                  >
                    {value.title}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 
      <Home greet={greet} /> */}
      {/* <About greet={greet} /> */}
    </div>
  );
};

export default App;
