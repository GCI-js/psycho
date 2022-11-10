import { QuestionModel } from "../model/QuestionModel";

export const QuestionController = {
    findAllQuestions: async () => {
    return QuestionModel.find({});
  }
}