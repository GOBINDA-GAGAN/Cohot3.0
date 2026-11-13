import { verifyAccessToken } from "../utils/jwt.js";
import UserModel from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    // 1. Get Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    // 2. Check Bearer token
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format",
      });
    }

    // 3. Extract access token
    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
      });
    }

    // 4. Verify access token
    let data;

    try {
      data = verifyAccessToken(accessToken);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired access token",
      });
    }

    // 5. Validate decoded data
    if (!data || !data.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });
    }

    // 6. Find user
    const user = await UserModel.findById(data.userId).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // 7. Attach user to request
    req.user = user;

    // Optional: attach JWT payload too
    req.user = {
      userId: data.userId,
      role: data.role,
    };

    // 8. Continue
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};