import { Router } from "express";
import CourseController from "../controllers/CourseController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";
import { auth } from "../middleware/authMiddleware.mjs";

const courseRouter = Router();

courseRouter.route('/').get(asyncMiddleware(CourseController.index)).post(asyncMiddleware(auth), asyncMiddleware(CourseController.store));

courseRouter.route('/:slug').get(asyncMiddleware(CourseController.show)).put(asyncMiddleware(auth), asyncMiddleware(CourseController.update)).delete(asyncMiddleware(auth), asyncMiddleware(CourseController.destroy));


export default courseRouter;