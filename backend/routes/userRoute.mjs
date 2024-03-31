import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";

const userRouter = Router()

userRouter.route('/register').post(asyncMiddleware(UserController.register));

export default userRouter