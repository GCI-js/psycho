import { model, Schema } from "mongoose";
import { Betting } from "../../../../common/type/Betting";

export const DOCUMENT_NAME = "Betting";
export const COLLECTION_NAME = "bettings";

const bettingSchema = new Schema(
  {
    bettingId: { type: String, required: true },
    surveyId: { type: String, required: false },
    openTime: { type: Number, required: false },
    closeTime: { type: Number, required: false },
    title: { type: String, required: false },
    contents: {
      main: { type: String, required: false },
      options: [
        {
          index: { type: Number, required: false },
          name: { type: String, required: false },
        },
      ],
    },
    betState: [
      {
        index: { type: Number, required: false },
        name: { type: String, required: false },
        userCnt: { type: Number, required: false },
        balance: { type: Number, required: false },
        dividend: { type: Number, required: false }, //배당률
      },
    ],
    result: [
      {
        index: { type: Number, required: false },
        rate: { type: Number, required: false },
      },
    ],
    answerIndex: { type: Number, required: false },
  },
  { versionKey: false }
);

export const BettingModel = model<Betting>(
  DOCUMENT_NAME,
  bettingSchema,
  COLLECTION_NAME
);
