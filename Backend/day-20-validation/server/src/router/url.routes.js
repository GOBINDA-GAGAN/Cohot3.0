import router from "express";
import { createUrl, getAllUrl } from "../controller/url.controller.js";

const urlRouter = router();
urlRouter.post("/", createUrl);
urlRouter.get("/", getAllUrl);


export default urlRouter;