import express from "express";
import { SurveyController } from "../database/controller/SurveyController";
export const SurveyRouter = express.Router();

SurveyRouter.post("/", SurveyController.createSurvey);
SurveyRouter.get("/items", SurveyController.readSurveys);
SurveyRouter.put("/items/:surveyId", SurveyController.updateSurvey);
SurveyRouter.delete("/items/:surveyId", SurveyController.deleteSurvey);
