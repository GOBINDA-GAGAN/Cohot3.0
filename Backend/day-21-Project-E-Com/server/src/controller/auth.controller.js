import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../utils/createToken.js";
import { verifyRefreshToken } from "../utils/jwt.js";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check existing user
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email address",
        error: [
          {
            field: "email",
            message: "User already exists with this email address",
          },
        ],
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    // 2. Create user
    const user = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    const payload = { userId: user._id, role: user.role };

    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    await UserModel.findByIdAndUpdate(user._id, {
      refreshToken: refreshToken,
    });

    // 3. Response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const payload = { userId: user._id, role: user.role };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    await UserModel.findByIdAndUpdate(user._id, {
      refreshToken: refreshToken,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
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
    const refreshToken = req.cookies.refreshToken;

    // 1. Check refresh token exists
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is required",
      });
    }

    // 2. Verify refresh token
    let data;

    try {
      data = verifyRefreshToken(refreshToken);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired refresh token",
      });
    }

    // 3. Check decoded data
    if (!data) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired refresh token",
      });
    }

    const { userId } = data;

    // 4. Find user
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // 5. Compare stored refresh token with cookie token
    if (refreshToken !== user.refreshToken) {
      await UserModel.findByIdAndUpdate(user._id, {
        refreshToken: null,
      });

      return res.status(401).json({
        success: false,
        message: "Refresh token mismatch",
      });
    }

    // 6. Create new access token
    const payload = {
      userId: user._id,
      role: user.role,
    };

    const accessToken = createAccessToken(payload);

    // 7. Rotate refresh token
    const newRefreshToken = createRefreshToken(payload);

    // 8. Store new refresh token in DB
    await UserModel.findByIdAndUpdate(user._id, {
      refreshToken: newRefreshToken,
    });

    // 9. Send new refresh token in cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 10. Send access token to frontend
    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        accessToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    console.error("Refresh token error:", error);

    return res.status(500).json({
      success: false,
      message: "Token refresh failed",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    console.log(userId);
    

    const user = await UserModel.findById(userId).select(
      "-password -refreshToken ",
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};
