import express, { NextFunction, Request, Response } from "express";
import { QuestionController } from "../database/controller/QuestionController";
import { Question } from "../../../common/type/Question";
export const QuestionRouter = express.Router();

QuestionRouter.post("/", async (req: Request, res: Response) => {
  let questionID: string = await (
    await QuestionController.getQuestionNum()
  ).toString();
  let newQuestion: Question = {
    questionId: questionID,
    image: req.body.image,
    title: req.body.title,
    type: req.body.type,
    date: req.body.date,
    contents: req.body.contents,
    mbtiChange: req.body.mbtiChange,
  };
  await QuestionController.createQuestion(newQuestion);
  res.status(200).json(await QuestionController.findOne(questionID));
});

QuestionRouter.get(
  "/items",
  async (req: Request, res: Response, next: NextFunction) => {
    const questionList = await QuestionController.findAllQuestions();
    res.status(200).json(questionList);
  }
);
