import { axiosInstance } from "../config/axiosInstance";

 export const getProductDataAPI = async () => {
    try {
  
      const res = await axiosInstance.get("/products");
      return res.data.products; 
    } catch (error) {
      console.log("Error on product:", error);
    }
  };