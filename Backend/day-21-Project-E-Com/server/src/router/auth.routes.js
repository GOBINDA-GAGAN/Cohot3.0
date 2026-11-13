import express from "express";
import {
  register,
  login,
  logout,
  refreshToken,
  getProfile,
} from "../controller/auth.controller.js";
import { loginValidator, registerValidator } from "../validator/auth.validator.js";
import { authenticate } from "../middlewares/auth.middlewares.js";


const authRouter = express.Router();

authRouter.post("/register",registerValidator, register);
authRouter.post("/login",loginValidator, login);
authRouter.get("/refresh-token", refreshToken);
authRouter.post("/logout", logout);
authRouter.get("/profile",authenticate,getProfile);

export default authRouter;