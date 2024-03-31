import { Router } from "express";
import CustomerController from "../controllers/CustomerController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";

const customerRouter = Router();

customerRouter.route('/register').post(asyncMiddleware(CustomerController.register));

export default customerRouter;