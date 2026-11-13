
import { body, validationResult } from "express-validator";

export const addToCartValidator = [
  body("productId")
    .notEmpty()
    .withMessage("Product ID is required")
    .bail()
    .isMongoId()
    .withMessage("Invalid product ID"),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1")
    .toInt(),

  body("sizes")
    .notEmpty()
    .withMessage("Product size is required")
    .bail()
    .isString()
    .withMessage("Size must be a string")
    .bail()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Size cannot be empty"),

  // Validation error handler
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map(({ path, msg }) => ({
          field: path,
          message: msg,
        })),
      });
    }

    next();
  },
];
