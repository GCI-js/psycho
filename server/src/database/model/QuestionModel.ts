import { model, Schema } from 'mongoose';
import { Question } from '../../type/Question';

export const DOCUMENT_NAME = 'Question';
export const COLLECTION_NAME = 'questions';

const questionSchema = new Schema({
  question_id: { type: String, required: true },
  survey_id: { type: String, required: false },
  image: { type: String, required: false },
  title: { type: String, required: false },
  type: { type: String, required: false },
  date: { type: Number, required: false },
  contents: {
    main: { type: String, required: false },
    options: [
      {
        index: { type: Number, required: false },
        name: { type: String, required: false }
      }
    ],
  },
  mbti_change: [
    {
      factor: { type: String, required: false },
      value: { type: Number, required: false }
    }
  ]
});

export const QuestionModel = model<Question>(DOCUMENT_NAME, questionSchema, COLLECTION_NAME);