import { body, validationResult } from "express-validator";

export const productValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be between 3 and 100 characters"),

  body("description")
    .exists()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .isLength({ min: 10, max: 200 })
    .withMessage("Description must be between 10 and 200 characters"),

  body("category")
    .exists()
    .withMessage("Category is required")
    .isString()
    .withMessage("Category must be a string"),

  body("brand")
    .exists()
    .withMessage("Brand is required")
    .isString()
    .withMessage("Brand must be a string"),

  body("price.amount")
    .exists()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((value) => value >= 0)
    .withMessage("Price cannot be negative"),

  body("price.currency")
    .optional()
    .isIn(["INR", "USD", "EUR", "GBP"])
    .withMessage("Invalid currency"),

  body("discount")
    .optional()
    .isNumeric()
    .withMessage("Discount must be a number")
    .custom((value) => value >= 0 && value <= 100)
    .withMessage("Discount must be between 0 and 100"),

  body("sku")
    .exists()
    .withMessage("SKU is required")
    .isString()
    .withMessage("SKU must be a string"),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive must be true or false"),

  body("sizes")
    .optional()
    .isArray()
    .withMessage("Sizes must be an array"),

  // Validation result middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];