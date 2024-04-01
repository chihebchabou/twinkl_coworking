import { Router } from "express";
import CourseController from "../controllers/CourseController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";

const courseRouter = Router();

courseRouter.route('/').get(asyncMiddleware(CourseController.index)).post(asyncMiddleware(CourseController.store));

courseRouter.route('/:id').get(asyncMiddleware(CourseController.show)).put(asyncMiddleware(CourseController.update)).delete(asyncMiddleware(CourseController.destroy));


export default courseRouter;