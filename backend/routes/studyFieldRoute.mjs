import { Router } from "express";
import StudyFieldController from "../controllers/StudyFieldController.mjs";
import asyncMiddleware from "../middleware/asyncMiddleware.mjs";
import { auth } from "../middleware/authMiddleware.mjs";

const studyFieldRouter = Router();

studyFieldRouter.route('/').get(asyncMiddleware(StudyFieldController.index)).post(asyncMiddleware(auth), asyncMiddleware(StudyFieldController.store));


export default studyFieldRouter