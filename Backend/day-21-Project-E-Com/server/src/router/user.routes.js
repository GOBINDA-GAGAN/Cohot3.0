import router from "express";
import { getAllUser } from "../controller/user.controller.js";

const userRouter = router();
userRouter.get("/", getAllUser);


export default userRouter;