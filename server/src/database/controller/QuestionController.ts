import { QuestionModel } from "../model/QuestionModel";
import { Question } from "../../../../common/type/Question";
import { Request, Response } from "express";
import { GetNewId } from "../../component/Util";

export const QuestionController = {
  createQuestion: async (req: Request, res: Response) => {
    console.log("createQuestion");
    let newQuestionId: string = await GetNewId(QuestionModel, "questionId");
    let newQuestion: Question = {
      questionId: newQuestionId,
      ...req.body,
    };
    await QuestionModel.create(newQuestion);
    let filter = { questionId: newQuestionId };
    res.status(200).json(await QuestionModel.findOne(filter).lean<Question>());
  },
  readQuestions: async (req: Request, res: Response) => {
    console.log("readQuestions");
    res
      .status(200)
      .json(await QuestionModel.find(req.query).lean<Question[]>());
  },
  updateQuestion: async (req: Request, res: Response) => {
    console.log("updateQuestion");
    let filter = { questionId: req.params.questionId };
    await QuestionModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await QuestionModel.findOne(filter).lean<Question>());
  },
  deleteQuestion: async (req: Request, res: Response) => {
    console.log("deleteQuestion");
    let filter = { questionId: req.params.questionId };
    await QuestionModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
};
