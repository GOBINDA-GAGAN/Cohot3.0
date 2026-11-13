import jwt from "jsonwebtoken";
import config from "../config/env.config.js";
export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.accessTokenSecret);
};
export const verifyRefreshToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, config.refreshTokenSecret);

    return decoded;
  } catch (error) {
    return null;
  }
};
