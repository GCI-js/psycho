import express, { NextFunction, Request, Response } from 'express';
import { QuestionController } from '../database/controller/QuestionController';

export const QuestionRouter = express.Router();

QuestionRouter.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  const questionList = await QuestionController.findAllQuestions();
  res.status(200).json(questionList);
})