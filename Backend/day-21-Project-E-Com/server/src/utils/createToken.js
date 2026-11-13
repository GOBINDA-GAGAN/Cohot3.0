import jwt from "jsonwebtoken";
import config from "../config/env.config.js";

export const createAccessToken = (payload) => {
  const token = jwt.sign(payload, config.accessTokenSecret, {
    expiresIn: config.accessTokenExpiration,
  });

  return token;
};
export const createRefreshToken = (payload) => {
  const token = jwt.sign(payload, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenExpiration,
  });

  return token;
};



