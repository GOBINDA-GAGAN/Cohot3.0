import express from "express";
import urlRouter from "../router/url.routes.js";
import Url from "../models/url.model.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

app.use("/api/url", urlRouter);
app.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    console.log(code);
    

    const url = await Url.findOne({ shortCode: code });
    console.log(url);
    

    if (!url) {
      return res.status(404).json({
        message: "Url not found",
      });
    }
    return res.redirect(302, url.originalUrl);
  } catch (error) {
    return res.status(500).json({
      message:"redirect error",
      error:error.message
    })
  }
});

export default app;
