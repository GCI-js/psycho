import express, { NextFunction, Request, Response } from 'express';
import { SurveyController } from '../database/controller/SurveyController';

export const SurveyRouter = express.Router();

SurveyRouter.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  const surveyList = await SurveyController.findAllSurveys();
  res.status(200).json(surveyList);
})