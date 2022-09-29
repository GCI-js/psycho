import { model, Schema } from 'mongoose';
import { Gamble } from '../../type/Gamble';

export const DOCUMENT_NAME = 'Gamble';
export const COLLECTION_NAME = 'gambles';

const gambleSchema = new Schema({
  gambleId: { type: String, required: true },
  surveyId: { type: String, required: false },
  openTime: { type: Number, required: false},
  closeTime: { type: Number, required: false },
  title: { type: String, required: false },
  contents: {
    main: { type: String, required: false },
    options: [
      {
        index: { type: Number, required: false },
        name: { type: String, required: false }
      }
    ],
  },
  betState: [
    {
      index: { type: Number, required: false },
      name: { type: String, required: false },
      userCnt: { type: Number, required: false },
      balance: { type: Number, required: false },
      dividend: { type: Number, required: false }, //배당률
    }
  ],
  result: { type: Number, required: false },
});

export const GambleModel = model<Gamble>(DOCUMENT_NAME, gambleSchema, COLLECTION_NAME);