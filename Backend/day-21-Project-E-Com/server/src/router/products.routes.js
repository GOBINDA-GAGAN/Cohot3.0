import { Router } from "express";
import { createProduct, getAllProduct } from "../controller/product.controller.js";
import { productValidator } from "../validator/productor.validator.js";
import { authenticate } from "../middlewares/auth.middlewares.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
import multer from "multer";
const productRoute = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    file: 5,
    fileSize: 1 * 1024 * 1024, // 1MB
  },
});

const parseProductData = (req, res, next) => {
  try {
    // Parse price
    if (req.body.price !== undefined) {
      let price = req.body.price;

      if (typeof price === "string") {
        price = JSON.parse(price.trim());
      }

      if (!price || typeof price !== "object" || Array.isArray(price)) {
        return res.status(400).json({
          success: false,
          message: "Price must be an object",
        });
      }

      const amount = Number(price.amount);
      const currency = price.currency;

      if (
        price.amount === undefined ||
        price.amount === null ||
        price.amount === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
      ) {
        return res.status(400).json({
          success: false,
          message: "Price must be a positive number",
        });
      }

      if (
        typeof currency !== "string" ||
        !/^[A-Za-z]{3}$/.test(currency.trim())
      ) {
        return res.status(400).json({
          success: false,
          message: "Currency must be a 3-letter code",
        });
      }

      req.body.price = {
        amount,
        currency: currency.trim().toUpperCase(),
      };
    }

    // Parse sizes
    if (req.body.sizes !== undefined) {
      let sizes = req.body.sizes;

      if (typeof sizes === "string") {
        sizes = JSON.parse(sizes.trim());
      }

      if (!Array.isArray(sizes)) {
        return res.status(400).json({
          success: false,
          message: "Sizes must be an array",
        });
      }

      req.body.sizes = sizes;
    }

    // Parse discount
    if (req.body.discount !== undefined && req.body.discount !== "") {
      const discount = Number(req.body.discount);

      if (!Number.isFinite(discount) || discount < 0 || discount > 100) {
        return res.status(400).json({
          success: false,
          message: "Discount must be between 0 and 100",
        });
      }

      req.body.discount = discount;
    }

    // Parse isActive
    if (req.body.isActive !== undefined) {
      if (req.body.isActive === "true" || req.body.isActive === true) {
        req.body.isActive = true;
      } else if (req.body.isActive === "false" || req.body.isActive === false) {
        req.body.isActive = false;
      } else {
        return res.status(400).json({
          success: false,
          message: "isActive must be true or false",
        });
      }
    }

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in price or sizes",
      error: error.message,
    });
  }
};

productRoute.post(
  "/",
  authenticate,
  checkRole(["seller"]),
  upload.array("images", 5),
  parseProductData,
  productValidator,
  createProduct,
);

productRoute.get("/", authenticate, checkRole(["seller"]), getAllProduct);
productRoute.patch("/unlist/:id",authenticate,checkRole(["seller"],unlistProduct))

export default productRoute;
