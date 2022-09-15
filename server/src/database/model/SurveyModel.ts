import { model, Schema } from 'mongoose';
import { Survey } from '../../type/Survey';

export const DOCUMENT_NAME = 'Survey';
export const COLLECTION_NAME = 'surveys';

const surveySchema = new Schema({
  survey_id: { type: String, required: true },
  question_id: { type: String, required: false },
  hashtags: [
    {
      hashtag_id: { type: String, required: false },
      name: { type: String, required: false }
    }
  ],
  options: [
    {
      index: { type: Number, required: false },
      name: { type: String, required: false }
    }
  ],
  result: [[ { type: Number, required: false } ]]
});

export const SurveyModel = model<Survey>(DOCUMENT_NAME, surveySchema, COLLECTION_NAME);