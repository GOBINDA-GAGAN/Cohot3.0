import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "seller"],
    },
  },

  {
    timestamps: true,
  },
);

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
