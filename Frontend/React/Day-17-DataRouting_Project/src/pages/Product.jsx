import React, { useEffect, useState } from 'react'
import ProductRow from '../components/ProductRow';
import axios from 'axios';
import { axiosInstance } from '../config/axiosInstance';

const Product = () => {

  const [productData, setproductsdata] = useState([]);
  const [isloding, setIsloding] = useState(true);
  let getproductData = async () => {
    try {
      let res = await axiosInstance.get("/products")
      console.log("hello");
      console.log(res);

      setproductsdata(res.data)
      setIsloding(false)

    } catch (error) {
console.log(error);


    }

  }



  useEffect(() => { getproductData() }, [])
  return (
    <div className=' grid gap-4 grid-cols-4'>

      {productData.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
        />
      ))}


    </div>
  )
}

export default Product