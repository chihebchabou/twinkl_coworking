import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";

const userRouter = Router()

userRouter.route('/signup').post(asyncMiddleware(UserController.signup));
userRouter.route('/signin').post(asyncMiddleware(UserController.signin));
userRouter.route('/signout').post(asyncMiddleware(UserController.signout));

export default userRouter