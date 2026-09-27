import express from "express";
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controller/auth.controller.js";
import registerValidator from "../validator/auth.validator.js";

const authRouter = express.Router();

authRouter.post("/register",registerValidator, register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/refresh-token", refreshToken);

export default authRouter;