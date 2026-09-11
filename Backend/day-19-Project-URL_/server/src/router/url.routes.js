import router from "express";
import { createUrl } from "../controller/url.controller.js";

const urlRouter = router();
urlRouter.post("/create", createUrl);


export default urlRouter;