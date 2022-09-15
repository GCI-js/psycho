import { model, Schema } from "mongoose";
import { Hashtag } from "../../type/Hashtag";

const hashtagSchema = new Schema({
  hashtag_id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: false},
  mbti_cnt: [
    {type: Number, required: false}
  ] 
});

export const HashtagModel = model<Hashtag>('Hashtag', hashtagSchema);