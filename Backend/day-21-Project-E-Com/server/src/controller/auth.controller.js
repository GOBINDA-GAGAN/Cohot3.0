import UserModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserAlredyExist = UserModel.findOne({ email });

    if (isUserAlredyExist) {
      return res.status(400).json({
        message: "User alredy exists with this email address",
        error: [
          {
            field: "email",
            message: "User alredy exists with this email address",
          },
        ],
      });
    }

    console.log(name);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    // logic here

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const logout = async (req, res) => {
  try {
    // logic here

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    // logic here

    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Token refresh failed",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    // logic here

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};
