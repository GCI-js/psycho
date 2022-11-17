import { QuestionModel } from "../model/QuestionModel";
import { Question } from "../../../../common/type/Question";

export const QuestionController = {
  getQuestionNum: async () => {
    let cnt = await QuestionModel.count({});
    return cnt;
  },
  createQuestion: async (newQuestion: Question) => {
    await QuestionModel.create(newQuestion);
  },
  findAllQuestions: async () => {
    return QuestionModel.find({});
  },
  findOne: async (questionId: string) => {
    let filter = { questionId: questionId };
    return await QuestionModel.findOne(filter).lean<Question>();
  },
};
