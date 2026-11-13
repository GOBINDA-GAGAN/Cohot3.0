import { uploadFile } from "../services/stroage.service.js";
import ProductModal from "../models/product.modal.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      brand,
      price,
      discount,
      sku,
      sizes,
      isActive,
    } = req.body;

    // Get uploaded files
    const files = req.files || [];

    // Validate image count
    if (files.length > 5) {
      return res.status(400).json({
        success: false,
        message: "A product can have at most 5 images",
      });
    }

    // Upload images to ImageKit
    const uploadResponse = await Promise.all(
      files.map((file) =>
        uploadFile({
          buffer: file.buffer,
          fileName: file.originalname,
        }),
      ),
    );

    // Save only image URLs
    const images = uploadResponse.map((image) => image.url);

    // Parse price if sent as JSON string
    const parsedPrice = typeof price === "string" ? JSON.parse(price) : price;

    // Parse sizes if sent as JSON string
    const parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;

    // Create product matching the schema
    const product = await ProductModal.create({
      name,
      description,
      category,
      brand,
      images,

      price: {
        amount: Number(parsedPrice.amount),
        currency: parsedPrice.currency || "INR",
      },

      discount: Number(discount || 0),
      sku,

      sizes: (parsedSizes || []).map((item) => ({
        size: item.size,
        stock: Number(item.stock || 0),
      })),

      isActive: isActive === "false" ? false : true,
      seller: req.user.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: {
        product,
      },
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await ProductModal.find().sort({ createdAt: -1 }).lean();

    const metaData = {
      totalProducts: products.length,

      totalActiveProducts: products.filter((product) => product.isActive)
        .length,

      totalInactiveProducts: products.filter((product) => !product.isActive)
        .length,

      totalCategories: new Set(products.map((product) => product.category))
        .size,

      totalBrands: new Set(products.map((product) => product.brand)).size,
    };

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      metaData,
      data: {
        products,
      },
    });
  } catch (error) {
    console.error("Get all products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

export const unlistProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("cart error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};
