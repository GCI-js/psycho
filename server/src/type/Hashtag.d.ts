import { Document } from "mongoose";

declare interface Hashtag {
  _id?: string;
  hashtagId: string;
  name: string;
  type: HashtagType;
  mbtiCnt: number[];
}
