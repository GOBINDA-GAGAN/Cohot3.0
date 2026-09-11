import express from "express";
import urlRouter from "../router/url.routes.js";




const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});


app.use("/api/url", urlRouter);



export default app;
