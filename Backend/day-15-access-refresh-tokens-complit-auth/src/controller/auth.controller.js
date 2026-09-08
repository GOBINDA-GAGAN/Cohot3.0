import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/createToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    // 2. Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // 5. Save user
    await newUser.save();

    // 6. Create tokens
    const accessToken = createAccessToken({
      id: newUser._id,
    });

    const refreshToken = createRefreshToken({
      id: newUser._id,
    });

    // 7. Store refresh token in database
    newUser.refreshToken = refreshToken;
    await newUser.save();

    // 8. Store refresh token in HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 9. Send response
    res.status(201).json({
      message: "User registered successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

export const profile = async (req, res) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    console.log("Access Token:", accessToken); // Log the access token for debugging

    const decoded = verifyAccessToken(accessToken);
    const userId = decoded.id;

    const user = await User.findById(userId).select("-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving profile",
      error: error.message,
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    // 1. Get refresh token from HttpOnly cookie
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not provided",
      });
    }

    // 2. Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);

    // 3. Find user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 4. Compare token with stored token
    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(403).json({
        message: "Invalid refresh token",
      });
    }

    // 5. Create new access token
    const newAccessToken = createAccessToken({
      id: user._id,
    });

    // 6. Rotate refresh token
    const newRefreshToken = createRefreshToken({
      id: user._id,
    });

    // 7. Update refresh token in database
    user.refreshToken = newRefreshToken;
    await user.save();

    // 8. Send new refresh token as HttpOnly cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 9. Send new access token
    return res.status(200).json({
      message: "Token refreshed successfully",
      accessToken: newAccessToken,
    });

  } catch (error) {
    console.error("Refresh token error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired refresh token",
    });
  }
};
