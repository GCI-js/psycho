import { SurveyModel } from "../model/SurveyModel";

export const SurveyController = {
    findAllSurveys: async () => {
    return SurveyModel.find({});
  }
}