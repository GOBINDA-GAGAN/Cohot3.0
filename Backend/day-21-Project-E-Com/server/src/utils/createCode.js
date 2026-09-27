import crypto from "crypto";

export const createCode = () => {
  const mainString =
    "ABCDFEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var shortCode = "";

  for (let index = 0; index < 6; index++) {
    shortCode = shortCode + mainString.charAt(Math.floor(Math.random() * 62));
  }

  return shortCode;
};

