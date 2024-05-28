import { Router } from "express";
import CustomerController from "../controllers/CustomerController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";
import { auth } from "../middleware/authMiddleware.mjs";

const customerRouter = Router();


customerRouter.route('/register').post(asyncMiddleware(CustomerController.register));
customerRouter.route('/').get(asyncMiddleware(auth), asyncMiddleware(CustomerController.index));

export default customerRouter;