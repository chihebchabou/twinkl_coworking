import { Router } from "express";
import CourseController from "../controllers/CourseController.mjs";

const courseRouter = Router();

courseRouter.route('/').get(CourseController.index).post(CourseController.store);
courseRouter.route('/:id').get(CourseController.show).put(CourseController.update).delete(CourseController.destroy);


export default courseRouter;