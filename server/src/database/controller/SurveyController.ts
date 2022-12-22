import { SurveyModel } from "../model/SurveyModel";
import { Survey } from "../../../../common/type/Survey";
import { Request, Response } from "express";
import { GetNewId } from "../../component/Util";

export const SurveyController = {
  createSurvey: async (req: Request, res: Response) => {
    console.log("createSurvey");
    let newSurveyId: string = await GetNewId(SurveyModel, "surveyId");
    let newSurvey: Survey = {
      surveyId: newSurveyId,
      ...req.body,
      isOpen: false,
    };
    await SurveyModel.create(newSurvey);
    let filter = { surveyId: newSurveyId };
    res.status(200).json(await SurveyModel.findOne(filter).lean<Survey>());
  },
  readSurveys: async (req: Request, res: Response) => {
    console.log("readSurveys");
    res.status(200).json(await SurveyModel.find(req.query).lean<Survey[]>());
  },
  updateSurvey: async (req: Request, res: Response) => {
    console.log("updateSurvey");
    let filter = { surveyId: req.params.surveyId };
    await SurveyModel.findOneAndUpdate(filter, req.body);
    res.status(200).json(await SurveyModel.findOne(filter).lean<Survey>());
  },
  deleteSurvey: async (req: Request, res: Response) => {
    console.log("deleteSurvey");
    let filter = { surveyId: req.params.surveyId };
    await SurveyModel.findOneAndDelete(filter);
    res.status(200).json({});
  },
};
