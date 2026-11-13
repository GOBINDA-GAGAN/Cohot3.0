import express from "express";
import userRouter from "../router/user.routes.js";
import authRouter from "../router/auth.routes.js";
import cookieParser from "cookie-parser";
import productRoute from "../router/products.routes.js";
import cartRouter from "../router/cart.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/product",productRoute)
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cart",cartRouter)

export default app;
