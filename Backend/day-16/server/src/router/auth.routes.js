import router from "express";
import { profile, refreshToken, registerUser } from "../controller/auth.controller.js";

const authRouter = router();
authRouter.post("/register", registerUser);
authRouter.get("/me", profile);
authRouter.post("/refresh-token", refreshToken);

export default authRouter;