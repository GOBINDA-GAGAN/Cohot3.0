import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 200,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    images: {
      type: [
        {
          type: String,
          required: true,
        },
      ],
      validate: {
        validator: (images) => images.length <= 5,
        message: "A product can have at most 5 images",
      },
    },

    price: {
      amount: {
        type: Number,
        required: true,
        min: 0,
      },

      currency: {
        type: String,
        enum: ["INR", "USD", "EUR", "GBP"],
        default: "INR",
      },
    },

    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    sizes: [
      {
        size: {
          type: String,
          enum: ["XS", "S", "M", "L", "XL", "XXL"],
          required: true,
        },

        stock: {
          type: Number,
          required: true,
          min: 0,
          default: 0,
        },
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const ProductModal = mongoose.model("Product", productSchema);

export default ProductModal;


//  {
//     "name": "Premium Cotton T-Shirt",
//     "description": "Comfortable premium cotton t-shirt for everyday casual wear.",
//     "category": "T-Shirts",
//     "brand": "Nike",
//     "images": [
//       "https://example.com/images/nike-tshirt-1.jpg",
//       "https://example.com/images/nike-tshirt-2.jpg"
//     ],
//     "price": {
//       "amount": 1299,
//       "currency": "INR"
//     },
//     "discount": 10,
//     "sku": "NIKE-TS-001",
//     "sizes": [
//       {
//         "size": "S",
//         "stock": 20
//       },
//       {
//         "size": "M",
//         "stock": 35
//       },
//       {
//         "size": "L",
//         "stock": 25
//       },
//       {
//         "size": "XL",
//         "stock": 15
//       }
//     ],
//     "isActive": true,
//     "seller": "68f123456789abcdef123456"
//   },