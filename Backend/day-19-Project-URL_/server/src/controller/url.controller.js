import { createCode } from "../utils/createCode.js";
import urlModel from "../models/url.model.js";

export const createUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({
        message: "please enter a URL",
      });
    }

    if (
      longUrl.startsWith("https://") == false &&
      longUrl.startsWith("http://") == false
    ) {
      return res.status(400).json({
        message: "please enter a  valid URL",
      });
    }

    if (longUrl.length > 2048) {
      return res.status(400).json({
        message: "URL is too long",
      });
    }

    const code = createCode();
    const newUrl = await urlModel.create({
      originalUrl: longUrl,
      shortCode: code,
    });

    return res.status(201).json({
      message: "Url created successfully",
      data: {
        newUrl,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "error in create url",
      error: error.message,
    });
  }
};
