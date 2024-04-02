import { Router } from "express";
import SocialNetworkController from "../controllers/SocialNetworkController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";
import { auth } from "../middleware/authMiddleware.mjs";

const socialNetworkRouter = Router();

socialNetworkRouter.route('/').get(asyncMiddleware(SocialNetworkController.index)).post(asyncMiddleware(auth), asyncMiddleware(SocialNetworkController.store));

socialNetworkRouter.route('/:id').get(asyncMiddleware(SocialNetworkController.show)).put(asyncMiddleware(SocialNetworkController.update)).delete(asyncMiddleware(SocialNetworkController.destroy));


export default socialNetworkRouter;