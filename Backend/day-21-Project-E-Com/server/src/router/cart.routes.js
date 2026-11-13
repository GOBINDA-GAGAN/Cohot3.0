
import router from "express";
import { addtocart, getAllcartItem } from "../controller/cart.controller.js";
import { authenticate } from "../middlewares/auth.middlewares.js";
const cartRouter = router();

cartRouter.post("/",authenticate,addtocart);
cartRouter.get("/",authenticate,getAllcartItem);

export default cartRouter;
