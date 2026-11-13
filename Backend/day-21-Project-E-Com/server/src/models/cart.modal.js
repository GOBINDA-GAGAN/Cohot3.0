import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  products: [
    {
      prodict: {
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
      size: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});
const cartModal = mongoose.model("Cart", cartSchema);

export default cartModal;