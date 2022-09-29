import { model, Schema } from "mongoose";
import { Hashtag } from "../../type/Hashtag";

export const DOCUMENT_NAME = 'Hashtag';
export const COLLECTION_NAME = 'hashtags';

const hashtagSchema = new Schema({
  hashtagId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: false},
  mbtiCnt: [
    {type: Number, required: false}
  ] 
});

export const HashtagModel = model<Hashtag>(DOCUMENT_NAME, hashtagSchema, COLLECTION_NAME);