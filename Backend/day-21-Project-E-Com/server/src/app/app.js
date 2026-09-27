import express from "express";
import userRouter from "../router/user.routes.js";
import authRouter from "../router/auth.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users", userRouter);

export default app;
