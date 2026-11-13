import ProductModal from "../models/product.modal.js";
import CartModel from "../models/cart.modal.js";


export const addtocart = async () => {
  try {
    const { productId, quantity, size } = req.body();

    const product = await ProductModal.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const selectedSize = product.sizes.find((s) => s.size === size);
    if (!selectedSize) {
      return res.status(404).json({
        message: "Invalid Size",
      });
    }

    if (selectedSize.stock < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
      });
    }

    let cart = await CartModel.findOne({ user: req.user.userId });
    if (!cart) {
      await cartModal.create({ user: req.user.userId });
    }

    const productIncart = cart.products.find(
      (p) => p._id.toStrign() === productId,
    );

    if (productIncart) {
      if (productIncart.quantity + quantity > selectedSize.stock) {
        return res.status(404).json({
          message: "Insuffent stock",
        });
      }

      await CartModel.updateOne(
        {
          user: req.user.userId,
          "products.prduct": productId,
          "products.size": size,
        },
        {
          $inc: {
            "products.$.quantity": quantity,
          },
        },
      );
    }

    await cartModal.findOneAndDelete(
      {
        user: re.user.userId,
      },
      {
        $push: {
          product: productId,
          quantity: quantity,
          size: size,
        },
      },
    );

    return res.status(200).json({
      message: "Product add  to cart",
    });
  } catch (error) {
    console.error("cart error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};

export const getAllcartItem=async()=>{
  try {
    
    
  } catch (error) {
    console.error("cart error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
}
