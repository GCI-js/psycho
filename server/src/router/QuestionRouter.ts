import express from "express";
import { QuestionController } from "../database/controller/QuestionController";
export const QuestionRouter = express.Router();

QuestionRouter.post("/", QuestionController.createQuestion);
QuestionRouter.get("/items", QuestionController.readQuestions);
QuestionRouter.put("/items/:questionId", QuestionController.updateQuestion);
QuestionRouter.delete("/items/:questionId", QuestionController.deleteQuestion);
